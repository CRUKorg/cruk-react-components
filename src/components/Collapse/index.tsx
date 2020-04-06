import React, { useState, useRef, KeyboardEvent, FunctionComponent, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

import Button from '../Button';
import { Icon } from '..';

type CollapseProps = {
  active: boolean;
  headerTitleText: string;
  headerTitleComponent?: ReactNode;
  contentHeight?: string;
  id?: string;
  theme?: ThemeType;
};

type DefaultHeaderProps = {
  theme: ThemeType;
  active: boolean;
};

const DefaultHeader = styled(Button)<DefaultHeaderProps>`
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  font-weight: normal;
  margin-bottom: 0;
  padding: 0 0 10px;
  text-decoration: none;

  & svg {
    font-size: ${({
      theme: {
        fontSizes: { extraSmall },
      },
    }) => extraSmall};
    transform: ${({ active }) => (active === true ? 'rotate(90deg)' : 'none')};
    transition-duration: 0.5s;
  }
`;

type CollapseContentProps = {
  contentHeight: string;
};

const CollapseContent = styled.div<CollapseContentProps>`
  margin: 0;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  height: ${({ contentHeight }) => contentHeight};
  overflow: hidden;
  transition: 0.5s ease;
  & > p {
    margin-top: 0;
  }
`;

const CustomHeader = styled.div`
  cursor: pointer;
`;

const Collapse: FunctionComponent<CollapseProps> = props => {
  const [activeStatus, setActiveStatus] = useState(false);
  const [contentHeight, setContentHeight] = useState('0');
  const content = useRef(null);

  const toggleCollapse = () => {
    setActiveStatus(activeStatus === false ? true : false);
    setContentHeight(activeStatus === true ? '0' : `${content.current.scrollHeight}`);
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
      'aria-expanded': activeStatus,
      id: `${props.id}-header`,
      onClick: toggleCollapse,
    };

    return props.headerTitleComponent ? (
      <CustomHeader
        {...defaultProps}
        aria-disabled={false}
        aria-label={props.headerTitleText}
        onKeyDown={triggerToggle}
        role="button"
        tabIndex={0}
      >
        {props.headerTitleComponent}
      </CustomHeader>
    ) : (
      <DefaultHeader
        {...defaultProps}
        theme={theme}
        appearance="text"
        active={activeStatus}
        ariaLabel={props.headerTitleText}
      >
        {props.headerTitleText}
        <Icon name="chevronRight" />
      </DefaultHeader>
    );
  };

  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <>
      {renderHeader(theme)}
      <CollapseContent
        theme={theme}
        role="region"
        aria-hidden={activeStatus === false ? true : false}
        aria-labelledby={`${props.id}-header`}
        ref={content}
        contentHeight={contentHeight}
        id={`${props.id}-content`}
      >
        {props.children}
      </CollapseContent>
    </>
  );
};

export default withTheme(Collapse);
