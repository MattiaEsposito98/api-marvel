import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import ButtonNavigate from "../components/ButtonNavigate";
import CardShow from "../components/CardShow";

export default function Show() {
  const { name } = useParams(); // Recupera il parametro "name" dalla route
  const { characters } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/"); // Reindirizza alla home se il parametro "name" non è definito
    }
  }, [name, navigate]);

  // Trova il personaggio corrispondente in characters solo se i dati sono disponibili
  const character = characters.find(c => c.name === name);

  if (!character) {
    return <p>Character not found.</p>; // Messaggio nel caso il personaggio non venga trovato
  }

  return (
    <div>
      <h1 className="title">Dettagli del personaggio</h1>
      <ButtonNavigate />
      <CardShow character={character} />
    </div>
  );
}
