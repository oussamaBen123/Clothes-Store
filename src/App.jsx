import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./LoginForm";
import SignUp from "./SignUp";
import Global from "./home/GlobalHome";
import CollectionProduct from "./collection/CollectionProduct";
import Footer from "./Footer";
import Basket from "./Basket";
import PlaceOrder from "./PlaceOrder";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProductPage from "./ProductDetails/ProductDetails";
import NotFound from "./Error404";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Global/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/collection" element={<CollectionProduct/>}/>
        <Route path="/cart" element={<Basket/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/productDetails/:ProductId" element={<ProductPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
    <Footer/>
  <ToastContainer />

    </>
  );
}

export default App;
