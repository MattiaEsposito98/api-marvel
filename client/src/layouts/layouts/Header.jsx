import { Link } from "react-router-dom"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import style from "./header.module.css"


export default function Header() {
  const { setQuery } = useContext(GlobalContext)

  const handleClick = () => {
    setQuery('')
  }



  return (
    <header className={style.header}>
      <Link to="/" onClick={handleClick} >
        {/* <h1 className={style.h1}> Marvel </h1> */}
        <img className={style.img} src="https://sw6.elbenwald.de/media/a6/73/f3/1637840104/E1068326_2.jpg" alt="" />
      </Link>
    </header>
  )
}