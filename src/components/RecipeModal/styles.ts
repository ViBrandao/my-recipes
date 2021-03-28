import styled from 'styled-components';
export const Container = styled.form`
  input,
  select {
    width: 100%;
    padding: 0 1.05rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input,
    & + select {
      margin-top: 1rem;
    }
  }
`;
