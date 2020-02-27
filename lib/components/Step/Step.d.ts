/// <reference types="styled-components" />
import React from 'react';
declare type StepProps = {
    theme: {
        colors: {};
    };
    current: number;
    steps: [];
    children: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<StepProps, "children" | "current" | "steps"> & {
    theme?: any;
}>;
export default _default;
