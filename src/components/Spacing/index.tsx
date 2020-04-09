import { SpaceType, ThemeType } from '../../themes/types';
import defaultTheme from '../../themes/cruk';

export type SpacingProps = {
  theme?: ThemeType;
  margin?: SpaceType;
  marginTop?: SpaceType;
  marginRight?: SpaceType;
  marginBottom?: SpaceType;
  marginLeft?: SpaceType;
  marginVertical?: SpaceType;
  marginHorizontal?: SpaceType;
  padding?: SpaceType;
  paddingTop?: SpaceType;
  paddingRight?: SpaceType;
  paddingBottom?: SpaceType;
  paddingLeft?: SpaceType;
  paddingVertical?: SpaceType;
  paddingHorizontal?: SpaceType;
};

export const Spacing = (props: SpacingProps) => {
  const theme = props.theme || defaultTheme;
  const {
    margin,
    marginHorizontal,
    marginVertical,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  } = props;

  const ma = margin ? theme.spacing[margin] : null;
  const mv = marginVertical ? theme.spacing[marginVertical] : null;
  const mh = marginHorizontal ? theme.spacing[marginHorizontal] : null;
  const mt = marginTop ? theme.spacing[marginTop] : null;
  const mr = marginRight ? theme.spacing[marginRight] : null;
  const mb = marginBottom ? theme.spacing[marginBottom] : null;
  const ml = marginLeft ? theme.spacing[marginLeft] : null;

  const maString = ma ? `margin: ${ma};` : '';
  const mtString = mt ? `margin-top: ${mt};` : mv ? `margin-top: ${mv};` : '';
  const mrString = mr ? `margin-right: ${mr};` : mh ? `margin-right: ${mh};` : '';
  const mbString = mb ? `margin-bottom: ${mb};` : mv ? `margin-bottom: ${mv};` : '';
  const mlString = ml ? `margin-left: ${ml};` : mh ? `margin-left: ${mh};` : '';

  const pa = padding ? theme.spacing[padding] : null;
  const pv = paddingVertical ? theme.spacing[paddingVertical] : null;
  const ph = paddingHorizontal ? theme.spacing[paddingHorizontal] : null;
  const pt = paddingTop ? theme.spacing[paddingTop] : null;
  const pr = paddingRight ? theme.spacing[paddingRight] : null;
  const pb = paddingBottom ? theme.spacing[paddingBottom] : null;
  const pl = paddingLeft ? theme.spacing[paddingLeft] : null;

  const paString = pa ? `padding: ${pa};` : '';
  const ptString = pt ? `padding-top: ${pt};` : pv ? `padding-top: ${pv};` : '';
  const prString = pr ? `padding-right: ${pr};` : ph ? `padding-right: ${ph};` : '';
  const pbString = pb ? `padding-bottom: ${pb};` : pv ? `padding-bottom: ${pv};` : '';
  const plString = pl ? `padding-left: ${pl};` : ph ? `padding-left: ${ph};` : '';

  return `
    ${maString}
    ${mtString}
    ${mrString}
    ${mbString}
    ${mlString}
    ${paString}
    ${ptString}
    ${prString}
    ${pbString}
    ${plString}
  `;
};

export default Spacing;
