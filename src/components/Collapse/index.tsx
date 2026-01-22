import React, {
  useState,
  useRef,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  type HTMLAttributes,
} from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { IconFa } from "../IconFa";

import { type ColourVariableType, type FontSizeType } from "../../types";

export type CollapseProps = HTMLAttributes<HTMLElement> & {
  /** id is required for a11y reasons as we use aria attributes which depends on an id  */
  id: string;
  /** text of collapse header, even if there is a custom header component this prop is still used for aria attributes */
  headerTitleText: string;
  /** collapse header text colour */
  headerTitleTextColor?: ColourVariableType;
  /** collapse header text size */
  headerTitleTextSize?: FontSizeType;
  /** collapse header font family */
  headerTitleTextFontFamily?: string;
  /** custom collapse header component */
  headerComponent?: ReactNode;
  /** flag to indicate  */
  startOpen?: boolean;
  /** callback function that is passed isOpen flag  */
  onOpenChange?: (isOpen: boolean) => void;
  /** children */
  children?: ReactNode;
};

/**
 *
 * Use a collapse component to show and hide content. It has a default view; however, it can be overwritten by passing a custom component as a prop.
 *
 */
export function Collapse({
  id,
  headerTitleText,
  headerTitleTextColor,
  headerTitleTextSize,
  headerTitleTextFontFamily,
  headerComponent,
  startOpen,
  onOpenChange,
  children,
}: CollapseProps) {
  const [openStatus, setOpenStatus] = useState(startOpen || false);
  const [isVisible, setIsVisible] = useState(startOpen ? true : false);
  const content = useRef<HTMLDivElement>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleCollapse = () => {
    const newOpenState = !openStatus;
    setOpenStatus(newOpenState);

    if (newOpenState === false) {
      // Allow height to be rendered before setting to 0 for animation.
      transitionTimer.current = setTimeout(
        () => setIsVisible(false),
        0.5 * 1000,
      );
    } else {
      setTimeout(() => setIsVisible(true), 0);
    }
    if (onOpenChange !== undefined) {
      onOpenChange(newOpenState);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "Spacebar"
    ) {
      event.preventDefault();
      toggleCollapse();
    }
  };

  useEffect(() => {
    setOpenStatus(startOpen || false);
    // if start open changes then we want to set the height without animation
    if (startOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [startOpen]);

  return (
    <div id={id} className="component-collapse">
      {headerComponent ? (
        <div
          className="custom-header"
          aria-controls={`${id}-header`}
          aria-expanded={openStatus}
          id={`${id}-header`}
          onClick={toggleCollapse}
          aria-disabled={false}
          aria-label={headerTitleText}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          {headerComponent}
        </div>
      ) : (
        <button
          className={["default-header", "color-props", "text-props"].join(" ")}
          id={`${id}-header`}
          type="button"
          onClick={toggleCollapse}
          aria-controls={`${id}-header`}
          aria-expanded={openStatus}
          data-color={headerTitleTextColor}
          data-text-size={headerTitleTextSize || "m"}
          data-text-font-family={headerTitleTextFontFamily}
        >
          <span className="spacer">{headerTitleText}</span>
          <span className="spacer">
            <span className="flipping-icon">
              <IconFa faIcon={faChevronDown} />
            </span>
          </span>
        </button>
      )}
      <div
        className="collapse-content"
        id={`${id}-content`}
        ref={content}
        role="region"
        aria-hidden={!openStatus}
        data-is-visible={isVisible}
        aria-labelledby={`${id}-header`}
      >
        <div style={{ overflow: "hidden" }}>{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
