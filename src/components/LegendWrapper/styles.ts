import styled from 'styled-components';

import { ThemeType } from 'src/types';

type StyledFieldsetProps = {
    hasError: boolean;
    theme: ThemeType;
    hasHintText: boolean;
};

export const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
    border: none;
    padding: 0;
    legend {
        margin-bottom: ${({ hasHintText, theme }) => (hasHintText ? theme.spacing.xxs : theme.spacing.xs)};
        span {
            color: ${({ theme }) => theme.colors.textDark};
            font-size: ${({ theme }) => theme.fontSizes.m};
            line-height: ${({ theme }) => theme.typography.lineHeight};
            min-width: 3em;
            & > * {
                font-weight: normal;

            }
        }
    }
    label {
        border: solid ${({ theme }) => theme.utilities.inputBorderWidth} ${({ hasError, theme }) =>
        hasError ? theme.colors.textError : theme.colors.textInputBorder};
    }
`