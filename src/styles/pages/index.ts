import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.div`
  width: min(90vw, 340px);

  background: var(--white);
  
  border-radius: 12px;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;

  background: var(--black);

  border-radius: 12px 12px 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;

  span {
    color: var(--white);
    font-size: 20px;
  }

  svg {
    font-size: 24px;
    color: var(--light-blue);
  }
`;

export const Main = styled.main`
  padding: 30px;

  span {
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  margin-top: 18px;

  display: flex;

  div {
    height: 48px;
    width: 48px;

    background: var(--light-blue);

    border-radius: 8px 0 0 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;

    svg {
      font-size: 22px;
    }
  }
`;

export const Input = styled.input`
  height: 48px;
  width: calc(100% - 48px);

  padding: 0 20px;

  background: var(--input);
  border-radius: 0 8px 8px 0;

  border: 0;
  outline: 0;

  color: var(--light-blue);
  font-weight: 700;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;

  margin-top: 12px;

  background: var(--light-blue);
  border-radius: 8px;

  border: 2px solid var(--light-blue);
  outline: 0;

  cursor: pointer;

  color: var(--white);
  font-size: 16px;

  transition: background-color 0.2s;
  
  &:hover {
    background: var(--white);
    color: var(--light-blue);
  }
`;