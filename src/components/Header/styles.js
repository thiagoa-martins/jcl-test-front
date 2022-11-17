import styled from "styled-components";

export const Container = styled.header`
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    font-weight: 500;
    padding: 1rem 3rem;
  }
`;