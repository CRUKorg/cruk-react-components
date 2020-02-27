/// <reference types="styled-components" />
import React from 'react';
declare type CheckboxProps = {
    checked: boolean;
    disabled: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    theme?: {
        colors: {};
        utilities: {};
    };
    value: string;
    children: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<CheckboxProps, "name" | "children" | "disabled" | "checked" | "onChange" | "value"> & {
    theme?: any;
}>;
export default _default;
