import { GlobalProvider } from "./contexts/GlobalContext"
import Header from "./layouts/layouts/Header"
import Index from "./pages/Index"

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Index />
    </GlobalProvider>

  )
}

export default App
