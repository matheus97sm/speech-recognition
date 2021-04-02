import { createContext, ReactNode, useState } from 'react';
import { api } from './services/api';

interface SearchProviderProps {
  children: ReactNode
}

interface SearchContextData {
  message: string
  searchWord: string
  searchHelp: boolean
  searchInWikipedia: (search: string) => void
  setSearchErrorMessage: (error: string) => void
  handleSearchHelp: () => void
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData
);

export function SearchProvider({ children }: SearchProviderProps) {
  const [message, setMessage] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [searchHelp, setSearchHelp] = useState(false);

  function searchInWikipedia(search: string) {
    if (search !== '') {
      setSearchWord(search);
      setMessage('Searching...');

      api.get(`api.php?format=json&origin=*&action=query&prop=extracts&explaintext=1&titles=${search}`)
        .then(response => {
          const getTheDescription = response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract;
          const newMessage = `${getTheDescription ? getTheDescription.split('.')[0] : `Sorry, we didn't find what you're looking for`}.`;

          setMessage(newMessage);
        });
    }
  }

  function handleSearchHelp() {
    setSearchHelp(true);
  }

  function setSearchErrorMessage(error: string) {
    setMessage(error);
  }

  return (
    <SearchContext.Provider
      value={{
        message,
        searchWord,
        searchHelp,
        searchInWikipedia,
        setSearchErrorMessage,
        handleSearchHelp
      }}>
      {children}
    </SearchContext.Provider>
  )
}
