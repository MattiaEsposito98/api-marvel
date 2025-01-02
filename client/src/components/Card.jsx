import style from './Card.module.css'

export default function Card({ character }) {
  return (
    <div className={style.card}>
      <h3>{character.name}</h3>
      <img className={style.img} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Foto di ${character.name}`} />
      <p>{character.description || 'Nessuna descrizione'}</p>
      <button className={style.button}>Info</button>
    </div>
  );
}
