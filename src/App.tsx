import { Header } from './components/Header';
import { Search } from './components/Search';
import { SearchResponse } from './components/SearchResponse';
import { SearchProvider } from './SearchContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />

      <SearchProvider>
        <Search />
        <SearchResponse />
      </SearchProvider>

      <GlobalStyle />
    </>
  );
}
