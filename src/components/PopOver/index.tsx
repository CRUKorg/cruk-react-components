import React, { useState, FC, useRef, useCallback, MouseEvent, ReactElement, ReactNode } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

import { useKey } from 'src/hooks/useKey';
import defaultTheme from 'src/themes/cruk';
import useEffectBrowser from 'src/hooks/useEffectBrowser';

import { PopOverWrapper, PopOverModal } from './styles';

import { PopOverPositionType } from 'src/types';

export type PopOverProps = {
  /** used for aria-label of modal */
  modalLabel: string;
  /** contents in side the popover modal */
  modalContent: ReactNode;
  /**  position that the popover opens relative to the triggering element, the trigger element is the child of the component */
  position?: PopOverPositionType;
  css?: string;
  /**  popover modal max width */
  maxWidth?: string;
  /**  popover modal min width */
  minWidth?: string;
};

/**
 * Popover is a non-modal dialog that floats around its disclosure. It's
commonly used for displaying additional rich content on top of something.
*/
const PopOver: FC<PopOverProps> = props => {
  const popRef = useRef<HTMLDivElement>(null);
  const [showPopOver, setShowPopOver] = useState(false);
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const toggle = () => setShowPopOver(!showPopOver);

  // outside click closes popover
  const closePopOver = useCallback(
    (e: MouseEvent) => {
      if (!(popRef.current as any).contains(e.target)) {
        setShowPopOver(false);
      }
    },
    [popRef.current],
  );

  useKey(
    () => {
      setShowPopOver(false);
    },
    {
      detectKeys: ['Escape'],
    },
    [],
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
          <PopOverModal
            maxWidth={props.maxWidth || 'none'}
            minWidth={props.minWidth || 'auto'}
            position={props.position || 'top'}
            theme={theme}
            role="dialog"
            aria-label={props.modalLabel}
            aria-modal={showPopOver}
          >
            {props.modalContent}
          </PopOverModal>
        ) : null}
      </PopOverWrapper>
    </ThemeProvider>
  );
};

export default PopOver;
