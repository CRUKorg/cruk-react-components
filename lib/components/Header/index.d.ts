import { FunctionComponent } from 'react';
declare type HeaderProps = {
    isSticky?: boolean;
    logoImageSrc?: string;
    logoLinkUrl?: string;
    logoAltText?: string;
    headerText?: string | null;
};
export declare const Header: FunctionComponent<HeaderProps>;
export default Header;
