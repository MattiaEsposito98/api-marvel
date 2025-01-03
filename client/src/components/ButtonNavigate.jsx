import { useNavigate } from "react-router-dom"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"

export default function ButtonNavigate() {
  const { setQuery } = useContext(GlobalContext)
  const navigate = useNavigate()

  function home() {
    navigate('/')
    setQuery('')
  }


  return (
    <button className="searchButton" onClick={home}>Home</button>
  )
}