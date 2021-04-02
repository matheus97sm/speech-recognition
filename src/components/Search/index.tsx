import { FormEvent, useEffect, useState } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { api } from '../../services/api';
import { Container, SearchForm } from "./styles";

export function Search() {
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  // const [response, setResponse] = useState('');

  const commands = [
    {
      command: 'Search for *',
      callback: (searchSpeech: string) => {
        setMessage(`You searched for: ${searchSpeech}`)
        setSearch(searchSpeech);
      }
    }
  ];
  const { transcript, finalTranscript } = useSpeechRecognition({ commands });

  async function listenToSpeech() {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return alert(`Your browser don't support Speech Recognition.`)
    }

    await SpeechRecognition.startListening({ language: 'en-US' });
  }

  useEffect(() => {
    if (search !== '') {
      api.get(`api.php?format=json&origin=*&action=query&prop=extracts&explaintext=1&titles=${search}`)
        .then(response => {
          const getTheDescription = response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract;
          const newMessage = `${getTheDescription.split('.')[0]}.`;

          setMessage(newMessage);
        });
    }
  }, [search]);

  function handleSearchForSomething(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Container>
      <SearchForm onSubmit={handleSearchForSomething}>
        <input
          type="text"
          placeholder="Try to search for something like: pizza!"
          value={transcript}
          readOnly
        />

        <div>
          <button type="button" onClick={listenToSpeech}>
            <FaMicrophone />
          </button>

          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </SearchForm>

      <p>{message}</p>
    </Container>
  )
}
