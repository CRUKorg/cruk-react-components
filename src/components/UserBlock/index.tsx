import React, { FC, ReactNode, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import Avatar from 'src/components/Avatar';

import { StyledUserBlock, Details, Name, Extra } from './styles';

export type UserBlockProps = HTMLAttributes<HTMLElement> & {
  /** name component or text */
  name?: ReactNode;
  /** string name used in avatar component */
  avatarName?: string | null;
  /** avatar image url */
  avatarUrl?: string | null;
  /** extra content component appears underneath name */
  extra?: ReactNode;
  /** size of avatar component */
  size?: 's' | 'm' | 'l' | 'xl';
};

/**
 * Display an avatar with title and subtitle
 */
const UserBlock: FC<UserBlockProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  // name is a reserved html prop so we make sure we don't pass it into the styled component
  // or it will end up in the markup
  const { name, ...propsWithoutName } = props;
  return (
    <StyledUserBlock {...propsWithoutName} theme={theme}>
      <Avatar
        name={props.avatarName || typeof props.name === 'string' ? props.name : 'Anonymous'}
        url={props.avatarUrl ? props.avatarUrl : undefined}
        size={props.size}
      />
      <Details>
        <Name>{props.name || 'Anonymous'}</Name>
        {!!props.extra && <Extra>{props.extra}</Extra>}
      </Details>
    </StyledUserBlock>
  );
};

export default UserBlock;
