import { useNavigate } from "react-router-dom"
import style from "./ButtonNavigate.module.css"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"

export default function ButtonNavigate() {
  const { setQuery } = useContext(GlobalContext)
  const navigate = useNavigate()

  function home() {
    console.log('Navigating to home');
    navigate('/')
    setQuery('')
  }


  return (
    <button className="searchButton" onClick={home}>Home</button>
  )
}