import React from 'react';
declare type BoxProps = {
    bgColor: string;
    theme: {
        colors: {};
    };
    getBgColor: string;
    children: any;
    css: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<BoxProps, "bgColor" | "getBgColor" | "children" | "css"> & {
    theme?: any;
}>;
export default _default;
