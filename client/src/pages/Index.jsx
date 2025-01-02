import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext"
import Card from "../components/Card";

export default function Index() {
  const { characters, setQuery, isLoading } = useContext(GlobalContext)
  const [localQuery, setLocalQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (localQuery.trim()) {
      setQuery(localQuery) // Passa il valore della query alla funzione
    }
  }


  return (
    <>
      <h1>Personaggi Marvel</h1>
      <form onSubmit={handleSubmit}>
        <label> Cerca un personaggio </label>
        <input type="text"
          value={localQuery}
          onChange={(e) => { setLocalQuery(e.target.value) }} />
        <button type="submit"> Cerca </button>
      </form>
      {isLoading ? (
        <div className="loading-container">
          <img className="clessidra" src="https://plus.unsplash.com/premium_photo-1725075086911-25e923a7e646?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p className="loading">Caricamento in corso...</p>
        </div>

      ) : (
        <div className="container">
          <div className="row">
            {characters.length > 0 ?
              characters.map(character => (
                <Card key={character.id} character={character} />
              )) :
              <p>Nessun personaggio trovato.Prova un'altra ricerca!</p>
            }
          </div>
        </div>
      )}

    </>

  );
}
