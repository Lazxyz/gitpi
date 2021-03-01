import styled from "styled-components";

export const Container = styled.div`
  padding: 120px 0;

  h2 {
    text-align: center;
    color: var(--black);
    font-weight: 700;
    
    font-size: 25px;

    margin-bottom: 38px;
  }
`;

export const Repositories = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, min(90vw, 450px));
  justify-content: center;
  gap: 30px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, min(90vw, 450px));
  }
`;