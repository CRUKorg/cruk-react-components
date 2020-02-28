import React from 'react';
declare type RadioProps = {
    className?: string;
    checked: boolean;
    disabled?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    theme?: {
        colors: {};
        utilities: {};
    };
    value: string;
    children: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<RadioProps, "name" | "children" | "disabled" | "checked" | "onChange" | "value" | "className"> & {
    theme?: any;
}>;
export default _default;
