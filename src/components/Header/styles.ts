import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 1rem 0;
  max-width: 1080px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1, 
  span {
    color: var(--grey);
  }
`;
