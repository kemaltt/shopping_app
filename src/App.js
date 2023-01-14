import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Compare from "./pages/Compare";
import { ProductContextProvider } from "./contexts/ProductContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
            <Route path="/compare" element={<Compare />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
