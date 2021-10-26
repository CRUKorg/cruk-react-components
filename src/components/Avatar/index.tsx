import React, { FC, ImgHTMLAttributes } from "react";
import { useTheme } from "styled-components";

import defaultTheme from "src/themes/cruk";

import { StyledAvatar } from "./styles";

export type AvatarProps = ImgHTMLAttributes<HTMLElement> & {
  /** name of user/entity */
  name?: string;
  /** image url */
  url?: string;
  /** image size */
  size?: "s" | "m" | "l" | "xl";
};

/**
 *
 * You can use an avatar to display ownership of an item of content. If you pass a URL of an image that will be displayed otherwise the first letter of the name will be used to display a branded avatar.
 */
const Avatar: FC<AvatarProps> = ({ url, name, size = 'm', alt = '', ...rest }) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const avatarUrl = () => {
    if (url) return url;
    const fileName =
      name &&
      typeof name === "string" &&
      name !== "Anonymous" &&
      name[0].trim().match(/[a-z]/i)
        ? `icon-avatar-${name[0].trim().toUpperCase()}.png`
        : "icon-avatar-Anonymous.png";

    return theme.avatar.path + fileName;
  };

  return (
    <StyledAvatar
      {...rest}
      size={theme.avatar[size || "m"]}
      src={avatarUrl()}
      alt={alt}
    />
  );
};

export default Avatar;
