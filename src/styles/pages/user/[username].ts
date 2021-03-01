import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: var(--input);
`;

export const Header = styled.header`
  padding: 45px 60px;

  min-height: 260px;

  display: flex;
  justify-content: space-between;

  background: var(--light-blue);
  border-radius: 0 0 32px 32px;

  @media (max-width: 560px) {
    flex-direction: column-reverse;

    > div {
      display: flex;
      justify-content: center;
    }
  }

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
    margin-bottom: 4px;

    max-width: 520px;
    color: #fff;
  }

  @media (max-width: 560px) {
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

export const Infos = styled.div`
  margin-top: 8px;

  display: flex;
  flex-direction: column;

  > span, a {
    color: #fff;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  > a:hover {
    text-decoration: underline;
    text-decoration-color: var(--black);
  }

  > small {
    font-size: 14px;
    color: #fff;
  }

  @media (max-width: 560px) {
    margin-top: 28px;

    align-items: center;
  }
`;

export const Separator = styled.div`
  margin: 12px 0;
`;

export const BackToHomepage = styled.a`
  font-size: 19px;
  color: #fff;

  text-decoration: none;
  font-weight: 700;

  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    font-size: 24px;
    color: var(--black);
  }
`; 