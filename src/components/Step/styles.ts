import styled, { css } from "styled-components";
import { type ThemeType } from "../../types";

export const StepWrapper = styled.div`
  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  text-align: center;
  text-transform: capitalize;
`;

type StepListProps = {
  total: number;
};

type ThemeProps = {
  theme: ThemeType;
};

export const StepList = styled.ul<StepListProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${(props) =>
    props.total &&
    css`
      li {
        width: ${100 / props.total}%;
      }
      li:last-child span:after {
        display: none;
      }
    `}
`;

export const StepBar = styled.span<ThemeProps>`
  border-radius: 50%;
  background-clip: padding-box;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.stepBackground};
  display: block;
  margin: 0 auto 0.5em auto;
  border: 2px solid ${({ theme }) => theme.colors.stepBorder};
  text-indent: -999px;

  &:after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    content: "";
    background-color: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.colors.stepBorder};
    left: 50%;
    top: 11px;
    margin-left: 12px;
  }
`;

export const StepTick = styled.span<ThemeProps>`
  display: block;
  transform: rotate(45deg);
  transform-origin: center center;
  height: 14px;
  width: 8px;
  border-bottom: ${({
    theme: {
      colors: { textLight },
    },
  }) => `2px solid ${textLight}`};
  border-right: ${({
    theme: {
      colors: { textLight },
    },
  }) => `2px solid ${textLight}`};
  margin-top: 4px;
  margin-left: 8px;
`;

type StepItemProps = {
  active: boolean;
  done: boolean;
  theme: ThemeType;
};

export const StepItem = styled.li<StepItemProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  ${({ theme, active }: StepItemProps) =>
    active &&
    css`
      ${StepBar} {
        border-color: ${theme.colors.tertiary};
      }
    `}
  ${({ done, theme }) =>
    done &&
    css`
      ${StepBar} {
        border: none;
        background-color: ${theme.colors.tertiary};
        &:after {
          border-bottom: 2px solid ${theme.colors.tertiary};
        }
      }
    `}
`;
