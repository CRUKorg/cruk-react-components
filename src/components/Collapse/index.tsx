import React, { useState, useRef, KeyboardEvent, FunctionComponent, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import Button from '../Button';
import Icon from '../Icon';

import { FontSizeType, ThemeType } from '../../types';

const transitionDurationSeconds = 0.5;

type CollapseProps = {
  id: string;
  headerTitleText: string;
  headerTitleTextColor?: string;
  headerTitleTextSize?: FontSizeType;
  headerComponent?: ReactNode;
  contentHeight?: string;
  startOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  theme?: ThemeType;
};

const CollapseWrapper = styled.div``;

const FlippingIcon = styled(Icon)`
  transform: ${({ open }: { open: boolean }) =>
    !!open ? 'rotate(90deg) translateX(0.1em) scaleX(-1) ' : 'rotate(90deg)'};
  transition-duration: ${transitionDurationSeconds}s;
`;

type StyledProgressBarProps = {
  theme: ThemeType;
  textColor?: string;
  textSize?: FontSizeType;
};

const DefaultHeader = styled(Button)<StyledProgressBarProps>`
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
};

const CollapseContent = styled.div<CollapseContentProps>`
  margin: 0;
  transition: ${transitionDurationSeconds}s ease;
  height: ${({ contentHeight }) => contentHeight};
  overflow: hidden;
  & > p {
    margin-top: 0;
  }
`;

const CustomHeader = styled.div`
  cursor: pointer;
`;

const Collapse: FunctionComponent<CollapseProps> = props => {
  const [openStatus, setOpenStatus] = useState(props.startOpen || false);
  const [contentHeight, setContentHeight] = useState('0');
  const content = useRef<HTMLDivElement>(null);
  const transitionTimer = useRef(0);

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
      transitionTimer.current = setTimeout(() => setContentHeight('initial'), transitionDurationSeconds * 1000);
    }
    !!props.onOpenChange && props.onOpenChange(newOpenState);
  };

  const triggerToggle = (event: KeyboardEvent) => {
    if (event.which == 32 || event.which == 13) {
      event.preventDefault();
      toggleCollapse();
    }
  };

  const renderHeader = (theme: ThemeType) => {
    const defaultProps = {
      'aria-controls': `${props.id}-header`,
      'aria-expanded': openStatus,
      id: `${props.id}-header`,
      onClick: toggleCollapse,
    };

    return props.headerComponent ? (
      <CustomHeader
        {...defaultProps}
        aria-disabled={false}
        aria-label={props.headerTitleText}
        onKeyDown={triggerToggle}
        role="button"
        tabIndex={0}
      >
        {props.headerComponent}
      </CustomHeader>
    ) : (
      <DefaultHeader
        {...defaultProps}
        theme={theme}
        appearance="text"
        type="button"
        textColor={props.headerTitleTextColor}
        textSize={props.headerTitleTextSize}
      >
        {props.headerTitleText}
        <FlippingIcon name="chevronRight" open={openStatus} />
      </DefaultHeader>
    );
  };

  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <CollapseWrapper>
      {renderHeader(theme)}
      <CollapseContent
        theme={theme}
        id={`${props.id}-content`}
        ref={content}
        role="region"
        aria-hidden={!openStatus}
        aria-labelledby={`${props.id}-header`}
        contentHeight={contentHeight}
      >
        {props.children}
      </CollapseContent>
    </CollapseWrapper>
  );
};

export default withTheme(Collapse);
