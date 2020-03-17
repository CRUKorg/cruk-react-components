import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType, FontSizeType } from '../../themes/types';

type HeadingProps = {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
  textSize?: FontSizeType;
  center?: string;
  right?: string;
  css?: any;
  theme?: ThemeType;
};

const StyledHeading = css`
  font-family: ${({
    theme: {
      typography: { fontFamilyHeadings },
    },
  }) => fontFamilyHeadings};
  font-weight: ${({
    theme: {
      typography: { fontWeightMedium },
    },
  }) => fontWeightMedium};
  color: ${({
    theme: {
      colors: { textDark },
    },
  }) => textDark};
  line-height: ${({
    theme: {
      typography: { lineHeight },
    },
  }) => lineHeight};
  margin-top: 0;
  margin-bottom: ${({
    theme: {
      utilities: { rhythmVerticalBase },
    },
  }) => rhythmVerticalBase};
  max-width: 100%;
  text-align: ${(props: HeadingProps) => {
    if (props.center) return 'center';
    if (props.right) return 'right';
    return 'left';
  }};

  ${props => (css as any)([props.css])}
`;

const H1 = styled.h1<HeadingProps>`
  ${StyledHeading}
  font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraExtraLarge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraExtraExtraLarge};
  }
`;

const H2 = styled.h2<HeadingProps>`
  ${StyledHeading};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraExtraLarge};
  }
`;

const H3 = styled.h3<HeadingProps>`
  ${StyledHeading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  }
`;

const H4 = styled.h4<HeadingProps>`
  ${StyledHeading};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;

const H5 = styled.h5<HeadingProps>`
  ${StyledHeading};
  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const H6 = styled.h6<HeadingProps>`
  ${StyledHeading};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Heading = ({ h1, h2, h3, h4, h5, h6, ...props }: HeadingProps) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  if (h2) return <H2 {...props} theme={theme} />;
  if (h3) return <H3 {...props} theme={theme} />;
  if (h4) return <H4 {...props} theme={theme} />;
  if (h5) return <H5 {...props} theme={theme} />;
  if (h6) return <H6 {...props} theme={theme} />;
  return <H1 {...props} />;
};

export default withTheme(Heading);
