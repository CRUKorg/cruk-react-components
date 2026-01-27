import React, {
  useRef,
  useId,
  type ReactNode,
  type DetailedReactHTMLElement,
} from "react";

import { type PopOverPositionType } from "../../types";

export type PopOverProps = {
  /** modalLabel: used for aria-label of modal */
  modalLabel: string;
  /** modalContent: contents in side the popover modal */
  modalContent: ReactNode;
  /** position: position that the popover opens relative to the triggering element, the trigger element is the child of the component */
  position?: PopOverPositionType;
  /**  onPopOverIsOpenChange: popover isOpen changed handler */
  onPopOverIsOpenChange?: (isOpen: boolean) => void;
  /** enable animation in modal */
  isAnimated?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties;
};

/**
 * Popover is a non-modal dialog that floats around its disclosure. It's
commonly used for displaying additional rich content on top of something.
*/
export function PopOver({
  onPopOverIsOpenChange,
  children,
  position,
  modalLabel,
  modalContent,
  style,
  isAnimated = true,
}: PopOverProps) {
  const id = useId();
  const popRef = useRef<HTMLDialogElement>(null);
  const hasOpenedRef = useRef(false);

  function handleClick() {
    if (onPopOverIsOpenChange && !hasOpenedRef.current) {
      onPopOverIsOpenChange(true);
      hasOpenedRef.current = true;
    }
  }

  return (
    <div
      className="component-popover"
      data-position={position || "top"}
      data-is-animated={isAnimated}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(
          child as DetailedReactHTMLElement<object, HTMLElement>,
          {
            popovertarget: id,
            onClick: handleClick,
          },
        ),
      )}

      <dialog
        popover="auto"
        id={id}
        ref={popRef}
        role="dialog"
        style={{
          ...style,
        }}
        data-is-animated={isAnimated}
        aria-label={modalLabel}
      >
        {modalContent}
      </dialog>
    </div>
  );
}

export default PopOver;
