/// <reference types="styled-components" />
import React from 'react';
declare type AvatarProps = {
    name: string;
    url: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    theme: {
        avatar: {};
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<AvatarProps, "size" | "name" | "url"> & {
    theme?: any;
}>;
export default _default;
