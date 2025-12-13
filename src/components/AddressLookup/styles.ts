import styled from "styled-components";

interface ListWrapperProps extends React.HTMLProps<HTMLDivElement> {
  tabIndex?: number;
}

type ListProps = {
  $isActive?: boolean;
};

export const ListWrapper = styled.div<ListWrapperProps>`
  position: relative;
`;

export const List = styled.ul<{
  $isActive?: boolean;
}>`
  background-color: var(--clr-background-light, #ffffff);
  border-radius: 3px;
  border: 2px solid #ccc;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  list-style: none;
  margin-top: 0;
  max-height: 400px;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 999;
`;

export const ListItem = styled.li<{
  $isActive?: boolean;
}>`
  align-items: center;
  background-color: ${({ $isActive }: ListProps) =>
    $isActive
      ? "var(--clr-background-mid, #f0f0f0)"
      : "var(--clr-background-light, #ffffff)"};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  &:hover,
  &:focus {
    background-color: #ddd;
  }
`;

// TODO move to its own component
export const ScreenReaderOnly = styled.div`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin-bottom: -1px;
  margin-right: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
