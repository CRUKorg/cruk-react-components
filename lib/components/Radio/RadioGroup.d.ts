import React from 'react';
declare type RadioGroupProps = {
    legend: string;
    attributes: Array<{
        value: string;
        option: string;
    }>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: string;
    name: string;
};
declare const RadioGroup: (props: RadioGroupProps) => JSX.Element;
export default RadioGroup;
