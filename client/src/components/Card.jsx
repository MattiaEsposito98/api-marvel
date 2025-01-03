import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ character }) {
  return (
    <div className={style.card}>
      <h3>{character.name}</h3>
      <img
        className={style.img}
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`Immagine di ${character.name}`}
      />
      <p>{character.description || 'Nessuna descrizione disponibile.'}</p>
      <Link to={`/show/${character.name}`}>
        <button className={style.button}>Info</button>
      </Link>
    </div>
  );
}