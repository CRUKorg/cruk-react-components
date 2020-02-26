import React from 'react';
declare type ButtonProps = {
    appearance?: string;
    children?: any;
    iconAlign?: string;
    full?: boolean;
    theme?: {
        button: {};
        colors: {
            white: string;
            gray: string;
            primary: string;
            secondary: string;
            secondaryHover: string;
            tertiary: string;
            tertiaryHover: string;
        };
    };
    ariaLabel?: string;
    href?: string;
    icon?: string;
    name?: string;
    css?: any;
    size?: string;
    disabled?: boolean;
    as?: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<ButtonProps, "size" | "name" | "children" | "css" | "appearance" | "iconAlign" | "full" | "ariaLabel" | "href" | "icon" | "disabled" | "as"> & {
    theme?: any;
}>;
export default _default;
