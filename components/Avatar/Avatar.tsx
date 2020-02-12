import React from 'react';
import styled, { withTheme } from 'styled-components';
import { AVATAR } from '../Constants';

type AvatarProps = {
  name: string;
  url: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  theme: { avatar: {} };
};

type AvatarStyledprops = {
  size?: string;
};

const StyledAvatar = styled.img`
  border-radius: 50%;
  height: ${(props: AvatarStyledprops) => props.size};
  object-fit: cover;
  width: ${(props: AvatarStyledprops) => props.size};
`;

const Avatar = (props: AvatarProps) => {
  const theme = {
    ...AVATAR,
    ...props.theme.avatar,
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

    return theme.path + fileName;
  };

  return (
    <StyledAvatar size={theme[props.size]} src={avatarUrl()} alt="avatar" />
  );
};

Avatar.defaultProps = {
  size: 'medium',
  theme: {},
};

export default withTheme(Avatar);
