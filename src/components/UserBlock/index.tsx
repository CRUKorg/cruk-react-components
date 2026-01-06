import React, { type ReactNode, type HTMLAttributes } from "react";

import { Avatar } from "../Avatar";

import { type ThemeNameType } from "../../types";

export type UserBlockProps = HTMLAttributes<HTMLElement> & {
  /** name component or text */
  name?: ReactNode;
  /** string name used in avatar component */
  avatarName?: string | null;
  /** avatar image url */
  avatarUrl?: string | null;
  /** extra content component appears underneath name */
  extra?: ReactNode;
  /** size of avatar component */
  size?: "s" | "m" | "l" | "xl";
  themeName: ThemeNameType;
};

/**
 * Display an avatar with title and subtitle
 */
export function UserBlock({
  name,
  avatarName,
  avatarUrl,
  extra,
  size = "l",
  themeName = "cruk",
}: UserBlockProps) {
  // name is a reserved html prop so we make sure we don't pass it into the styled component
  // or it will end up in the markup
  return (
    <div className="component-user-block">
      <Avatar
        name={avatarName || (typeof name === "string" ? name : "Anonymous")}
        url={avatarUrl || undefined}
        size={size}
        themeName={themeName}
      />
      <div className="details">
        <p className="name">{name || "Anonymous"}</p>
        {!!extra && <p className="extra">{extra}</p>}
      </div>
    </div>
  );
}

export default UserBlock;
