/// <reference types="styled-components" />
import React from 'react';
declare type SelectProps = {
    error: string;
    hasError: boolean;
    label: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    placeholder: string;
    theme?: {
        colors: {};
        typography: {};
        fontSizes: {};
        utilities: {};
    };
    type: 'text' | 'number' | 'email' | 'password';
    value: string;
    hintText: string;
    required: boolean;
    children: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<SelectProps, "label" | "children" | "onChange" | "value" | "type" | "placeholder" | "error" | "hasError" | "hintText" | "required"> & {
    theme?: any;
}>;
export default _default;
