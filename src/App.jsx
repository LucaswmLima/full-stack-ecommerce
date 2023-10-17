import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={ProductList} path="/products/:category" />
        <Route Component={ProductPage} path="/product/:id" />
        <Route Component={Cart} path="/cart" />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route Component={Register} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
