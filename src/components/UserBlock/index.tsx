import React, { FunctionComponent, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import Avatar from '../Avatar';
import { COLORS, TYPOGRAPHY, FONT_SIZES } from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

type UserBlockProps = {
  name: string;
  avatarUrl?: string | null;
  avatarName?: string | null;
  extra: ReactNode;
  size: 'small' | 'medium' | 'large' | 'extraLarge';
  theme?: ThemeType;
};

const StyledUserBlock = styled.div<UserBlockProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: ${props => props.theme.spacing.extraSmall};
  flex: 1;
`;

const Details = styled.div`
  flex: 1;
  margin-left: ${props => props.theme.spacing.extraSmall};
  text-align: left;
`;

const Name = styled.div`
  font-weight: ${props =>
    (props.theme.typography && props.theme.typography.fontWeightHeavy) || TYPOGRAPHY.fontWeightHeavy};
  font-size: ${({ theme: { fontSizes } }) => (fontSizes && fontSizes.medium ? fontSizes.medium : FONT_SIZES.medium)};
`;

const Extra = styled.div`
  color: ${props => (props.theme.colors && props.theme.colors.userBlockExtraText) || COLORS.userBlockExtraText};
  margin-top: 4px;
`;

const UserBlock: FunctionComponent<UserBlockProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return (
    <StyledUserBlock {...props} theme={theme}>
      <Avatar name={props.avatarName || props.name} url={props.avatarUrl} size={props.size} />
      <Details>
        <Name>{props.name || 'Anonymous'}</Name>
        {props.extra && <Extra>{props.extra}</Extra>}
      </Details>
    </StyledUserBlock>
  );
};

UserBlock.defaultProps = {
  avatarUrl: null,
  avatarName: null,
  theme: null,
};

export default withTheme(UserBlock);
