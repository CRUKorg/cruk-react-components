import React, {
  useState,
  useEffect,
  FC,
  useRef,
  useCallback,
  ReactElement,
  ReactNode,
} from "react";
import { ThemeProvider, useTheme } from "styled-components";

import { useKey } from "src/hooks/useKey";
import defaultTheme from "src/themes/cruk";
import useEffectBrowser from "src/hooks/useEffectBrowser";

import { PopOverPositionType } from "src/types";
import { PopOverWrapper, PopOverModal } from "./styles";

export type PopOverProps = {
  /** used for aria-label of modal */
  modalLabel: string;
  /** contents in side the popover modal */
  modalContent: ReactNode;
  /**  position that the popover opens relative to the triggering element, the trigger element is the child of the component */
  position?: PopOverPositionType;
  css?: string;
  /**  popover modal max width */
  maxWidth?: string;
  /**  popover modal min width */
  minWidth?: string;
  /**  popover isOpen changed handler */
  onPopOverIsOpenChange?: (isOpen: boolean) => void;
};

/**
 * Popover is a non-modal dialog that floats around its disclosure. It's
commonly used for displaying additional rich content on top of something.
*/
const PopOver: FC<PopOverProps> = ({
  onPopOverIsOpenChange,
  children,
  minWidth,
  maxWidth,
  position,
  modalLabel,
  modalContent,
  css,
}) => {
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
    [popRef.current]
  );

  useKey(
    () => {
      closePopOver();
    },
    {
      detectKeys: ["Escape"],
    },
    []
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
      <PopOverWrapper css={css} ref={popRef}>
        {React.Children.map(
          children as ReactElement,
          (child: React.ReactElement) =>
            React.cloneElement(child, {
              onClick: toggle,
              "aria-expanded": showPopOver,
              "aria-haspopup": "dialog",
            })
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
