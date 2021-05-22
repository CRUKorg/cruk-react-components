import React, { useState, FC, useRef, useCallback, MouseEvent, ReactElement } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import useEffectBrowser from 'src/hooks/useEffectBrowser';

import { PopOverWrapper, PopOverContent } from './styles';

import { PopOverPositionType } from 'src/types';

type Props = {
  position?: PopOverPositionType;
  overlay: any;
  css?: string;
  maxWidth?: string;
  minWidth?: string;
};

const PopOver: FC<Props> = props => {
  const popRef = useRef<HTMLDivElement>(null);
  const [showPopOver, setPopOver] = useState(false);
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const toggle = () => setPopOver(!showPopOver);

  // outside click closes popover
  const closePopOver = useCallback(
    (e: MouseEvent) => {
      if (!(popRef.current as any).contains(e.target)) {
        setPopOver(false);
      }
    },
    [popRef.current],
  );

  useEffectBrowser(() => {
    // @ts-ignore function signature for listerns on document is slightly weird but this still works so ignore
    document.addEventListener('click', closePopOver, true);
    return () => {
      // @ts-ignore function signature for listerns on document is slightly weird but this still works so ignore
      document.removeEventListener('click', closePopOver, true);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PopOverWrapper {...props} ref={popRef}>
        {React.Children.map(props.children as ReactElement, (child: React.ReactElement) =>
          React.cloneElement(child, {
            onClick: toggle,
            'aria-expanded': showPopOver,
            'aria-haspopup': 'dialog',
          }),
        )}
        {showPopOver ? (
          <PopOverContent
            maxWidth={props.maxWidth || 'none'}
            minWidth={props.minWidth || 'auto'}
            position={props.position || 'top'}
            theme={theme}
            role="dialog"
            aria-modal={showPopOver}
          >
            {props.overlay}
          </PopOverContent>
        ) : null}
      </PopOverWrapper>
    </ThemeProvider>
  );
};

export default PopOver;
