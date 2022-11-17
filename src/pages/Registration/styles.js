import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  padding: 0 0.5rem;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;

  width: 20px;
  height: 20px;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Table = styled.table`
  background: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0.5rem;
  box-shadow: 1rem 1rem 2rem -1rem rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 4px;
  margin: 0 auto;

  width: 90%;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    th,
    td {
      text-align: left;
      width: 20%;
      max-width: 30%;
    }

    th,
    td {
      margin: 0 1rem;
    }

    > th {
      font-weight: bold;
    }

    > td {
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    &:nth-child(odd) {
      background: #ddd;
    }
  }

  h1 {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    padding-bottom: 0.5rem;
    font-weight: 500;
  }

  tbody {
    overflow-x: auto;
  }

  tbody tr td:last-child {
    display: flex;
    align-items: center;

    > button + button {
      margin-left: 0.5rem;
    }
  }

  tbody tr {
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }

  @media (max-width: 1100px) {
    width: 100%;

    thead th,
    tbody td {
      width: 80%;
    }
  }

  @media (max-width: 700px) {
    display: flex;

    thead {
      h1 {
        display: none;
      }
    }

    thead tr,
    tbody tr {
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      th button {
        margin: 0;
        width: 100%;
      }
    }

    thead tr,
    tbody tr {
      padding: 0.5rem;
    }

    thead tr {
      width: 150px;
    }

    tbody tr {
      width: 200px;
    }

    thead tr th,
    tbody tr td {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }

    tbody {
      display: flex;
    }

    tbody tr {
      flex-direction: column;
    }
  }

  thead tr th + th,
  tbody tr td + td {
    margin-top: 0.5rem;
  }

  tbody tr td:last-child {
    justify-content: center;
    margin-top: 0.5rem;
  }
`;
