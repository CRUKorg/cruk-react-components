import React from 'react';
declare type IconProps = {
    name?: string;
    color?: string;
    size?: number;
    transform?: string;
    theme?: {
        icon: {};
        colors: {};
    };
    getColor?: string;
};
declare const _default: React.ForwardRefExoticComponent<Pick<IconProps, "size" | "name" | "color" | "transform" | "getColor"> & {
    theme?: any;
}>;
export default _default;
