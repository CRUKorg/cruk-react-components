import React, { useState, useRef, KeyboardEvent, FunctionComponent, ReactNode, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import defaultTheme from 'src/themes/cruk';

import Button from 'src/components/Button';
import Icon from 'src/components/Icon';

import { FontSizeType, ThemeType } from 'src/types';

const transitionDurationSeconds = 0.5;

type Props = {
  id: string;
  headerTitleText: string;
  headerTitleTextColor?: string;
  headerTitleTextSize?: FontSizeType;
  headerTitleTextFontFamily?: string;
  headerComponent?: ReactNode;
  startOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

const FlippingIcon = styled(Icon)`
  transform: ${({ open }: { open: boolean }) =>
    !!open ? 'rotate(90deg) translateX(0.1em) scaleX(-1) ' : 'rotate(90deg)'};
  transition-duration: ${transitionDurationSeconds}s;
`;

type DefaultHeaderProps = {
  textColor?: string;
  textSize?: FontSizeType;
  textFontFamily?: string;
};

const DefaultHeader = styled(Button)<DefaultHeaderProps>`
  display: flex;
  color: ${({ theme: { colors }, textColor }) =>
    textColor && typeof colors[textColor] !== 'undefined'
      ? colors[textColor]
      : textColor
      ? textColor
      : colors['secondary']};
  font-size: ${({
    theme: {
      fontSizes,
      fontSizes: { m },
    },
    textSize,
  }) => (textSize ? fontSizes[textSize] : m)};
  font-family: ${({ theme, textFontFamily }) => (textFontFamily ? textFontFamily : theme.typography.fontFamilyBase)};
  font-weight: normal;
  margin-bottom: 0;
  height: initial;
  text-decoration: none;
  text-align: left;
  :hover,
  :focus {
    color: ${({ theme: { colors }, textColor }) =>
      textColor && typeof colors[textColor] !== 'undefined'
        ? colors[textColor]
        : textColor
        ? textColor
        : colors['secondary']};
  }
`;

type CollapseContentProps = {
  contentHeight: string;
  openStatus: boolean;
};

const CollapseContent = styled.div<CollapseContentProps>`
  margin: 0;
  transition: ${transitionDurationSeconds}s ease;
  height: ${({ contentHeight }) => contentHeight};
  visibility: ${({ openStatus }) => (openStatus ? 'visible' : 'hidden')};
  overflow: hidden;
  & > p {
    margin-top: 0;
  }
`;

const CustomHeader = styled.div`
  cursor: pointer;
`;

const Collapse: FunctionComponent<Props> = props => {
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

  const renderHeader = (theme: ThemeType) => {
    return headerComponent ? (
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
    );
  };

  const theme: ThemeType = {
    ...defaultTheme,
    ...foundTheme,
  };

  return (
    <div>
      {renderHeader(theme)}
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
