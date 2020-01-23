import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY, UTILITIES,  } from '../Constants';
import Button from '../Button/Button';
import Box from '../Box/Box';

const DefaultHeader = styled(Button)`
  color: ${COLORS.secondary};
  font-size: ${TYPOGRAPHY.fontSizeSmall};
  font-weight: normal;
  margin-bottom: 0;
  padding-bottom: 0;
  :hover, 
  :focus { text-decoration:none;}

  & svg {
    font-size: ${TYPOGRAPHY.fontSizeExtraSmall};
    transform: ${props => props.active === true ? 'rotate(90deg)' : 'none'};
    transition-duration: 0.5s;
  }
`;

const CollapseContent = styled.div`
  margin: 0 0 0 ${UTILITIES.spacingUnit * 2}px;
  font-size: ${TYPOGRAPHY.fontSizeSmall};
  height: ${props => props.contentHeight}px;
  overflow: hidden;
  transition: 0.5s ease;
  &>p {margin-top: 0;}
`;

const CustomHeader = styled.div`
  cursor:pointer;
`;

const Collapse = (props) => {
  const [activeStatus, setActiveStatus] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const content = useRef(null);

  const toggleCollapse = () => {
    setActiveStatus(activeStatus === false ? true : false);
    setContentHeight(activeStatus === true ? 0 : `${content.current.scrollHeight}`);
  }

  const triggerToggle = (event) => {
    if (event.which == 32 || event.which == 13) {
      event.preventDefault();
      toggleCollapse();
    }
  }

  const isDefault = () => {
    return typeof props.headerTitle === 'string' ? true : false;
  }

  const renderHeader = () => {
    const defaultProps = {
      active: activeStatus,
      'aria-controls': `${props.id}-header`,
      'aria-expanded': activeStatus,
      id: `${props.id}-header`,
      onClick: toggleCollapse,
    };

    if (isDefault())
      return (
        <DefaultHeader {...defaultProps} appearance="link" icon="chevronRight" iconAlign="right">
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
        tabIndex="0"
      >
        {props.headerTitle}
      </CustomHeader>
    );
  }

  return (
    <Box>
      {renderHeader()}
      <CollapseContent 
        role='region' 
        active={activeStatus} 
        aria-hidden={activeStatus===false ? true : false} 
        aria-labelledby={`${props.id}-header`} 
        ref={content} 
        contentHeight={contentHeight} 
        id={`${props.id}-content`}
      >
        {props.children}
      </CollapseContent>
    </Box>
  );
};

export default Collapse;
