// This file is so that typescript can see and treat .svg files as module
// and use the es6 import from pattern as if they were .tsx
// We need this for "@svgr/webpack" to work

declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
