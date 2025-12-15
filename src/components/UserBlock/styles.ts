import styled from "styled-components";

export const StyledUserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 1;
`;

export const Details = styled.div`
  flex: 1;
  margin-left: var(--spacing-xs, 1rem);
  text-align: left;
  min-width: 0;
`;

export const Name = styled.div`
  font-family: var(--typ-font-family-headings, "Progress", Arial, sans-serif);
  font-size: var(--font-size-l, 1.25rem);
  white-space: normal;
  word-break: break-word;
`;

export const Extra = styled.div`
  color: var(--clr-user-block-extra-text, #575757);
  margin-top: 4px;
  white-space: normal;
  word-break: break-word;
`;
