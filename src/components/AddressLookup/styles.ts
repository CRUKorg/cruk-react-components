import styled from 'styled-components';

interface ListWrapperProps extends React.HTMLProps<HTMLDivElement> {
  tabIndex?: number;
}

export const ListWrapper = styled.div<ListWrapperProps>`
  position: relative;
`;

export const List = styled.ul<{ ref?: React.Ref<HTMLUListElement> }>`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
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

export const ListItem = styled.li<{ isActive: boolean; ref?: React.Ref<HTMLLIElement> }>`
  align-items: center;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.backgroundMid : theme.colors.backgroundLight)};
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
