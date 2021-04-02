import { Header } from './components/Header';
import { Search } from './components/Search';
import { SearchResponse } from './components/SearchResponse';
import { SearchTip } from './components/SearchTip';
import { SearchProvider } from './SearchContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />

      <SearchProvider>
        <Search />
        <SearchResponse />

        <SearchTip />
      </SearchProvider>

      <GlobalStyle />
    </>
  );
}
