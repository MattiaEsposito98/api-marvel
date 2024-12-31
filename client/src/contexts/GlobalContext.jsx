import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://gateway.marvel.com/v1/public/characters?ts=1735644658113&apikey=5e51543a849647499002244edf04a53b&hash=f9f3f815ed1971dc380fcbe012dba70d&limit=10')
      .then(res => {
        setCharacters(res.data.data.results);
      })
      .catch(err => {
        console.error('Errore nella ricerca', err);
      });
  };

  return (
    <GlobalContext.Provider value={{ characters, setCharacters }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
