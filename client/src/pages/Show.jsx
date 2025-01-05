import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import GlobalContext from "../contexts/GlobalContext"
import ButtonNavigate from "../components/ButtonNavigate"
import CardShow from "../components/CardShow"

export default function Show() {
  const { name } = useParams() // Recupera il parametro "name" dalla route
  const { characters } = useContext(GlobalContext)
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null); // Stato per il personaggio trovato

  useEffect(() => {
    if (!name) {
      navigate("/") // Reindirizza alla home se il parametro "name" non è definito
    } else {
      // Trova il personaggio corrispondente in characters
      const foundCharacter = characters.find(c => c.name.toLowerCase() === name.toLowerCase());
      setCharacter(foundCharacter) // Aggiorna lo stato con il personaggio trovato
    }
  }, [name, navigate, characters]) // Esegui questo effetto ogni volta che name o characters cambiano

  if (!character) {
    return <p>Character not found.</p> // Messaggio nel caso il personaggio non venga trovato
  }

  return (
    <div>
      <h1 className="title">Character details</h1>
      <ButtonNavigate />
      <CardShow character={character} />
    </div>
  );
}
