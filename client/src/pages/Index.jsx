import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext"; // Assicurati che il percorso sia corretto
import Card from "../components/Card";

export default function Index() {
  const { characters } = useContext(GlobalContext); // Usa useContext correttamente

  return (
    <div className="characters-page">
      <h1>Personaggi Marvel</h1>
      <div className="characters-grid">
        {characters.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
