import React, { useState, useRef, KeyboardEvent, FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

import Button from '../Button';

type CollapseProps = {
  active: boolean;
  contentHeight?: string;
  headerTitle?: any;
  id?: string;
  theme?: ThemeType;
};

const DefaultHeader = styled(Button)`
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
    transform: ${(props: CollapseProps) => (props.active === true ? 'rotate(90deg)' : 'none')};
    transition-duration: 0.5s;
  }
`;

const CollapseContent = styled.div<CollapseProps>`
  margin: 0;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  height: ${props => props.contentHeight}px;
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

  const isDefault = () => {
    return typeof props.headerTitle === 'string' ? true : false;
  };

  const renderHeader = (theme: ThemeType) => {
    const defaultProps = {
      'aria-controls': `${props.id}-header`,
      'aria-expanded': activeStatus,
      id: `${props.id}-header`,
      onClick: toggleCollapse,
    };

    if (isDefault())
      return (
        <DefaultHeader
          {...defaultProps}
          theme={theme}
          active={activeStatus}
          appearance="text"
          icon="chevronRight"
          iconAlign="right"
        >
          {props.headerTitle}
        </DefaultHeader>
      );

    return (
      <CustomHeader
        {...defaultProps}
        aria-label={props.headerTitle.props.headerTitle}
        aria-disabled={false}
        onKeyDown={triggerToggle}
        role="button"
        tabIndex={0}
      >
        {props.headerTitle}
      </CustomHeader>
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
        active={activeStatus}
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
