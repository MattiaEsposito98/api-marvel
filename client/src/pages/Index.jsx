import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import Card from "../components/Card"
import ButtonNavigate from "../components/ButtonNavigate"

export default function Index() {
  const { characters, isLoading } = useContext(GlobalContext)

  return (
    <>
      <h1 className="title">Characters Marvel</h1>
      {isLoading ? (
        <div className="loading-container">
          <img className="clessidra" src="https://plus.unsplash.com/premium_photo-1725075086911-25e923a7e646?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p className="loading">Loading...</p>
        </div>

      ) : (
        <>
          <div className="container">
            <div className="row">
              {characters.length > 0 ?
                characters.map(character => (

                  <Card key={character.id} character={character} />
                )) :
                <div>
                  <ButtonNavigate />
                  <p className="notFound">No characters found.Try another search!</p>
                </div>

              }
            </div>
          </div>
        </>
      )}

    </>

  );
}
