import React, { FunctionComponent } from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType, FontSizeType } from '../../themes/types';

type HeadingProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  textSize?: FontSizeType;
  textAlign?: 'left' | 'right' | 'center';
  css?: any;
  theme?: ThemeType;
};

const StyledHeading = (props: HeadingProps) => css`
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
  text-align: ${({ textAlign }: HeadingProps) => (textAlign ? textAlign : 'left')};
  ${({ css }: HeadingProps) => css}
`;

const H1 = styled.h1<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraExtraLarge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraExtraExtraLarge};
  }
`;

const H2 = styled.h2<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraExtraLarge};
  }
`;

const H3 = styled.h3<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme }) => theme.fontSizes.large};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  }
`;

const H4 = styled.h4<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme }) => theme.fontSizes.medium};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;

const H5 = styled.h5<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const H6 = styled.h6<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Heading: FunctionComponent<HeadingProps> = ({ h1, h2, h3, h4, h5, h6, ...props }) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  const propsWithTheme = {
    ...props,
    theme: theme,
  };

  if (h1) return <H1 {...propsWithTheme} />;
  if (h2) return <H2 {...propsWithTheme} />;
  if (h3) return <H3 {...propsWithTheme} />;
  if (h4) return <H4 {...propsWithTheme} />;
  if (h5) return <H5 {...propsWithTheme} />;
  if (h6) return <H6 {...propsWithTheme} />;
  return <H2 {...propsWithTheme} />;
};

export default withTheme(Heading);
