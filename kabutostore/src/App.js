import "./App.css";
import NavBar from "./componentes/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favoritos from "./componentes/Favoritos";
import Tienda from "./componentes/Tienda";
import ShopContextProvider from "../src/context/ShopContext";
import ItemDetail from "./componentes/ItemDetail";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Tienda />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/itemdetails" element={<ItemDetail />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
