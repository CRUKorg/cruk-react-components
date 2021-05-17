import React, { FC, ReactNode, HTMLAttributes } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import Avatar from '../Avatar';

import { ThemeType } from '../../types';

type UserBlockProps = HTMLAttributes<HTMLElement> & {
  name?: ReactNode;
  avatarUrl?: string | null;
  avatarName?: string | null;
  extra?: ReactNode;
  size?: 's' | 'm' | 'l' | 'xl';
  theme?: ThemeType;
};

const StyledUserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  flex: 1;
`;

const Details = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.xs};
  text-align: left;
  min-width: 0;
`;

const Name = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  font-size: ${({ theme }) => theme.fontSizes.l};
  white-space: normal;
  word-break: break-word;
`;

const Extra = styled.div`
  color: ${({ theme }) => theme.colors.userBlockExtraText};
  margin-top: 4px;
  white-space: normal;
  word-break: break-word;
`;

const UserBlock: FC<UserBlockProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return (
    <StyledUserBlock {...props} theme={theme}>
      <Avatar
        name={props.avatarName || props.name}
        url={props.avatarUrl ? props.avatarUrl : undefined}
        size={props.size}
      />
      <Details>
        <Name>{props.name || 'Anonymous'}</Name>
        {!!props.extra && <Extra>{props.extra}</Extra>}
      </Details>
    </StyledUserBlock>
  );
};

UserBlock.defaultProps = {
  avatarName: undefined,
  avatarUrl: undefined,
  theme: defaultTheme,
};

export default withTheme(UserBlock);
