import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.BLACK};

    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover {
    filter: brightness(.9);
  }
`;
