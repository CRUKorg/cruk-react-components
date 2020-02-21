import React from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import { COLORS, TYPOGRAPHY, FONT_SIZES } from '../Constants';

type StepProps = {
  theme: { colors: {} };
  current: number;
  steps: [];
  children: any;
};

const StepWrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  font-size: ${FONT_SIZES.small};
  font-weight: ${TYPOGRAPHY.fontWeightHeavy};
`;

type StepListProps = {
  total: number;
};

const StepList = styled.ul<StepListProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${props =>
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
const StepBar = styled.span`
  border-radius: 50%;
  background-clip: padding-box;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.white};
  display: block;
  margin: 0 auto 0.5em auto;
  border: 3px solid ${props => props.theme.colors.grayLight};
  text-indent: -999px;

  &:after {
    display: block;
    position: absolute;
    top: 8px;
    width: 100%;
    height: 3px;
    content: '';
    background-color: transparent;
    border-bottom: 3px solid ${props => props.theme.colors.grayLight};
    left: 50%;
    margin-left: 10px;
  }
`;
const StepTick = styled.span`
  display: block;
  transform: rotate(45deg);
  height: 11px;
  width: 7px;
  border-bottom: 2.5px solid ${props => props.theme.colors.white};
  border-right: 2.5px solid ${COLORS.white};
  margin-top: 3.5px;
  margin-left: 6.5px;
`;

type StepItemProps = {
  active: boolean;
  done: boolean;
};

const StepItem = styled.li<StepItemProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  ${props =>
    props.active &&
    css`
      ${StepBar} {
        border-color: ${props => props.theme.colors.tertiary};
      }
    `}
  ${props =>
    props.done &&
    css`
      ${StepBar} {
        border: none;
        background-color: ${props => props.theme.colors.tertiary};
        &:after {
          border-bottom: 3px solid ${props => props.theme.colors.tertiary};
        }
      }
    `}
`;

const Step = (props: StepProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  const totalSteps = Array.isArray(props.steps) && Object.keys(props.steps).length;
  return (
    <ThemeProvider theme={theme}>
      <StepWrapper>
        <StepList total={totalSteps}>
          {Array.isArray(props.steps) &&
            props.steps.map((step, i) => (
              <StepItem key={i} active={i + 1 === props.current} done={i + 1 < props.current}>
                <StepBar>{i + 1 < props.current && <StepTick />}</StepBar>
                {step}
              </StepItem>
            ))}
        </StepList>
        {props.children}
      </StepWrapper>
    </ThemeProvider>
  );
};

Step.defaultProps = {
  current: 1,
  theme: {},
};

export default withTheme(Step);
