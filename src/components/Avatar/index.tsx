import React, { FC, ReactNode, ImgHTMLAttributes } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type AvatarStyledProps = {
  size?: string;
};

const StyledAvatar = styled.img<AvatarStyledProps>`
  border-radius: 50%;
  height: ${({ size }) => size};
  object-fit: cover;
  width: ${({ size }) => size};
`;

type AvatarProps = ImgHTMLAttributes<HTMLElement> & {
  name?: ReactNode;
  url?: string;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  theme?: ThemeType;
};

const Avatar: FC<AvatarProps> = ({ url, name, size, theme: propsTheme, alt = ' ', ...rest }) => {
  const theme = {
    ...defaultTheme,
    ...propsTheme,
  };

  const avatarUrl = () => {
    if (url) return url;

    let fileName = 'icon-avatar-Anonymous.png';
    if (name && typeof name === 'string' && name !== 'Anonymous' && name[0].trim().match(/[a-z]/i)) {
      fileName = `icon-avatar-${name[0].trim().toUpperCase()}.png`;
    }

    return theme.avatar.path + fileName;
  };

  return <StyledAvatar {...rest} size={theme.avatar[size || 'medium']} src={avatarUrl()} alt={alt} />;
};

Avatar.defaultProps = {
  size: 'medium',
};

export default withTheme(Avatar);
