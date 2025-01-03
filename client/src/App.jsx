import { GlobalProvider } from "./contexts/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/layouts/Header";
import Index from "./pages/Index";
import Show from "./pages/Show";

function App() {
  return (
    <GlobalProvider>

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/show/:name" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
