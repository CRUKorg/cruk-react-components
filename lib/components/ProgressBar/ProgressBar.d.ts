/// <reference types="styled-components" />
import React from 'react';
declare type ProgressBarProps = {
    theme: {
        progress: {};
        colors: {};
    };
    percentage: number;
    isCircular?: boolean;
    showIndicator?: boolean;
    children?: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<ProgressBarProps, "children" | "percentage" | "isCircular" | "showIndicator"> & {
    theme?: any;
}>;
export default _default;
