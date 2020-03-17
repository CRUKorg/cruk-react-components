import React, { useState, useRef, Fragment, KeyboardEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../themes/cruk';
import Button from '../Button';

type CollapseProps = {
  active: boolean;
  contentHeight?: string;
  headerTitle?: any;
  id?: string;
};

const DefaultHeader = styled(Button)`
  color: ${COLORS.secondary};
  font-size: ${FONT_SIZES.small};
  font-weight: normal;
  margin-bottom: 0;
  padding: 0 0 10px;
  :hover,
  :focus {
    text-decoration: none;
  }

  & svg {
    font-size: ${FONT_SIZES.extraSmall};
    transform: ${(props: CollapseProps) => (props.active === true ? 'rotate(90deg)' : 'none')};
    transition-duration: 0.5s;
  }
`;

const CollapseContent = styled.div`
  margin: 0;
  font-size: ${FONT_SIZES.small};
  height: ${(props: CollapseProps) => props.contentHeight}px;
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

  const renderHeader = () => {
    const defaultProps = {
      'aria-controls': `${props.id}-header`,
      'aria-expanded': activeStatus,
      id: `${props.id}-header`,
      onClick: toggleCollapse,
    };

    if (isDefault())
      return (
        <DefaultHeader {...defaultProps} active={activeStatus} appearance="link" icon="chevronRight" iconAlign="right">
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

  return (
    <Fragment>
      {renderHeader()}
      <CollapseContent
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
    </Fragment>
  );
};

export default Collapse;
