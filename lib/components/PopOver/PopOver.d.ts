/// <reference types="styled-components" />
import React from 'react';
declare type PopOverProps = {
    theme: {
        colors: {};
    };
    position: string;
    overlay: any;
    css: string;
    children: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<PopOverProps, "children" | "css" | "position" | "overlay"> & {
    theme?: any;
}>;
export default _default;
