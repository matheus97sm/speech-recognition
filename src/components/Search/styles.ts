import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  input {
    width: 100%;
    height: 2rem;
    padding: 0.25rem 1rem;

    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    border: none;
    border-radius: .25rem;

    &::placeholder {
      color: var(--lightGrey);
    }
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    border: none;
    border-radius: .25rem;

    svg {
      fill: var(--grey);
      font-size: 1rem;
    }
  }
  }
`;
