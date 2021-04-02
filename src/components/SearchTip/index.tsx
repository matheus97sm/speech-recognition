import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../SearchContext';
import { Container } from './styles';

export function SearchTip() {
  const [turnOnPopUp, setTurnOnPopUp] = useState(false)
  const { searchHelp } = useContext(SearchContext);

  useEffect(() => {
    if (searchHelp) {
      setTurnOnPopUp(true);

      window.setTimeout(() => {
        setTurnOnPopUp(false);
      }, 3000)
    }
  }, [searchHelp])

  return (
    <Container turnOnPopUp={turnOnPopUp}>
      <p>To search for something, you just need to say: <strong>Search for "pizza"!</strong></p>
    </Container>
  )
}