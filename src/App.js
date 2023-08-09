import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import Parent from "./components/context/Parent";
import RefDemo from "./components/references/RefDemo";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material";

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#F9F6EE",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>Real World React</h1>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="*" element={<h2>Route not found</h2>} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/context" element={<Parent />} />
            <Route path="/references" element={<RefDemo />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
