import React from 'react';
declare type ModalProps = {
    children: any;
    closeButton?: Function | null;
    disableEsc: Boolean;
};
declare class Modal extends React.Component<ModalProps> {
    static defaultProps: any;
    constructor(props: ModalProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    closeByEsc(event: KeyboardEvent): void;
    render(): React.ReactPortal;
}
export default Modal;
