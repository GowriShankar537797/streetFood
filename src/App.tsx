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

const WithHeaderHome = withHeader(Home);

const App: React.FC = () => {
  return (
    <Router>
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
