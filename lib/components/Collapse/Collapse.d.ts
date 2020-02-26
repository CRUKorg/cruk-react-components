/// <reference types="react" />
declare type CollapseProps = {
    active: boolean;
    contentHeight?: string;
    headerTitle?: any;
    children: any;
    id?: string;
};
declare const Collapse: (props: CollapseProps) => JSX.Element;
export default Collapse;
