import style from "./CardShow.module.css"
import { useNavigate } from "react-router-dom"

export default function CardShow({ character }) {
  const navigate = useNavigate()


  return (
    <>
      <button className="searchButton" onClick={() => navigate(-1)}>Back</button>
      <header className={style.containerHeader}>
        <h3 className={style.titleShow}>{character.name}</h3>
        <img className={style.imgShow} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
      </header>

      <main className={style.containerMain}>
        {character.comics?.items?.length > 0 ? (      //? (optional chaining) ci ritorna null o undefined senza segnalarci l'errore
          <ul className="col">
            <h4>Comics list: </h4>
            {character.comics.items.map((comic, index) => (
              <li key={index}>{comic.name}</li>
            ))}
          </ul>) : (
          <p>No comics available</p>
        )}


        {
          character.series?.items?.length > 0 ? (
            <ul className="col">
              <h4>Series list:</h4>
              {character.series.items.map((serie, index) => (
                <li key={index}>{serie.name}</li>
              ))}
            </ul>) : (
            <p>No series available</p>
          )
        }


        {
          character.events?.items?.length > 0 ? (
            <ul className="col">
              <h4 >Movie list:</h4>
              {character.events.items.map((event, index) => (
                <li key={index}>{event.name}</li>
              ))}
            </ul>) : (
            <h4>No Movies  Available</h4>
          )
        }

      </main>

    </>
  )
}
