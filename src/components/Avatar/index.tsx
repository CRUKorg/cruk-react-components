import React, { FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type AvatarProps = {
  name: string;
  url: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  theme?: ThemeType;
};

type AvatarStyledProps = {
  size?: string;
};

const StyledAvatar = styled.img<AvatarStyledProps>`
  border-radius: 50%;
  height: ${props => props.size};
  object-fit: cover;
  width: ${props => props.size};
`;

const Avatar: FunctionComponent<AvatarProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const avatarUrl = () => {
    if (props.url) return props.url;
    let fileName = 'icon-avatar-Anonymous.png';
    if (
      props.name &&
      typeof props.name === 'string' &&
      props.name !== 'Anonymous' &&
      props.name[0].trim().match(/[a-z]/i)
    ) {
      fileName = `icon-avatar-${props.name[0].trim().toUpperCase()}.png`;
    }

    return theme.avatar.path + fileName;
  };

  return <StyledAvatar theme={theme} size={theme.avatar[props.size]} src={avatarUrl()} alt="avatar" />;
};

Avatar.defaultProps = {
  size: 'medium',
};

export default withTheme(Avatar);
