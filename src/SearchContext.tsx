import { createContext, ReactNode, useState } from 'react';
import { api } from './services/api';

interface SearchProviderProps {
  children: ReactNode
}

interface SearchContextData {
  message: string
  searchWord: string
  searchInWikipedia: (search: string) => void
  setSearchErrorMessage: (error: string) => void
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData
);

export function SearchProvider({ children }: SearchProviderProps) {
  const [message, setMessage] = useState('');
  const [searchWord, setSearchWord] = useState('')

  function searchInWikipedia(search: string) {
    if (search !== '') {
      setSearchWord(search);
      setMessage('Searching...');

      api.get(`api.php?format=json&origin=*&action=query&prop=extracts&explaintext=1&titles=${search}`)
        .then(response => {
          const getTheDescription = response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract;
          const newMessage = `${getTheDescription.split('.')[0]}.`;

          setMessage(newMessage);
        });
    }
  }

  function setSearchErrorMessage(error: string) {
    setMessage(error);
  }

  return (
    <SearchContext.Provider
      value={{
        message,
        searchWord,
        searchInWikipedia,
        setSearchErrorMessage
      }}>
      {children}
    </SearchContext.Provider>
  )
}
