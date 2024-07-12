import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactElement,
  ReactNode,
} from "react";
import { ThemeProvider, useTheme } from "styled-components";

import { useKey } from "../../hooks/useKey";
import defaultTheme from "../../themes/cruk";
import useEffectBrowser from "../../hooks/useEffectBrowser";

import { PopOverPositionType } from "../../types";
import { PopOverWrapper, PopOverModal } from "./styles";

export type PopOverProps = {
  /** modalLabel: used for aria-label of modal */
  modalLabel: string;
  /** modalContent: contents in side the popover modal */
  modalContent: ReactNode;
  /** position: position that the popover opens relative to the triggering element, the trigger element is the child of the component */
  position?: PopOverPositionType;
  /** full: enable child button extend full width */
  full?: boolean;
  /**  maxWidth: popover modal max width */
  maxWidth?: string;
  /**  minWidth: popover modal min width */
  minWidth?: string;
  /**  onPopOverIsOpenChange: popover isOpen changed handler */
  onPopOverIsOpenChange?: (isOpen: boolean) => void;
  children?: ReactNode;
  css?: string;
};

/**
 * Popover is a non-modal dialog that floats around its disclosure. It's
commonly used for displaying additional rich content on top of something.
*/
const PopOver = ({
  onPopOverIsOpenChange,
  children,
  minWidth,
  maxWidth,
  position,
  modalLabel,
  modalContent,
  css,
  full = false,
}: PopOverProps) => {
  const popRef = useRef<HTMLDivElement>(null);
  const [showPopOver, setShowPopOver] = useState(false);
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const toggle = () => setShowPopOver(!showPopOver);
  const closePopOver = () => setShowPopOver(false);

  // outside click closes popover
  const handleDocumentClick = useCallback(
    (e: MouseEvent) => {
      if (!!popRef.current && !popRef.current.contains(e.target as Node)) {
        closePopOver();
      }
    },
    [popRef.current],
  );

  useKey(
    () => {
      closePopOver();
    },
    {
      detectKeys: ["Escape"],
    },
    [],
  );

  useEffect(() => {
    if (onPopOverIsOpenChange) {
      onPopOverIsOpenChange(showPopOver);
    }
  }, [showPopOver]);

  useEffectBrowser(() => {
    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PopOverWrapper full={full} css={css} ref={popRef}>
        {React.Children.map(
          children as ReactElement,
          (child: React.ReactElement) =>
            React.cloneElement(child, {
              onClick: toggle,
              "aria-expanded": showPopOver,
              "aria-haspopup": "dialog",
            }),
        )}
        {showPopOver ? (
          <PopOverModal
            maxWidth={maxWidth || "none"}
            minWidth={minWidth || "auto"}
            position={position || "top"}
            theme={theme}
            role="dialog"
            aria-label={modalLabel}
            aria-modal={showPopOver}
          >
            {modalContent}
          </PopOverModal>
        ) : null}
      </PopOverWrapper>
    </ThemeProvider>
  );
};

export default PopOver;
