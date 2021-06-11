import React, { useState, useRef, KeyboardEvent, FunctionComponent, ReactNode, useEffect, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import defaultTheme from 'src/themes/cruk';

import { CustomHeader, DefaultHeader, FlippingIcon, CollapseContent, transitionDurationSeconds } from './styles';

import { FontSizeType, ThemeType } from 'src/types';

export type CollapseProps = HTMLAttributes<HTMLElement> & {
  /** id is required for a11y reasons as we use aria attributes which depends on an id  */
  id: string;
  /** text of collapse header, even if there is a custom header component this prop is still used for aria attributes */
  headerTitleText: string;
  /** collapse header text colour */
  headerTitleTextColor?: string;
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
};

/**
 *
 * Use a collapse component to show and hide content. It has a default view; however, it can be overwritten by passing a custom component as a prop.
 *
 */
const Collapse: FunctionComponent<CollapseProps> = props => {
  const {
    id,
    headerTitleText,
    headerTitleTextColor,
    headerTitleTextSize,
    headerTitleTextFontFamily,
    headerComponent,
    startOpen,
    onOpenChange,
    children,
  } = props;

  const [openStatus, setOpenStatus] = useState(startOpen || false);
  const [contentHeight, setContentHeight] = useState(startOpen ? 'initial' : '0');
  const content = useRef<HTMLDivElement>(null);
  const transitionTimer = useRef(0);
  const foundTheme = useTheme();
  const theme: ThemeType = {
    ...defaultTheme,
    ...foundTheme,
  };

  const toggleCollapse = () => {
    clearTimeout(transitionTimer.current);
    const newOpenState = !openStatus;
    setOpenStatus(newOpenState);
    setContentHeight(content?.current?.scrollHeight + 'px');
    if (newOpenState === false) {
      // Allow height to be rendered before setting to 0 for animation.
      setTimeout(() => setContentHeight('0'), 10);
    } else {
      // After animation set height to initial for responsive layout.
      // @ts-ignore
      transitionTimer.current = setTimeout(() => setContentHeight('initial'), transitionDurationSeconds * 1000);
    }
    !!onOpenChange && onOpenChange(newOpenState);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      toggleCollapse();
    }
  };

  useEffect(() => {
    setOpenStatus(startOpen || false);
    // if start open changes then we want to set the height without animation
    !!startOpen ? setContentHeight('initial') : setContentHeight('0');
  }, [startOpen]);

  return (
    <div>
      {headerComponent ? (
        <CustomHeader
          theme={theme}
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
        </CustomHeader>
      ) : (
        <DefaultHeader
          aria-controls={`${id}-header`}
          aria-expanded={openStatus}
          id={`${id}-header`}
          onClick={toggleCollapse}
          theme={theme}
          appearance="text"
          type="button"
          textColor={headerTitleTextColor}
          textSize={headerTitleTextSize}
          textFontFamily={headerTitleTextFontFamily}
        >
          {headerTitleText}
          <FlippingIcon name="chevronRight" open={openStatus} />
        </DefaultHeader>
      )}
      <CollapseContent
        theme={theme}
        id={`${id}-content`}
        ref={content}
        role="region"
        aria-hidden={!openStatus}
        aria-labelledby={`${id}-header`}
        contentHeight={contentHeight}
        openStatus={openStatus}
      >
        {children}
      </CollapseContent>
    </div>
  );
};

export default Collapse;
