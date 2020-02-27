import { COLORS, TYPOGRAPHY, FONT_SIZES, FontSizeType } from '../../Constants';
import styled from 'styled-components';

export type BaseTextProps = {
  color?: string;
  textAlign?: 'left' | 'right' | 'center';
  fontSize?: FontSizeType;
  fontWeight?: number;
  ellipsis?: boolean;
};

export const baseText = (props: BaseTextProps) => `
    font-family: ${TYPOGRAPHY.fontFamilyBase};
    color: ${props.color ? COLORS[`${props.color}`] : COLORS.grayDarker};
    text-align: ${props.textAlign ? props.textAlign : 'left'};
    font-size: ${props.fontSize ? FONT_SIZES[`${props.fontSize}`] : FONT_SIZES.medium};
    line-height: 1.5em;
    font-weight: ${!!props.fontWeight ? props.fontWeight : TYPOGRAPHY.fontWeightMedium};
    overflow: ${!!props.ellipsis ? 'hidden' : 'visible'};
    text-overflow: ${!!props.ellipsis ? 'ellipsis' : 'unset'};
    padding: 0;
    margin: 0;
`;

export const P = styled.p`
  ${(props: BaseTextProps) => baseText(props)}
`;

export default baseText;
