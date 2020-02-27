/// <reference types="styled-components" />
import React from 'react';
declare type PaginationProps = {
    current: number;
    items: number;
    hideLast: boolean;
    pagerCallback: Function;
    perPage: number;
    searchParam?: string;
    theme: {
        pagination: {};
        colors: {};
    };
    children: any;
};
declare const _default: React.ForwardRefExoticComponent<Pick<PaginationProps, "children" | "searchParam" | "current" | "items" | "hideLast" | "pagerCallback" | "perPage"> & {
    theme?: any;
}>;
export default _default;
