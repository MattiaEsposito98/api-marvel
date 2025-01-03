import { useContext, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"

export default function Navbar() {
  const { setQuery } = useContext(GlobalContext)
  const [localQuery, setLocalQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (localQuery.trim()) {
      console.log('Cercando:', localQuery);
      setQuery(localQuery) // Passa il valore della query alla funzione
      setLocalQuery("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-search"> Search a character</label>
      <input type="text"
        value={localQuery}
        placeholder="write here..."
        onChange={(e) => { setLocalQuery(e.target.value) }} />
      <button className="searchButton" type="submit" disabled={!localQuery.trim()} >
        {/* //Disabilita il pulsante se l'input è vuoto */}
        Search </button>
    </form>
  )
}