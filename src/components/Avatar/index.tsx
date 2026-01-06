import React, { type ImgHTMLAttributes } from "react";

import { type ThemeNameType } from "../../types";

const crukAvatarBaseUrl =
  "https://rcl.assets.cancerresearchuk.org/images/avatar/cruk2/";
const bowelbabeAvatarBaseUrl =
  "https://rcl.assets.cancerresearchuk.org/images/avatar/bowelbabe/";
const rflAvatarBaseUrl =
  "https://rcl.assets.cancerresearchuk.org/images/avatar/rfl/";
const su2cAvatarBaseUrl =
  "https://rcl.assets.cancerresearchuk.org/images/avatar/su2c/";

function getAvatarBaseUrl(themeName: ThemeNameType) {
  switch (themeName) {
    case "su2c":
      return su2cAvatarBaseUrl;
    case "bowelbabe":
      return bowelbabeAvatarBaseUrl;
    case "rfl":
      return rflAvatarBaseUrl;
    default:
      return crukAvatarBaseUrl;
  }
}

const avatarUrl = ({
  url,
  name,
  themeName,
}: {
  url?: string;
  name?: string;
  themeName: ThemeNameType;
}) => {
  if (url) return url;
  const fileName =
    name &&
    typeof name === "string" &&
    name !== "Anonymous" &&
    /[a-z]/i.exec(name[0].trim())
      ? `icon-avatar-${name[0].trim().toUpperCase()}.png`
      : "icon-avatar-Anonymous.png";
  const fullUrl = `${getAvatarBaseUrl(themeName)}${fileName}`;
  return fullUrl;
};

/**
 *
 * You can use an avatar to display ownership of an item of content. If you pass a URL of an image that will be displayed otherwise the first letter of the name will be used to display a branded avatar.
 */
export function Avatar({
  url,
  name,
  size = "m",
  alt = "",
  themeName = "cruk",
  ...rest
}: ImgHTMLAttributes<HTMLElement> & {
  /** name of user/entity */
  name?: string;
  /** image url */
  url?: string;
  /** image size */
  size?: "s" | "m" | "l" | "xl" | "full";
  themeName?: ThemeNameType;
  styles?: React.CSSProperties;
}) {
  return (
    <img
      className="component-avatar"
      data-size={size}
      src={avatarUrl({ url, name, themeName })}
      alt={alt}
      {...rest}
    />
  );
}

export default Avatar;
