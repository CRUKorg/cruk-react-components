import React, { FC, ReactNode, ImgHTMLAttributes } from 'react';
import styled, { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

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
  size?: 's' | 'm' | 'l' | 'xl';
};

const Avatar: FC<AvatarProps> = ({ url, name, size, alt = '', ...rest }) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const avatarUrl = () => {
    if (url) return url;

    let fileName = 'icon-avatar-Anonymous.png';
    if (name && typeof name === 'string' && name !== 'Anonymous' && name[0].trim().match(/[a-z]/i)) {
      fileName = `icon-avatar-${name[0].trim().toUpperCase()}.png`;
    }

    return theme.avatar.path + fileName;
  };

  return <StyledAvatar {...rest} size={theme.avatar[size || 'm']} src={avatarUrl()} alt={alt} />;
};

Avatar.defaultProps = {
  size: 'm',
};

export default Avatar;
