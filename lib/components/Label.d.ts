/// <reference types="react" />
declare const Label: import("styled-components").StyledComponent<"label", any, {}, never>;
declare type WithLabelProps = {
    label: string;
    hintText: string;
    required: boolean;
    children: any;
};
export declare const WithLabel: ({ children, label, hintText, required }: WithLabelProps) => JSX.Element;
export default Label;
