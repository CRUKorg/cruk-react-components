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

const desktopFontSize = (textSize: FontSizeType, defaultFontSize: FontSizeType, theme: ThemeType) => {
  switch (textSize) {
    case 'medium':
      return theme.fontSizes.medium;
    case 'large':
      return theme.fontSizes.large;
    case 'extraLarge':
      return theme.fontSizes.extraLarge;
    case 'extraExtraLarge':
      return theme.fontSizes.extraExtraLarge;
    case 'extraExtraExtraLarge':
      return theme.fontSizes.extraExtraExtraLarge;
    case 'extraExtraExtraExtraLarge':
      return theme.fontSizes.extraExtraExtraExtraLarge;

    default:
      return defaultFontSize;
  }
};

// everything drops down a size on the typography scale
const tabletFontSize = (textSize: FontSizeType, defaultFontSize: FontSizeType, theme: ThemeType) => {
  switch (textSize) {
    case 'medium':
      return theme.fontSizes.medium;
    case 'large':
      return theme.fontSizes.medium;
    case 'extraLarge':
      return theme.fontSizes.large;
    case 'extraExtraLarge':
      return theme.fontSizes.extraLarge;
    case 'extraExtraExtraLarge':
      return theme.fontSizes.extraExtraLarge;
    case 'extraExtraExtraExtraLarge':
      return theme.fontSizes.extraExtraExtraLarge;

    default:
      return defaultFontSize;
  }
};

// everything drops down two sizes on the typography scale
const mobileFontSize = (textSize: FontSizeType, defaultFontSize: FontSizeType, theme: ThemeType) => {
  switch (textSize) {
    case 'medium':
      return theme.fontSizes.medium;
    case 'large':
      return theme.fontSizes.medium;
    case 'extraLarge':
      return theme.fontSizes.medium;
    case 'extraExtraLarge':
      return theme.fontSizes.large;
    case 'extraExtraExtraLarge':
      return theme.fontSizes.extraLarge;
    case 'extraExtraExtraExtraLarge':
      return theme.fontSizes.extraExtraLarge;

    default:
      return defaultFontSize;
  }
};

const H1 = styled.h1<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme, textSize }) => mobileFontSize(textSize, theme.fontSizes.extraExtraLarge, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }) => tabletFontSize(textSize, theme.fontSizes.extraExtraExtraLarge, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }) => desktopFontSize(textSize, theme.fontSizes.extraExtraExtraExtraLarge, theme)};
  };
`;

const H2 = styled.h2<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme, textSize }) => mobileFontSize(textSize, theme.fontSizes.extraLarge, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }) => tabletFontSize(textSize, theme.fontSizes.extraExtraLarge, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }) => desktopFontSize(textSize, theme.fontSizes.extraExtraExtraLarge, theme)};
  }
`;

const H3 = styled.h3<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme, textSize }) => mobileFontSize(textSize, theme.fontSizes.large, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }) => tabletFontSize(textSize, theme.fontSizes.extraLarge, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }) => desktopFontSize(textSize, theme.fontSizes.extraExtraLarge, theme)};
  }
`;

const H4 = styled.h4<HeadingProps>`
  ${props => StyledHeading(props)}
  font-size: ${({ theme, textSize }) => mobileFontSize(textSize, theme.fontSizes.medium, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }) => tabletFontSize(textSize, theme.fontSizes.large, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }) => desktopFontSize(textSize, theme.fontSizes.extraLarge, theme)};
  }
`;

const H5 = styled.h5<HeadingProps>`
  ${props => StyledHeading(props)}

  font-size: ${({ theme, textSize }) => mobileFontSize(textSize, theme.fontSizes.medium, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }) => tabletFontSize(textSize, theme.fontSizes.medium, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }) => desktopFontSize(textSize, theme.fontSizes.large, theme)};
  }
`;

const H6 = styled.h6<HeadingProps>`
  ${props => StyledHeading(props)}
  
  font-size: ${({ theme, textSize }) => mobileFontSize(textSize, theme.fontSizes.medium, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }) => tabletFontSize(textSize, theme.fontSizes.medium, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }) => desktopFontSize(textSize, theme.fontSizes.medium, theme)};
  }
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
