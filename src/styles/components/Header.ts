import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--white);

    display: flex;
    align-items: center;

    font-size: 28px;

    svg {
      font-size: 38px;
      margin-right: 12px;
    }
  }
`;
