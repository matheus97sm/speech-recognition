import { useContext } from 'react';
import { SearchContext } from '../../SearchContext';

import { Container } from "./styles";

export function SearchResponse() {
  const { message, searchWord } = useContext(SearchContext);

  return (
    <Container>
      <h2>{searchWord && `You've searched for: ${searchWord}`}</h2>
      <p>{message}</p>
    </Container>
  )
}
