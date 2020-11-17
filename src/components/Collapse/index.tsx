import React, { useState, useRef, KeyboardEvent, FunctionComponent, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../types';

import Button from '../Button';
import Icon from '../Icon';

type CollapseProps = {
  headerTitleText: string;
  headerComponent?: ReactNode;
  contentHeight?: string;
  active?: boolean;
  id?: string;
  theme?: ThemeType;
};

const CollapseWrapper = styled.div``;

const FlippingIcon = styled(Icon)`
  transform: ${({ active }: { active: boolean }) => (!!active ? 'rotate(90deg) scaleX(-1)' : 'rotate(90deg)')};
  transition-duration: 0.5s;
`;

const DefaultHeader = styled(Button)`
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
  font-weight: normal;
  margin-bottom: 0;
  padding: 0 0 10px;
  text-decoration: none;
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
  const [activeStatus, setActiveStatus] = useState(props.active || false);
  const [contentHeight, setContentHeight] = useState('0');
  const content = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setActiveStatus(activeStatus === false ? true : false);
    setContentHeight(
      activeStatus === true
        ? '0'
        : `${!!content && !!content.current && !!content.current.scrollHeight ? content.current.scrollHeight : 0}`,
    );
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
      <DefaultHeader {...defaultProps} theme={theme} appearance="text" type="button" aria-label={props.headerTitleText}>
        {props.headerTitleText}
        <FlippingIcon name="chevronRight" active={activeStatus} />
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
        role="region"
        aria-hidden={activeStatus === false ? true : false}
        aria-labelledby={`${props.id}-header`}
        ref={content}
        contentHeight={contentHeight}
        id={`${props.id}-content`}
      >
        {props.children}
      </CollapseContent>
    </CollapseWrapper>
  );
};

export default withTheme(Collapse);
