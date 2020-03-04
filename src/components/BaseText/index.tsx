import { COLORS, TYPOGRAPHY, FONT_SIZES, FontSizeType } from '../../Constants';
import styled from 'styled-components';

// the 'as' prop is for styled component casting
export type BaseTextProps = {
  textColor?: string;
  textAlign?: 'left' | 'right' | 'center';
  textSize?: FontSizeType;
  textWeight?: number;
  ellipsis?: boolean;
  as?: any;
  theme?: any;
};

export const baseText = (props: BaseTextProps) => `
    font-family: ${TYPOGRAPHY.fontFamilyBase};
    color: ${props.textColor ? COLORS[`${props.textColor}`] : COLORS.grayDarker};
    text-align: ${props.textAlign ? props.textAlign : 'left'};
    font-size: ${props.textSize ? FONT_SIZES[`${props.textSize}`] : FONT_SIZES.medium};
    line-height: 1.5em;
    font-weight: ${!!props.textWeight ? props.textWeight : TYPOGRAPHY.fontWeightMedium};
    overflow: ${!!props.ellipsis ? 'hidden' : 'visible'};
    text-overflow: ${!!props.ellipsis ? 'ellipsis' : 'unset'};
    padding: 0;
    margin: 0;
`;

export const P = styled.p`
  ${(props: BaseTextProps) => baseText(props)}
`;

export default baseText;
