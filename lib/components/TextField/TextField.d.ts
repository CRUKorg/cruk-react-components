import React from 'react';
declare type TextFieldProps = {
    error: string;
    extraBottom: string;
    extraLeft: string;
    extraRight: string;
    extraTop: string;
    hasError: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    theme?: {
        colors: {};
        typography: {};
        utilities: {};
    };
    type: 'text' | 'number' | 'email' | 'password';
    value: string;
    label: string;
    hintText: string;
    required: boolean;
};
declare const _default: React.ForwardRefExoticComponent<Pick<TextFieldProps, "label" | "onChange" | "value" | "type" | "placeholder" | "error" | "hasError" | "hintText" | "required" | "extraBottom" | "extraLeft" | "extraRight" | "extraTop"> & {
    theme?: any;
}>;
export default _default;
