import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { COLORS, TYPOGRAPHY, UTILITIES, FONT_SIZES } from '../../themes/cruk';

const StyledUserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: ${props =>
    (props.theme.utilities && props.theme.utilities.rhythmVerticalBase) || UTILITIES.rhythmVerticalBase};
  flex: 1;
`;

const Details = styled.div`
  flex: 1;
  margin-left: ${props =>
    (props.theme.utilities && props.theme.utilities.rhythmHorizontalBase) || UTILITIES.rhythmHorizontalBase};
  text-align: left;
`;

const Name = styled.div`
  font-weight: ${props =>
    (props.theme.typography && props.theme.typography.fontWeightHeavy) || TYPOGRAPHY.fontWeightHeavy};
  font-size: ${({ theme: { fontSizes } }) => (fontSizes && fontSizes.medium ? fontSizes.medium : FONT_SIZES.medium)};
`;

const Extra = styled.div`
  color: ${props => (props.theme.colors && props.theme.colors.userBlockExtraText) || COLORS.userBlockExtraText};
  margin-top: 4px;
`;

type UserBlockProps = {
  name: string;
  avatarUrl?: string | null;
  avatarName?: string | null;
  extra: string | Node;
  size: 'small' | 'medium' | 'large' | 'xlarge';
};

const UserBlock: FunctionComponent<UserBlockProps> = props => {
  return (
    <StyledUserBlock>
      <Avatar name={props.avatarName || props.name} url={props.avatarUrl} size={props.size} />
      <Details>
        <Name>{props.name || 'Anonymous'}</Name>
        {props.extra && <Extra>{props.extra}</Extra>}
      </Details>
    </StyledUserBlock>
  );
};

UserBlock.defaultProps = {
  avatarUrl: null,
  avatarName: null,
};

export default UserBlock;
