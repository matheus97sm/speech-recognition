import { FormEvent, useContext, useEffect, useState } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { SearchContext } from '../../SearchContext';

import { Container, SearchForm } from "./styles";

export function Search() {
  const { searchInWikipedia } = useContext(SearchContext);

  const [search, setSearch] = useState('');
  const [isListeningToMicrophone, setIsListeningToMicrophone] = useState(false);

  const commands = [
    {
      command: 'Search for *',
      callback: (searchSpeech: string) => {
        searchInWikipedia(searchSpeech);
      }
    }
  ];
  const { transcript, finalTranscript, resetTranscript } = useSpeechRecognition({ commands });

  async function listenToSpeech() {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return alert(`Your browser don't support Speech Recognition.`)
    }

    if (isListeningToMicrophone) {
      setIsListeningToMicrophone(false);

      return SpeechRecognition.stopListening();
    }

    setSearch('');
    setIsListeningToMicrophone(true);

    await SpeechRecognition.startListening({ language: 'en-US' });
  }

  useEffect(() => {
    setIsListeningToMicrophone(false);
    resetTranscript();
  }, [finalTranscript, resetTranscript])

  function handleSearchForSomething(event: FormEvent) {
    event.preventDefault();

    searchInWikipedia(search);
  }

  return (
    <Container>
      <SearchForm
        onSubmit={handleSearchForSomething}
        isListeningToMicrophone={isListeningToMicrophone}
      >
        <input
          type="text"
          placeholder={transcript || "Try to search for something like: pizza!"}
          value={search}
          onChange={event => setSearch(event.target.value)}
          readOnly={isListeningToMicrophone}
        />

        <div>
          <button type="button" onClick={listenToSpeech}>
            <FaMicrophone />
          </button>

          <button
            type="submit"
            disabled={isListeningToMicrophone}
          >
            <FaSearch />
          </button>
        </div>
      </SearchForm>
    </Container>
  )
}
