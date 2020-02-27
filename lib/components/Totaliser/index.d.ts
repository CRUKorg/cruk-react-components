import React from 'react';
declare type TotaliserProps = {
    giftAid: number;
    summary?: Function;
    target?: number | null;
    theme: {
        target: {};
        colors: {
            [key: string]: string;
        };
        typography: {};
    };
    total: number;
    isCompact: boolean;
    children: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<TotaliserProps, "summary" | "children" | "target" | "giftAid" | "total" | "isCompact"> & {
    theme?: any;
}>;
export default _default;
