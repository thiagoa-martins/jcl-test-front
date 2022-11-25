import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  padding: 0 0.5rem;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0.5rem;
  box-shadow: 1rem 1rem 2rem -1rem rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 4px;
  width: 90%;

  h1 {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    padding-bottom: 0.5rem;
    font-weight: 500;
  }

  .register {
    display: none;
    justify-content: space-evenly;
    align-items: center;

    padding: 1rem;

    > label {
      font-weight: bold;

      > input,
      select {
        border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
        padding: 0.5rem;
      }

      select,
      select option {
        font-weight: bold;
      }
    }

    @media (max-width: 1250px) {
      & {
        flex-direction: column;
        gap: 1rem;

        > label {
          display: flex;
          flex-direction: column;

          width: 80%;
        }
      }
    }
  }

  @media (max-width: 400px) {
    & {
      width: 100%;
    }
  }
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
  width: 100%;

  thead,
  tbody {
    display: block;
  }

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
  }

  tbody {
    overflow: auto;
    height: 350px;
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

  tbody tr:nth-child(odd) {
    background: #ddd;
  }

  @media (max-width: 1100px) {
    width: 100%;

    thead th,
    tbody td {
      width: 80%;
    }
  }

  @media (max-width: 750px) {
    & {
      display: flex;

      tbody {
        height: 100%;
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
