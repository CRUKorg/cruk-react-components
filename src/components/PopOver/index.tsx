import React, {
  useState,
  useEffect,
  useRef,
  type ReactNode,
  type DetailedReactHTMLElement,
} from "react";

import { useKey } from "../../hooks/useKey";
import { useEffectBrowser } from "../../hooks/useEffectBrowser";

import { type PopOverPositionType } from "../../types";

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
export function PopOver({
  onPopOverIsOpenChange,
  children,
  minWidth,
  maxWidth,
  position,
  modalLabel,
  modalContent,
  full = false,
}: PopOverProps) {
  const popRef = useRef<HTMLDivElement>(null);
  const [showPopOver, setShowPopOver] = useState(false);

  const toggle = () => setShowPopOver(!showPopOver);
  const closePopOver = () => setShowPopOver(false);

  // outside click closes popover
  const handleDocumentClick = (e: MouseEvent) => {
    if (!!popRef.current && !popRef.current.contains(e.target as Node)) {
      closePopOver();
    }
  };

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
  }, [showPopOver, onPopOverIsOpenChange]);

  useEffectBrowser(() => {
    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  return (
    <div
      className="component-popover"
      ref={popRef}
      data-full={full}
      data-position={position || "top"}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(
          child as DetailedReactHTMLElement<object, HTMLElement>,
          {
            onClick: toggle,
            "aria-expanded": showPopOver,
            "aria-haspopup": "dialog",
          },
        ),
      )}
      {showPopOver ? (
        <div
          className="popover-modal"
          style={{
            maxWidth: maxWidth || "none",
            minWidth: minWidth || "auto",
          }}
          role="dialog"
          aria-label={modalLabel}
          aria-modal={showPopOver}
        >
          {modalContent}
        </div>
      ) : null}
    </div>
  );
}

export default PopOver;
