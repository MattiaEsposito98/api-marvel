import GlobalContext from "./contexts/GlobalContext"
import Header from "./layouts/layouts/Header"

function App() {
  return (
    <GlobalContext>
      <Header />
    </GlobalContext>

  )
}

export default App
