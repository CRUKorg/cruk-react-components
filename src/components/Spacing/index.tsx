import { type SpaceType } from "../../types";

export type SpacingProps = {
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

interface SpacingPropsInterface {
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
}

export type SpacingPropsInternal = {
  $margin?: SpaceType;
  $marginTop?: SpaceType;
  $marginRight?: SpaceType;
  $marginBottom?: SpaceType;
  $marginLeft?: SpaceType;
  $marginVertical?: SpaceType;
  $marginHorizontal?: SpaceType;
  $padding?: SpaceType;
  $paddingTop?: SpaceType;
  $paddingRight?: SpaceType;
  $paddingBottom?: SpaceType;
  $paddingLeft?: SpaceType;
  $paddingVertical?: SpaceType;
  $paddingHorizontal?: SpaceType;
};

interface SpacingPropsInternalInterface {
  $margin?: SpaceType;
  $marginTop?: SpaceType;
  $marginRight?: SpaceType;
  $marginBottom?: SpaceType;
  $marginLeft?: SpaceType;
  $marginVertical?: SpaceType;
  $marginHorizontal?: SpaceType;
  $padding?: SpaceType;
  $paddingTop?: SpaceType;
  $paddingRight?: SpaceType;
  $paddingBottom?: SpaceType;
  $paddingLeft?: SpaceType;
  $paddingVertical?: SpaceType;
  $paddingHorizontal?: SpaceType;
}

export function spacingPropsToSpacingPropsInternal(
  props: SpacingPropsInterface,
): SpacingPropsInternalInterface {
  const internalProps = {
    ...props,
    margin: undefined,
    marginTop: undefined,
    marginRight: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginVertical: undefined,
    marginHorizontal: undefined,
    padding: undefined,
    paddingTop: undefined,
    paddingRight: undefined,
    paddingBottom: undefined,
    paddingLeft: undefined,
    paddingVertical: undefined,
    paddingHorizontal: undefined,
    $margin: props.margin,
    $marginTop: props.marginTop,
    $marginRight: props.marginRight,
    $marginBottom: props.marginBottom,
    $marginLeft: props.marginLeft,
    $marginVertical: props.marginVertical,
    $marginHorizontal: props.marginHorizontal,
    $padding: props.padding,
    $paddingTop: props.paddingTop,
    $paddingRight: props.paddingRight,
    $paddingBottom: props.paddingBottom,
    $paddingLeft: props.paddingLeft,
    $paddingVertical: props.paddingVertical,
    $paddingHorizontal: props.paddingHorizontal,
  };
  return internalProps;
}

export function spacing(props: SpacingPropsInternal) {
  const {
    $margin,
    $marginHorizontal,
    $marginVertical,
    $marginTop,
    $marginRight,
    $marginBottom,
    $marginLeft,
    $padding,
    $paddingHorizontal,
    $paddingVertical,
    $paddingTop,
    $paddingRight,
    $paddingBottom,
    $paddingLeft,
  } = props;

  const ma = $margin ? `var(--spacing-${$margin})` : null;
  const mv = $marginVertical ? `var(--spacing-${$marginVertical})` : null;
  const mh = $marginHorizontal ? `var(--spacing-${$marginHorizontal})` : null;
  const mt = $marginTop ? `var(--spacing-${$marginTop})` : null;
  const mr = $marginRight ? `var(--spacing-${$marginRight})` : null;
  const mb = $marginBottom ? `var(--spacing-${$marginBottom})` : null;
  const ml = $marginLeft ? `var(--spacing-${$marginLeft})` : null;

  const maString = ma ? `margin: ${ma} !important;` : "";
  const mtString = mt
    ? `margin-top: ${mt} !important;`
    : mv
      ? `margin-top: ${mv} !important;`
      : "";
  const mrString = mr
    ? `margin-right: ${mr} !important;`
    : mh
      ? `margin-right: ${mh} !important;`
      : "";
  const mbString = mb
    ? `margin-bottom: ${mb} !important;`
    : mv
      ? `margin-bottom: ${mv} !important;`
      : "";
  const mlString = ml
    ? `margin-left: ${ml} !important;`
    : mh
      ? `margin-left: ${mh} !important;`
      : "";

  const pa = $padding ? `var(--spacing-${$padding})` : null;
  const pv = $paddingVertical ? `var(--spacing-${$paddingVertical})` : null;
  const ph = $paddingHorizontal ? `var(--spacing-${$paddingHorizontal})` : null;
  const pt = $paddingTop ? `var(--spacing-${$paddingTop})` : null;
  const pr = $paddingRight ? `var(--spacing-${$paddingRight})` : null;
  const pb = $paddingBottom ? `var(--spacing-${$paddingBottom})` : null;
  const pl = $paddingLeft ? `var(--spacing-${$paddingLeft})` : null;

  const paString = pa ? `padding: ${pa} !important;` : "";
  const ptString = pt
    ? `padding-top: ${pt} !important;`
    : pv
      ? `padding-top: ${pv} !important;`
      : "";
  const prString = pr
    ? `padding-right: ${pr} !important;`
    : ph
      ? `padding-right: ${ph} !important;`
      : "";
  const pbString = pb
    ? `padding-bottom: ${pb} !important;`
    : pv
      ? `padding-bottom: ${pv} !important;`
      : "";
  const plString = pl
    ? `padding-left: ${pl} !important;`
    : ph
      ? `padding-left: ${ph} !important;`
      : "";

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
}

export default spacing;
