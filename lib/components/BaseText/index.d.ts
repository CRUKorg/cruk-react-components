import { FontSizeType } from '../../Constants';
export declare type BaseTextProps = {
    color?: string;
    textAlign?: 'left' | 'right' | 'center';
    fontSize?: FontSizeType;
    fontWeight?: number;
    ellipsis?: boolean;
};
export declare const baseText: (props: BaseTextProps) => string;
export declare const P: import("styled-components").StyledComponent<"p", any, BaseTextProps, never>;
export default baseText;
