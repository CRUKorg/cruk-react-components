import React, { ImgHTMLAttributes } from "react";
import { useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";
import {
  AvatarPatternWrapper,
  Shape,
  ShapeWrapper,
  AvatarPattern,
} from "./styles";

export type AvatarGeneratedProps = ImgHTMLAttributes<HTMLElement> & {
  /** name of user/entity */
  name?: string;
  /** image url */
  url?: string;
  /** image size */
  size?: "s" | "m" | "l" | "xl";
};

const nameToIntArray = (name: string) => {
  const nameToNumberString = name
    .split("")
    .map((char) => char.charCodeAt(0))
    .join("");
  const nameIntOnly10 = `${nameToNumberString.substring(
    0,
    5
  )}${nameToNumberString.substring(
    nameToNumberString.length - 5,
    nameToNumberString.length
  )}`;
  return nameIntOnly10.split("").map((char) => parseInt(char, 10));
};

/**
 *
 * You can use an avatar to display ownership of an item of content. If you pass a URL of an image that will be displayed otherwise the first letter of the name will be used to display a branded avatar.
 */
const AvatarGenerated = ({
  url,
  name,
  size = "m",
  alt = "",
  ...rest
}: AvatarGeneratedProps) => {
  const nameNumberArray = nameToIntArray(name || "anonymous");
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };


  return (
    <>
      <AvatarPatternWrapper size={theme.avatar[size || "m"]}>
        <AvatarPattern>
          <ShapeWrapper>
            {(nameNumberArray[0] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[0]}
                colorInt={nameNumberArray[1]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[1] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[1]}
                colorInt={nameNumberArray[2]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[2] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[2]}
                colorInt={nameNumberArray[3]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[3] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[3]}
                colorInt={nameNumberArray[4]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[4] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[4]}
                colorInt={nameNumberArray[5]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[5] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[5]}
                colorInt={nameNumberArray[6]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[6] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[6]}
                colorInt={nameNumberArray[7]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[7] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[7]}
                colorInt={nameNumberArray[8]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[8] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[8]}
                colorInt={nameNumberArray[9]}
              />
            ) : null}
          </ShapeWrapper>
          <ShapeWrapper>
            {(nameNumberArray[9] || 0) % 3 ? (
              <Shape
                sizeInt={nameNumberArray[9]}
                colorInt={nameNumberArray[0]}
              />
            ) : null}
          </ShapeWrapper>
        </AvatarPattern>
      </AvatarPatternWrapper>
    </>
  );
};

export default AvatarGenerated;
