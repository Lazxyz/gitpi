import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;
  padding: 30px;

  background: var(--white);

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  a {
    color: var(--light-blue);

    text-decoration: none;
    font-weight: 600;

    display: flex;
    align-items: center;

    font-size: 18px;

    margin-bottom: 8px;

    svg {
      margin-right: 8px;
      font-size: 20px;
    }
  }

  p {
    font-size: 14px;
    color: var(--text);
    margin-bottom: 8px;
  }
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  div {
    display: flex;
  }

  div span {
    margin-right: 28px;

    color: var(--light-blue);

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Language = styled.div`
  padding: 8px 24px;

  border: 1px solid var(--light-blue);
  border-radius: 32px;

  color: var(--light-blue);
`;