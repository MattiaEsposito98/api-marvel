export default function Header() {
  function home() {
    location.reload()
  }

  return (
    <header>
      <h1 onClick={home}> Marvel </h1>
    </header>
  )
}