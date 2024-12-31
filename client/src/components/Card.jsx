export default function Card({ character }) {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Foto di ${character.name}`} />
      <p>{character.description || 'Nessuna descrizione'}</p>
    </div>
  );
}
