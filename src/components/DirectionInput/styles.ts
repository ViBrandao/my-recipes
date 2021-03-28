import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: space-between;
  height: 4rem;

  strong {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 1rem;
    background: #d7d7d7;
    border-radius: 4px 0 0 4px;
  }

  textarea {
    height: 100%;
    resize: none;
    border-radius: 0;
    padding: 1rem;
  }

  button {
    background: #d7d7d7;
    border-radius: 0 4px 4px 0;
  }
`;
