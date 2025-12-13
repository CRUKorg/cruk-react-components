import styled, { css } from "styled-components";

import ProgressBar from "../ProgressBar";

export const BubbleWrapper = styled.div`
  text-align: center;
  background-color: var(--clr-totaliser-bubble, #f2f2f2);
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  p {
    margin: 0;
  }
`;

export const ProgressBarWrapper = styled.div<{
  $isCompact?: boolean;
}>`
  padding: 0 46px 12px;
  margin-top: var(--spacing-s, 1.5rem);
  position: relative;

  ${({ $isCompact }) =>
    !!$isCompact !== true &&
    css`
      div > div > div:not(:first-child) {
        &:after {
          content: "\\25bc";
          color: var(--clr-totaliser-bubble, #f2f2f2);
          position: absolute;
          top: -36px;
          right: -15px;
          font-size: 32px;
        }
      }
    `};
`;

export const Total = styled.p`
  color: var(--clr-totaliser-bubble-total, #00007e);
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: var(--typ-font-family-headings, "Progress", Arial, sans-serif);
  text-transform: var(--typ-header-text-transform, none);
  font-weight: var(--typ-font-weight-labels, 500);
`;

export const BubbleText = styled.p`
  color: var(--clr-totaliser-bubble-text, #000);
  font-family: var(--typ-font-family-headings, "Progress", Arial, sans-serif);
  text-transform: var(--typ-header-text-transform, none);
  font-weight: var(--typ-font-weight-labels, 500);
`;

export const GiftAid = styled.p`
  color: var(--clr-totaliser-bubble-total, #00007e);
  font-family: var(--typ-font-family-headings, "Progress", Arial, sans-serif);
  text-transform: var(--typ-header-text-transform, none);
  font-weight: var(--typ-font-weight-labels, 500);
`;

/* span not a div so that we don't end up with two speech bubble arrows from ProgressBarWrapper */
export const Summary = styled.span`
  display: block;
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
  font-family: var(--typ-font-family-base, "Poppins", Arial, sans-serif);
`;

export const TotaliserWrapper = styled.div<{
  $isCompact: boolean;
}>`
  font-family: var(--typ-font-family-headings, "Progress", Arial, sans-serif);
  margin: 0;
  ${(props) =>
    props.$isCompact &&
    css`
      ${ProgressBarWrapper} {
        border: none;
        padding: 0;
      }
    `}
`;

export const CompactWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
`;

export const StyledProgressBar = styled(ProgressBar)``;
