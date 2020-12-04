import { keyframes, css } from 'styled-components';

const loading = keyframes`
0%, 100%{
        background-position: right;
    }
  50%{
      background-position: left;
  }
`;

export const skeleton = () => css`
  background: linear-gradient(to right, #f1f0f0, #c1c0c0, #f1f0f0);
  background-size: 200%;
  background-position: left;
  animation: ${loading} 2s ease-out 0s infinite normal;
  color: transparent;
  border-radius: 15px;
`;

export const tableSkeleton = () => css`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1em;
  }
  tr,
  th,
  td {
    width: 100%;
    height: 30px;
    ${skeleton()};
  }
  thead {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    height: 25px;
    padding: 10px;
  }
`;
