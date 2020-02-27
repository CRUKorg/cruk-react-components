import React from 'react';
declare type BadgeProps = {
    bgColor: string;
    text: boolean;
    theme: {
        colors: {
            [key: string]: string;
        };
    };
    getBgColor?: string;
    size?: number;
    children?: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<BadgeProps, "text" | "size" | "bgColor" | "getBgColor" | "children"> & {
    theme?: any;
}>;
export default _default;
