import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Stato per il caricamento
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    if (query) {
      searchCharacter(query);
    } else {
      fetchData();
    }
  }, [query]);

  const fetchData = () => {
    setIsLoading(true); // Avvia il caricamento
    axios.get('https://gateway.marvel.com/v1/public/characters?ts=1735644658113&apikey=5e51543a849647499002244edf04a53b&hash=f9f3f815ed1971dc380fcbe012dba70d&limit=12')
      .then(res => {
        setCharacters(res.data.data.results);
      })
      .catch(err => {
        console.error('Errore nel recupero iniziale', err);
      })
      .finally(() => setIsLoading(false)); // Fine caricamento
  };

  const searchCharacter = (name) => {
    setIsLoading(true); // Avvia il caricamento
    axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1735644658113&apikey=5e51543a849647499002244edf04a53b&hash=f9f3f815ed1971dc380fcbe012dba70d&name=${name}`)
      .then(res => {
        setCharacters(res.data.data.results);
      })
      .catch(err => {
        console.error('Errore nella ricerca', err);
      })
      .finally(() => setIsLoading(false)); // Fine caricamento
  };

  return (
    <GlobalContext.Provider value={{ characters, setQuery, isLoading, searchCharacter, selectedCharacter, setSelectedCharacter }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
