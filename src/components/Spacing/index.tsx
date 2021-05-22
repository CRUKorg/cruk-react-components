import { SpaceType, ThemeType } from 'src/types';
import defaultTheme from 'src/themes/cruk';

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

  const maString = ma ? `margin: ${ma} !important;` : '';
  const mtString = mt ? `margin-top: ${mt} !important;` : mv ? `margin-top: ${mv} !important;` : '';
  const mrString = mr ? `margin-right: ${mr} !important;` : mh ? `margin-right: ${mh} !important;` : '';
  const mbString = mb ? `margin-bottom: ${mb} !important;` : mv ? `margin-bottom: ${mv} !important;` : '';
  const mlString = ml ? `margin-left: ${ml} !important;` : mh ? `margin-left: ${mh} !important;` : '';

  const pa = padding ? theme.spacing[padding] : null;
  const pv = paddingVertical ? theme.spacing[paddingVertical] : null;
  const ph = paddingHorizontal ? theme.spacing[paddingHorizontal] : null;
  const pt = paddingTop ? theme.spacing[paddingTop] : null;
  const pr = paddingRight ? theme.spacing[paddingRight] : null;
  const pb = paddingBottom ? theme.spacing[paddingBottom] : null;
  const pl = paddingLeft ? theme.spacing[paddingLeft] : null;

  const paString = pa ? `padding: ${pa} !important;` : '';
  const ptString = pt ? `padding-top: ${pt} !important;` : pv ? `padding-top: ${pv} !important;` : '';
  const prString = pr ? `padding-right: ${pr} !important;` : ph ? `padding-right: ${ph} !important;` : '';
  const pbString = pb ? `padding-bottom: ${pb} !important;` : pv ? `padding-bottom: ${pv} !important;` : '';
  const plString = pl ? `padding-left: ${pl} !important;` : ph ? `padding-left: ${ph} !important;` : '';

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
