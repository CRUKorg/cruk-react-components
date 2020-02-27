/// <reference types="react" />
declare type UserBlockProps = {
    name: string;
    avatarUrl?: string | null;
    avatarName?: string | null;
    extra: string | Node;
    size: 'small' | 'medium' | 'large' | 'xlarge';
};
declare const UserBlock: {
    (props: UserBlockProps): JSX.Element;
    defaultProps: {
        avatarUrl: any;
        avatarName: any;
    };
};
export default UserBlock;
