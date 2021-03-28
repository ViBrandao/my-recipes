import styled from 'styled-components';

export const Container = styled.form`
  input,
  select,
  textarea {
    width: 100%;
    padding: 0 1.05rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 0.15rem;
    height: 4rem;
    background: #e06300;
    color: #ffffff;
    border-radius: 0.25rem;
    border: 0ch;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
