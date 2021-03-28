import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto 20px auto;
  display: block;
  justify-content: space-between;
  background: #f5ac2e;
  color: #ffffff;
  padding: 2rem 1.5rem;
  align-items: center;

  h1 {
    font-weight: 600;
  }

  button {
    width: 100%;
  }

  @media (min-width: 480px) {
    display: flex;

    button {
      width: 6rem;
    }
  }
`;
