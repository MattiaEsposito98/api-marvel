import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import ButtonNavigate from "../components/ButtonNavigate";

export default function Show() {
  const { name } = useParams(); // Recupera il parametro "name" dalla route
  const { setQuery } = useContext(GlobalContext)
  const navigate = useNavigate()

  // useEffect(() => {
  //   console.log("name", name)
  //   if (!name) {
  //     navigate("/"); // Reindirizza alla home se il parametro "name" non è definito
  //   } else {
  //     setQuery(name)
  //   }
  // }, [name, navigate, setQuery])


  if (!name) {
    return null; // Rendi nulla l'interfaccia durante il reindirizzamento
  }


  return (
    <div>
      <h1 className="title">Dettagli del personaggio</h1>
      <ButtonNavigate />
      <p>Nome: {name}</p>
    </div>
  );
}
