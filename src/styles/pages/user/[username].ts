import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: var(--input);
`;

export const Header = styled.header`
  padding: 45px 60px;

  min-height: 260px;

  background: var(--light-blue);

  border-radius: 0 0 32px 32px;

  @media (max-width: 370px) {
    padding: 45px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 120px;
    width: 120px;

    border-radius: 50%;
  }

  > div:last-child {
    margin-left: 30px;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  > div strong {
    color: var(--white);
    font-weight: 700;
    font-size: 22px;

    display: flex;

    margin-bottom: 8px;
  }

  > div strong span {
    margin-left: 22px;

    display: flex;
    align-items: center;  

    font-size: 18px;
  }

  > div strong span svg {
    font-size: 22px;
    margin-right: 8px;
  }

  > div p {
    margin-bottom: 22px;

    max-width: 520px;
    color: #fff;
  }

  @media (max-width: 485px) {
    flex-direction: column;

    > div:last-child {
      margin-left: 0;
    }

    > div {
      margin-top: 28px;
      align-items: center;
    }

    > div p {
      margin-top: 8px;
      text-align: center;
    }
  }
`;

export const Followers = styled.div`
  margin-top: 8px;
  color: #fff;

  > span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Repositories = styled.div`
  padding: 120px 0;

  h2 {
    text-align: center;
    color: var(--black);
    font-weight: 700;
    
    font-size: 25px;

    margin-bottom: 38px;
  }
`;

export const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, min(90vw, 450px));
  justify-content: center;
  gap: 30px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, min(90vw, 450px));
  }
`;