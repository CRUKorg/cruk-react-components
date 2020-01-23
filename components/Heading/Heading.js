import React from 'react';
import styled, { css } from 'styled-components';
import { BREAKPOINT, COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';

const StyledHeading = css`
  font-family: ${props => (props.theme.typography ? props.theme.typography.fontFamilyHeadings : TYPOGRAPHY.fontFamilyHeadings)};
  font-weight: ${TYPOGRAPHY.fontWeightMedium};
  color: ${COLORS.grayDarker};
  line-height: ${UTILITIES.lineHeight};
  margin-top: 0;
  margin-bottom: ${UTILITIES.rhythmVerticalBase};
  max-width: 100%;
  text-align: ${(props) => {
    if (props.center) return 'center';
    if (props.right) return 'right';
    return 'left';
  }};

  ${props => css([props.css])}
`;

const H1 = styled.h1`
  ${StyledHeading}
  font-size: 1.4375rem;                                              // 23px
  @media (min-width: ${BREAKPOINT.desktop}) { font-size: 2rem; }     // 32px
`;

const H2 = styled.h2`
  ${StyledHeading};
  font-size: 1.1875rem;                                               // 19px
  @media (min-width: ${BREAKPOINT.desktop}) { font-size: 1.4375rem; } // 23px
`;

const H3 = styled.h3`
  ${StyledHeading};
  font-size: 1rem;                                                    // 16px
  @media (min-width: ${BREAKPOINT.desktop}) { font-size: 1.1875rem; } // 19px
`;

const H4 = styled.h4`
  ${StyledHeading};
  font-size: 0.875rem;                                                // 14px
  @media (min-width: ${BREAKPOINT.desktop}) { font-size: 1rem; }      // 16px
`;

const H5 = styled.h5`
  ${StyledHeading};
  font-size: 0.875rem;                                                // 14px
  @media (min-width: ${BREAKPOINT.desktop}) { font-size: 1rem; }      // 16px
`;

const H6 = styled.h6`
  ${StyledHeading};
  font-size: 0.75rem;                                                 // 12px
  @media (min-width: ${BREAKPOINT.desktop}) { font-size: 0.875rem; }  // 14px
`;

const Heading = ({
  h1, h2, h3, h4, h5, h6, ...props
}) => {
  if (h2) return <H2 {...props} />;
  if (h3) return <H3 {...props} />;
  if (h4) return <H4 {...props} />;
  if (h5) return <H5 {...props} />;
  if (h6) return <H6 {...props} />;
  return <H1 {...props} />;
};

export default Heading;
