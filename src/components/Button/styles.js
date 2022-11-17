import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-style: none;
  border-radius: 4px;

  padding: 8px;
  background-color: ${({ theme, red }) =>
    red ? theme.COLORS.RED : theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
