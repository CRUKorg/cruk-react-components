export type IconBaseStyledPropsType = {
  iconColor?: string;
  size?: string;
  iconTransform?: string;
};

export type IconBasePropsType = {
  color: string;
  transform: string;
  theme: any;
};

export const IconBase = ({
  size = '1.1em',
  iconColor = 'currentColor',
  iconTransform = 'none',
}: IconBaseStyledPropsType) => `
  display: inline-block;
  height: ${size};
  width: ${size};
  transform: ${iconTransform};
  /* TODO: text alignment in buttons needs fixing one this is fixed this magic margin-top can be removed yay */
  margin-top: -0.2em;
  vertical-align: middle;
  path {
    transition: fill 0.3s ease;
    fill: ${iconColor};
  }
`;

export default IconBase;
