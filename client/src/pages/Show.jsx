import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

export default function Show() {
  const { name } = useParams(); // Recupera il parametro "name" dalla route
  const navigate = useNavigate();
  const { setQuery } = useContext(GlobalContext);

  useEffect(() => {
    if (!name) {
      navigate("/"); // Reindirizza alla home se il parametro "name" non è definito
    } else {
      setQuery('')
    }
  }, [name, navigate, setQuery]);

  if (!name) {
    return null; // Rendi nulla l'interfaccia durante il reindirizzamento
  }

  return (
    <div>
      <h1 className="title">Dettagli del personaggio</h1>
      <p>Nome: {name}</p>
    </div>
  );
}
