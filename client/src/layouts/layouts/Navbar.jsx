import { useContext, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const { setQuery } = useContext(GlobalContext)
  const [localQuery, setLocalQuery] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if (localQuery.trim()) {
      console.log('Cercando:', localQuery);
      setQuery(localQuery)
      navigate(`/`) // Naviga alla pagina dei dettagli del personaggio
      setLocalQuery("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-search">Search a character</label>
      <input
        type="text"
        value={localQuery}
        placeholder="write here..."
        onChange={(e) => setLocalQuery(e.target.value)}
      />
      <button className="searchButton" type="submit" disabled={!localQuery.trim()}>
        Search
      </button>
    </form>
  );
}
