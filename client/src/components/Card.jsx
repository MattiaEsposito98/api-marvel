import style from './Card.module.css'
import { Link, useNavigate } from 'react-router-dom'
import ButtonNavigate from './ButtonNavigate';

export default function Card({ character }) {
  return (
    <>
      {/* <ButtonNavigate /> */}
      <div className={style.card}>
        <h3>{character.name}</h3>
        <img
          className={style.img}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={`Immagine di ${character.name}`}
        />
        <p>{character.description || 'No description available.'}</p>
        <Link to={`/show/${encodeURIComponent(character.name)}`}>
          <button className={style.button}>Info</button>
        </Link>
      </div>
    </>

  );
}