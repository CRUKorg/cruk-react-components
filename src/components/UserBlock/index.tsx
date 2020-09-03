import React, { FunctionComponent, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import Avatar from '../Avatar';

import { ThemeType } from '../../themes/types';

type UserBlockProps = {
  name?: ReactNode;
  avatarUrl?: string | null;
  avatarName?: string | null;
  extra?: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  theme?: ThemeType;
};

const StyledUserBlock = styled.div<UserBlockProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: ${({ theme }) => theme.spacing.extraSmall};
  flex: 1;
`;

const Details = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.extraSmall};
  text-align: left;
`;

const Name = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeightHeavy};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Extra = styled.div`
  color: ${({ theme }) => theme.colors.userBlockExtraText};
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
        {!!props.extra && <Extra>{props.extra}</Extra>}
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
