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

export const StepList = styled.ul<{
  $total: number;
}>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ $total }) =>
    $total &&
    css`
      li {
        width: ${100 / $total}%;
      }
      li:last-child span:after {
        display: none;
      }
    `}
`;

export const StepBar = styled.span`
  border-radius: 50%;
  background-clip: padding-box;
  width: 24px;
  height: 24px;
  background-color: var(--clr-step-background, #fff);
  display: block;
  margin: 0 auto 0.5em auto;
  border: 2px solid var(--clr-step-border, #e6e6e6);
  text-indent: -999px;

  &:after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    content: "";
    background-color: transparent;
    border-bottom: 2px solid var(--clr-step-border, #e6e6e6);
    left: 50%;
    top: 11px;
    margin-left: 12px;
  }
`;

export const StepTick = styled.span`
  display: block;
  transform: rotate(45deg);
  transform-origin: center center;
  height: 14px;
  width: 8px;
  border-bottom: 2px solid var(--clr-text-light, #fff);
  border-right: 2px solid var(--clr-text-light, #fff);
  margin-top: 4px;
  margin-left: 8px;
`;

export const StepItem = styled.li<{
  $active: boolean;
  $done: boolean;
  theme: ThemeType;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  ${({ $active }) =>
    $active &&
    css`
      ${StepBar} {
        border-color: var(--clr-tertiary, #009cee);
        background-color: var(--clr-tertiary, #009cee);
      }
    `}
  ${({ $done }) =>
    $done &&
    css`
      ${StepBar} {
        border: none;
        background-color: var(--clr-tertiary, #009cee);
        &:after {
          border-bottom: 2px solid var(--clr-tertiary, #009cee);
        }
      }
    `}
`;
