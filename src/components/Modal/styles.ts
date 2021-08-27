import styled from 'styled-components';

import Box from '../Box';
import Button from '../Button';

export const Background = styled.div`
  background: ${({ theme }) => theme.colors.modalBackdrop};
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s, bottom 0s 0.3s;
  z-index: 100;
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const Content = styled(Box)<{
  maxWidth: string;
  top: string;
}>`
  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor && typeof colors[backgroundColor] !== 'undefined'
      ? colors[backgroundColor]
      : backgroundColor
      ? backgroundColor
      : 'backgroundLight'};
  position: relative;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  margin: ${({ top }) => `${top} auto auto auto`};
  width: 90%;
  min-height: 10rem;
  padding: ${({
    theme: {
      spacing: { xs },
    },
  }) => xs};
  max-width: ${({ maxWidth }) => maxWidth};
  z-index: 9999;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const CloseButton = styled(Button)`
  float: right;
  margin-left: ${({
    theme: {
      spacing: { xs },
    },
  }) => xs};
  font-size: 1.2rem;
  padding: 0;
`;
