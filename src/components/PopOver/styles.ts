import styled, { css } from "styled-components";

import { type ThemeType, type PopOverPositionType } from "../../types";

export const PopOverWrapper = styled.div<{
  $full: boolean;
  $css?: string;
}>`
  position: relative;
  display: ${({ $full }) => ($full ? "block" : "inline-block")};
  ${(props) =>
    props.$css &&
    css`
      ${props.$css}
    `}
`;

export const PopOverModal = styled.div<{
  $position: PopOverPositionType;
  $maxWidth: string;
  $minWidth: string;
  theme?: ThemeType;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  z-index: 9999;
  max-width: ${({ $maxWidth }) => $maxWidth};
  min-width: ${({ $minWidth }) => $minWidth};
  font-size: ${({
    theme: {
      fontSizes: { s },
    },
  }) => s};
  background-color: ${({
    theme: {
      colors: { popoverBackground },
    },
  }) => popoverBackground};
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  margin-bottom: ${({ $position }) => {
    switch ($position) {
      case "top":
        return "10px";
      case "topLeft":
        return "10px";
      case "left":
        return 0;
      case "right":
        return 0;
      case "bottom":
        return 0;
      case "bottomLeft":
        return "10px";
      default:
        return "10px";
    }
  }};

  margin-top: ${({ $position }) => {
    switch ($position) {
      case "bottom":
        return "10px";
      case "bottomLeft":
        return "10px";
      case "left":
        return "10px";
      case "right":
        return "10px";
      default:
        return 0;
    }
  }};
  top: ${({ $position }) => {
    switch ($position) {
      case "top":
        return "auto";
      case "topLeft":
        return "auto";
      case "left":
        return "100%";
      case "right":
        return "100%";
      case "bottom":
        return "100%";
      case "bottomLeft":
        return "100%";
      default:
        return "auto";
    }
  }};

  bottom: ${({ $position }) => {
    switch ($position) {
      case "top":
        return "100%";
      case "topLeft":
        return "100%";
      case "left":
        return "auto";
      case "right":
        return "auto";
      case "bottom":
        return "auto";
      case "bottomLeft":
        return "auto";
      default:
        return "100%";
    }
  }};

  left: ${({ $position }) => {
    switch ($position) {
      case "top":
        return 0;
      case "topLeft":
        return "auto";
      case "left":
        return "auto";
      case "right":
        return "auto";
      case "bottom":
        return "auto";
      case "bottomLeft":
        return "auto";
      default:
        return "auto";
    }
  }};
  right: ${({ $position }) => {
    switch ($position) {
      case "top":
        return "auto";
      case "topLeft":
        return 0;
      case "left":
        return "auto";
      case "right":
        return "0";
      case "bottom":
        return "auto";
      case "bottomLeft":
        return 0;
      default:
        return "auto";
    }
  }};

  &:after,
  &:before {
    content: "";
    border-style: solid;
    border-width: 10px;
    width: 0;
    height: 0;
    position: absolute;
    top: ${({ $position }) => {
      switch ($position) {
        case "top":
          return "100%";
        case "topLeft":
          return "100%";
        case "left":
          return "auto";
        case "right":
          return "auto";
        case "bottom":
          return "auto";
        case "bottomLeft":
          return "auto";
        default:
          return "100%";
      }
    }};
    bottom: ${({ $position }) => {
      switch ($position) {
        case "top":
          return "auto";
        case "topLeft":
          return "auto";
        case "left":
          return "100%";
        case "right":
          return "100%";
        case "bottom":
          return "100%";
        case "bottomLeft":
          return "100%";
        default:
          return "auto";
      }
    }};

    left: ${({ $position, theme }) => {
      switch ($position) {
        case "top":
          return `${theme.spacing.s}`;
        case "topLeft":
          return "auto";
        case "left":
          return `${theme.spacing.s}`;
        case "right":
          return "auto";
        case "bottom":
          return `${theme.spacing.s}`;
        case "bottomLeft":
          return "auto";
        default:
          return `${theme.spacing.s}`;
      }
    }};
    right: ${({ $position, theme }) => {
      switch ($position) {
        case "top":
          return `auto`;
        case "topLeft":
          return `${theme.spacing.s}`;
        case "left":
          return "auto";
        case "right":
          return `${theme.spacing.s}`;
        case "bottom":
          return `auto`;
        case "bottomLeft":
          return `${theme.spacing.s}`;
        default:
          return `auto`;
      }
    }};
  }
  &:before {
    border-color: ${({ $position }) => {
      switch ($position) {
        case "top":
          return "rgba(0, 0, 0, 0.25) transparent transparent";
        case "topLeft":
          return "rgba(0, 0, 0, 0.25) transparent transparent";
        case "left":
          return "transparent transparent rgba(0, 0, 0, 0.25)";
        case "right":
          return "transparent transparent rgba(0, 0, 0, 0.25)";
        case "bottom":
          return "transparent transparent rgba(0, 0, 0, 0.25)";
        case "bottomLeft":
          return "transparent transparent rgba(0, 0, 0, 0.25)";
        default:
          return "rgba(0, 0, 0, 0.25) transparent transparent";
      }
    }};
  }
  &:after {
    margin: ${({ $position }) => {
      switch ($position) {
        case "top":
          return "-1px 0 0 0";
        case "topLeft":
          return "-1px 0 0 0";
        case "left":
          return "0 0 -1px 0";
        case "right":
          return "0 0 -1px 0";
        case "bottom":
          return "0 0 -1px 0";
        case "bottomLeft":
          return "0 0 -1px 0";
        default:
          return "-1px 0 0 0";
      }
    }};
    border-color: ${({ theme, $position }) => {
      switch ($position) {
        case "top":
          return `${theme.colors.popoverBackground} transparent transparent`;
        case "topLeft":
          return `${theme.colors.popoverBackground} transparent transparent`;
        case "left":
          return `transparent transparent ${theme.colors.popoverBackground}`;
        case "right":
          return `transparent transparent ${theme.colors.popoverBackground}`;
        case "bottom":
          return `transparent transparent ${theme.colors.popoverBackground}`;
        case "bottomLeft":
          return `transparent transparent ${theme.colors.popoverBackground}`;
        default:
          return `${theme.colors.popoverBackground} transparent transparent`;
      }
    }};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: ${({ $position }) => {
      switch ($position) {
        case "bottom":
          return "10px";
        case "bottomLeft":
          return "10px";
        default:
          return 0;
      }
    }};

    margin-left: ${({ $position }) => {
      switch ($position) {
        case "right":
          return "10px";
        default:
          return 0;
      }
    }};
    margin-right: ${({ $position }) => {
      switch ($position) {
        case "left":
          return "10px";
        default:
          return 0;
      }
    }};

    top: ${({ $position }) => {
      switch ($position) {
        case "top":
          return "auto";
        case "topLeft":
          return "auto";
        case "left":
          return 0;
        case "right":
          return 0;
        case "bottom":
          return "100%";
        case "bottomLeft":
          return "100%";
        default:
          return "auto";
      }
    }};

    left: ${({ $position }) => {
      switch ($position) {
        case "top":
          return 0;
        case "topLeft":
          return "auto";
        case "left":
          return "auto";
        case "right":
          return "100%";
        case "bottom":
          return "auto";
        case "bottomLeft":
          return "auto";
        default:
          return "auto";
      }
    }};
    right: ${({ $position }) => {
      switch ($position) {
        case "top":
          return "auto";
        case "topLeft":
          return 0;
        case "left":
          return "100%";
        case "right":
          return "auto";
        case "bottom":
          return "auto";
        case "bottomLeft":
          return 0;
        default:
          return "auto";
      }
    }};

    &:after,
    &:before {
      content: "";
      top: ${({ $position, theme }) => {
        switch ($position) {
          case "top":
            return "100%";
          case "topLeft":
            return "100%";
          case "left":
            return `${theme.spacing.xs}`;
          case "right":
            return `${theme.spacing.xs}`;
          case "bottom":
            return "auto";
          case "bottomLeft":
            return "auto";
          default:
            return "100%";
        }
      }};
      bottom: ${({ $position }) => {
        switch ($position) {
          case "top":
            return "auto";
          case "topLeft":
            return "auto";
          case "left":
            return "auto";
          case "right":
            return "auto";
          case "bottom":
            return "100%";
          case "bottomLeft":
            return "100%";
          default:
            return "auto";
        }
      }};

      left: ${({ $position, theme }) => {
        switch ($position) {
          case "top":
            return `${theme.spacing.s}`;
          case "topLeft":
            return "auto";
          case "left":
            return "100%";
          case "right":
            return "-20px";
          case "bottom":
            return `${theme.spacing.s}`;
          case "bottomLeft":
            return "auto";
          default:
            return `${theme.spacing.s}`;
        }
      }};
      right: ${({ $position, theme }) => {
        switch ($position) {
          case "top":
            return `auto`;
          case "topLeft":
            return `${theme.spacing.s}`;
          case "left":
            return "auto";
          case "right":
            return `0`;
          case "bottom":
            return `auto`;
          case "bottomLeft":
            return `${theme.spacing.s}`;
          default:
            return `auto`;
        }
      }};
    }
    &:before {
      border-color: ${({ $position }) => {
        switch ($position) {
          case "top":
            return "rgba(0, 0, 0, 0.25) transparent transparent";
          case "topLeft":
            return "rgba(0, 0, 0, 0.25) transparent transparent";
          case "left":
            return "transparent transparent transparent rgba(0, 0, 0, 0.25)";
          case "right":
            return "transparent rgba(0, 0, 0, 0.25) transparent transparent";
          case "bottom":
            return "transparent transparent rgba(0, 0, 0, 0.25)";
          case "bottomLeft":
            return "transparent transparent rgba(0, 0, 0, 0.25)";
          default:
            return "rgba(0, 0, 0, 0.25) transparent transparent";
        }
      }};
    }
    &:after {
      margin: ${({ $position }) => {
        switch ($position) {
          case "top":
            return "-1px 0 0 0";
          case "topLeft":
            return "-1px 0 0 0";
          case "left":
            return "0 0 0 -1px";
          case "right":
            return "0 0 0 1px";
          case "bottom":
            return "0 0 -1px 0";
          case "bottomLeft":
            return "0 0 -1px 0";
          default:
            return "-1px 0 0 0";
        }
      }};
      border-color: ${({ theme, $position }) => {
        switch ($position) {
          case "top":
            return `${theme.colors.popoverBackground} transparent transparent`;
          case "topLeft":
            return `${theme.colors.popoverBackground} transparent transparent`;
          case "left":
            return `transparent transparent transparent ${theme.colors.popoverBackground}`;
          case "right":
            return `transparent ${theme.colors.popoverBackground} transparent transparent`;
          case "bottom":
            return `transparent transparent ${theme.colors.popoverBackground}`;
          case "bottomLeft":
            return `transparent transparent ${theme.colors.popoverBackground}`;
          default:
            return `${theme.colors.popoverBackground} transparent transparent`;
        }
      }};
    }
  }
`;
