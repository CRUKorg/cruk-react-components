import React, { FC, ReactNode, ImgHTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { StyledAvatar } from './styles';

export type AvatarProps = ImgHTMLAttributes<HTMLElement> & {
  /** name of user/entity */
  name?: ReactNode;
  /** image url */
  url?: string;
  /** image size */
  size?: 's' | 'm' | 'l' | 'xl';
};

/**
 *
 * You can use an avatar to display ownership of an item of content. If you pass a URL of an image that will be displayed otherwise the first letter of the name will be used to display a branded avatar.
 */
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
