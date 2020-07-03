import React, { useState, FunctionComponent, useRef } from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';

import useEffectBrowser from '../../hooks/useEffectBrowser';
import defaultTheme, { BREAKPOINT, COLORS } from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type PopOverProps = {
  position: string;
  overlay: any;
  css?: string;
  theme?: ThemeType;
};

type StyledPopOverContentType = {
  position: string;
  theme?: ThemeType;
};

type PopOverWrapperProps = {
  css?: string;
};

const PopOverWrapper = styled.div<PopOverWrapperProps>`
  position: relative;
  display: inline-block;
  ${props => (css as any)([props.css])}
`;

const PopOverContent = styled.div<StyledPopOverContentType>`
  position: absolute;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  padding: ${({
    theme: {
      spacing: { extraExtraSmall },
    },
  }) => extraExtraSmall};

  margin-bottom: ${({ position }) => {
    switch (position) {
      case 'top':
        return '10px';
      case 'topLeft':
        return '10px';
      case 'left':
        return 0;
      case 'right':
        return 0;
      case 'bottom':
        return 0;
      case 'bottomLeft':
        return '10px';
      default:
        return '10px';
    }
  }};

  margin-top: ${({ position }) => {
    switch (position) {
      case 'bottom':
        return '10px';
      case 'bottomLeft':
        return '10px';
      case 'left':
        return '10px';
      case 'right':
        return '10px';
      default:
        return 0;
    }
  }};
  top: ${({ position }) => {
    switch (position) {
      case 'top':
        return 'auto';
      case 'topLeft':
        return 'auto';
      case 'left':
        return '100%';
      case 'right':
        return '100%';
      case 'bottom':
        return '100%';
      case 'bottomLeft':
        return '100%';
      default:
        return 'auto';
    }
  }};

  bottom: ${({ position }) => {
    switch (position) {
      case 'top':
        return '100%';
      case 'topLeft':
        return '100%';
      case 'left':
        return 'auto';
      case 'right':
        return 'auto';
      case 'bottom':
        return 'auto';
      case 'bottomLeft':
        return 'auto';
      default:
        return '100%';
    }
  }};

  left: ${({ position }) => {
    switch (position) {
      case 'top':
        return 0;
      case 'topLeft':
        return 'auto';
      case 'left':
        return 'auto';
      case 'right':
        return 'auto';
      case 'bottom':
        return 'auto';
      case 'bottomLeft':
        return 'auto';
      default:
        return 'auto';
    }
  }};
  right: ${({ position }) => {
    switch (position) {
      case 'top':
        return 'auto';
      case 'topLeft':
        return 0;
      case 'left':
        return 'auto';
      case 'right':
        return '0';
      case 'bottom':
        return 'auto';
      case 'bottomLeft':
        return 0;
      default:
        return 'auto';
    }
  }};
  z-index: 9999;
  max-width: 276px;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
  background-color: ${({
    theme: {
      colors: { popoverBackground },
    },
  }) => popoverBackground};
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: ${({
    theme: {
      utilities: { borderRadius },
    },
  }) => borderRadius};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &:after,
  &:before {
    content: '';
    border-style: solid;
    border-width: 10px;
    width: 0;
    height: 0;
    position: absolute;
    top: ${({ position }) => {
      switch (position) {
        case 'top':
          return '100%';
        case 'topLeft':
          return '100%';
        case 'left':
          return 'auto';
        case 'right':
          return 'auto';
        case 'bottom':
          return 'auto';
        case 'bottomLeft':
          return 'auto';
        default:
          return '100%';
      }
    }};
    bottom: ${({ position }) => {
      switch (position) {
        case 'top':
          return 'auto';
        case 'topLeft':
          return 'auto';
        case 'left':
          return '100%';
        case 'right':
          return '100%';
        case 'bottom':
          return '100%';
        case 'bottomLeft':
          return '100%';
        default:
          return 'auto';
      }
    }};
    left: calc(50% - 10px);
  }
  &:before {
    border-color: ${({ position }) => {
      switch (position) {
        case 'top':
          return 'rgba(0, 0, 0, 0.25) transparent transparent';
        case 'topLeft':
          return 'rgba(0, 0, 0, 0.25) transparent transparent';
        case 'left':
          return 'transparent transparent rgba(0, 0, 0, 0.25)';
        case 'right':
          return 'transparent transparent rgba(0, 0, 0, 0.25)';
        case 'bottom':
          return 'transparent transparent rgba(0, 0, 0, 0.25)';
        case 'bottomLeft':
          return 'transparent transparent rgba(0, 0, 0, 0.25)';
        default:
          return 'rgba(0, 0, 0, 0.25) transparent transparent';
      }
    }};
  }
  &:after {
    margin: ${({ position }) => {
      switch (position) {
        case 'top':
          return '-1px 0 0 0';
        case 'topLeft':
          return '-1px 0 0 0';
        case 'left':
          return '0 0 -1px 0';
        case 'right':
          return '0 0 -1px 0';
        case 'bottom':
          return '0 0 -1px 0';
        case 'bottomLeft':
          return '0 0 -1px 0';
        default:
          return '-1px 0 0 0';
      }
    }};
    border-color: ${({ theme, position }) => {
      switch (position) {
        case 'top':
          return `${theme.colors.popoverBackground} transparent transparent`;
        case 'topLeft':
          return `${theme.colors.popoverBackground} transparent transparent`;
        case 'left':
          return `transparent transparent ${theme.colors.popoverBackground}`;
        case 'right':
          return `transparent transparent ${theme.colors.popoverBackground}`;
        case 'bottom':
          return `transparent transparent ${theme.colors.popoverBackground}`;
        case 'bottomLeft':
          return `transparent transparent ${theme.colors.popoverBackground}`;
        default:
          return `${theme.colors.popoverBackground} transparent transparent`;
      }
    }};
  }

  @media (min-width: ${BREAKPOINT.desktop}) {
    margin-top: ${({ position }) => {
      switch (position) {
        case 'bottom':
          return '10px';
        case 'bottomLeft':
          return '10px';
        default:
          return 0;
      }
    }};

    margin-left: ${({ position }) => {
      switch (position) {
        case 'right':
          return '10px';
        default:
          return 0;
      }
    }};
    margin-right: ${({ position }) => {
      switch (position) {
        case 'left':
          return '10px';
        default:
          return 0;
      }
    }};

    top: ${({ position }) => {
      switch (position) {
        case 'top':
          return 'auto';
        case 'topLeft':
          return 'auto';
        case 'left':
          return 0;
        case 'right':
          return 0;
        case 'bottom':
          return '100%';
        case 'bottomLeft':
          return '100%';
        default:
          return 'auto';
      }
    }};

    left: ${({ position }) => {
      switch (position) {
        case 'top':
          return 0;
        case 'topLeft':
          return 'auto';
        case 'left':
          return 'auto';
        case 'right':
          return '100%';
        case 'bottom':
          return 'auto';
        case 'bottomLeft':
          return 'auto';
        default:
          return 'auto';
      }
    }};
    right: ${({ position }) => {
      switch (position) {
        case 'top':
          return 'auto';
        case 'topLeft':
          return 0;
        case 'left':
          return '100%';
        case 'right':
          return 'auto';
        case 'bottom':
          return 'auto';
        case 'bottomLeft':
          return 0;
        default:
          return 'auto';
      }
    }};

    &:after,
    &:before {
      content: '';
      top: ${({ position }) => {
        switch (position) {
          case 'top':
            return '100%';
          case 'topLeft':
            return '100%';
          case 'left':
            return 'calc(50% - 10px)';
          case 'right':
            return 'calc(50% - 10px)';
          case 'bottom':
            return 'auto';
          case 'bottomLeft':
            return 'auto';
          default:
            return '100%';
        }
      }};
      bottom: ${({ position }) => {
        switch (position) {
          case 'top':
            return 'auto';
          case 'topLeft':
            return 'auto';
          case 'left':
            return 'auto';
          case 'right':
            return 'auto';
          case 'bottom':
            return '100%';
          case 'bottomLeft':
            return '100%';
          default:
            return 'auto';
        }
      }};

      left: ${({ position }) => {
        switch (position) {
          case 'left':
            return '100%';
          case 'right':
            return '-20px';
          default:
            return 'calc(50% - 10px)';
        }
      }};
    }
    &:before {
      border-color: ${({ position }) => {
        switch (position) {
          case 'top':
            return 'rgba(0, 0, 0, 0.25) transparent transparent';
          case 'topLeft':
            return 'rgba(0, 0, 0, 0.25) transparent transparent';
          case 'left':
            return 'transparent transparent transparent rgba(0, 0, 0, 0.25)';
          case 'right':
            return 'transparent rgba(0, 0, 0, 0.25) transparent transparent';
          case 'bottom':
            return 'transparent transparent rgba(0, 0, 0, 0.25)';
          case 'bottomLeft':
            return 'transparent transparent rgba(0, 0, 0, 0.25)';
          default:
            return 'rgba(0, 0, 0, 0.25) transparent transparent';
        }
      }};
    }
    &:after {
      margin: ${({ position }) => {
        switch (position) {
          case 'top':
            return '-1px 0 0 0';
          case 'topLeft':
            return '-1px 0 0 0';
          case 'left':
            return '0 0 0 -1px';
          case 'right':
            return '0 0 0 1px';
          case 'bottom':
            return '0 0 -1px 0';
          case 'bottomLeft':
            return '0 0 -1px 0';
          default:
            return '-1px 0 0 0';
        }
      }};
      border-color: ${({ theme, position }) => {
        switch (position) {
          case 'top':
            return `${theme.colors.popoverBackground} transparent transparent`;
          case 'topLeft':
            return `${theme.colors.popoverBackground} transparent transparent`;
          case 'left':
            return `transparent transparent transparent ${theme.colors.popoverBackground}`;
          case 'right':
            return `border-color: transparent ${theme.colors.popoverBackground} transparent transparent`;
          case 'bottom':
            return `transparent transparent ${theme.colors.popoverBackground}`;
          case 'bottomLeft':
            return `transparent transparent ${theme.colors.popoverBackground}`;
          default:
            return `${theme.colors.popoverBackground} transparent transparent`;
        }
      }};
    }
  }
`;

const PopOver: FunctionComponent<PopOverProps> = props => {
  const popRef = useRef(null);
  const [showPopOver, setPopOver] = useState(false);
  const toggle = () => setPopOver(!showPopOver);
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  // outside click closes popover
  const closePopOver = (e: MouseEvent) => {
    const isDescendantOfRoot = popRef && popRef.current && popRef.current.contains(e.target);
    if (!isDescendantOfRoot) {
      setPopOver(false);
    }
  };

  useEffectBrowser(() => {
    document.addEventListener('click', closePopOver, true);
    return () => {
      document.removeEventListener('click', closePopOver, true);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PopOverWrapper {...props} ref={popRef}>
        {showPopOver && (
          <PopOverContent position={props.position} theme={theme} role="dialog" aria-modal={showPopOver}>
            {props.overlay}
          </PopOverContent>
        )}
        {React.Children.map(props.children, (child: React.ReactElement) =>
          React.cloneElement(child, {
            onClick: toggle,
            'aria-expanded': showPopOver,
            'aria-haspopup': 'dialog',
          }),
        )}
      </PopOverWrapper>
    </ThemeProvider>
  );
};

export default withTheme(PopOver);
