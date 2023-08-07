import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real World React (Advanced Topics)</h1>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
