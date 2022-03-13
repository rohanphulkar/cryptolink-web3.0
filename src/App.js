import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Market from "./components/Market";
import CoinDetails from "./components/CoinDetails";
function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero />}></Route>
          <Route path="/market"  element={<Market />}></Route>
          <Route path="/coin/:id" element={<CoinDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
