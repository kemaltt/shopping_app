import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import data from "./products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Compare from "./pages/Compare";
import { ProductContextProvider } from "./contexts/ProductContext";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [products, setProducts] = useState(data);
  const addToCompare = (product) => {
    setSelectedItems([...selectedItems, product]);
  };
  const removeToCompare = (product) => {
    setSelectedItems([
      ...selectedItems.filter((el) => el.product_id !== product.product_id),
    ]);
  };

  const { loginWithRedirect, isAuthenticated, logout, isLoading, user } =
    useAuth0();
  const addToCart = (product) => {
    if (selectedProducts.includes(product)) {
      product.count++;
    } else {
      product.count = 1;
      setSelectedProducts([...selectedProducts, product]);
    }
    // setSelectedProducts([...selectedProducts, product])
  };
  const removeToCart = (product) => {
    setSelectedProducts([
      ...selectedProducts.filter((el) => el.product_id !== product.product_id),
    ]);
  };
  console.log(selectedProducts);
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContextProvider>
          <Navbar
            selectedProducts={selectedProducts}
            isAuthenticated={isAuthenticated}
            logout={logout}
            loginWithRedirect={loginWithRedirect}
            user={user}
            selectedItems={selectedItems}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  data={data}
                  products={products}
                  setProducts={setProducts}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  addToCompare={addToCompare}
                  removeToCompare={removeToCompare}
                  selectedProducts={selectedProducts}
                  addToCart={addToCart}
                  removeToCart={removeToCart}
                  isAuthenticated={isAuthenticated}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                />
              }
            />
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
            <Route
              path="/compare"
              element={
                <Compare
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                />
              }
            />
            <Route
              path="/productdetail/:id"
              element={<ProductDetail data={data} />}
            />
          </Routes>
          <Footer isAuthenticated={isAuthenticated} />
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
