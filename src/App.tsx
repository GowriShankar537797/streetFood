import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ProductList,
  Checkout,
  Cart,
  OrderSuccess,
  ProductDetails,
} from "./pages";
import withHeader from "./Header";
import "./App.css";

const WithHeaderHome = withHeader(Home);

const App: React.FC = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<WithHeaderHome />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
