import axios from 'axios';
import CryptoJS from 'crypto-js';

const publicKey = '5e51543a849647499002244edf04a53b';
const privateKey = '4100fbdb56d824b90856a7e9e3660664d0678316';

const fetchMarvelCharacters = async () => {
  const ts = new Date().getTime(); // Timestamp
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString(); // Genera hash
  console.log(ts)
  console.log(hash)

  const url = 'https://gateway.marvel.com/v1/public/characters';
  const params = {
    ts,
    apikey: publicKey,
    hash,
    limit: 20, // Numero di risultati
  };

  try {
    const response = await axios.get(url, { params });
    const characters = response.data.data.results;

    console.log('Personaggi Marvel:');
    characters.forEach((character, index) => {
      console.log(`${index + 1}. ${character.name} - ${character.description || 'Nessuna descrizione disponibile'}`);
    });
  } catch (error) {
    console.error('Errore nella chiamata API:', error);
  }
};


fetchMarvelCharacters();
