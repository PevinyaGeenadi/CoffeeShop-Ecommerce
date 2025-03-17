import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import bannerdrinks from "./assets/bannerdrinks.png";
import bannerfoods from "./assets/bannerfoods.png";
import bannerathomecoffee from "./assets/bannerathomecoffe.png";
import AdminLayout from "./admin/AdminLayout";
import HideNavAndFooter from "./admin/HideNavAndFooter";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
      <HideNavAndFooter>
          <Header />
        </HideNavAndFooter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Drinks" element={<Category category="drinks" banner={bannerdrinks}/>}/>
          <Route path="/Foods"  element={<Category category="Food" banner={bannerfoods}/>}/>
          <Route path="/At Home Coffee" element={<Category category="Food" banner={bannerathomecoffee }/>}/>



          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart-page" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/main" element={<AdminLayout />} />
        </Routes>
        <HideNavAndFooter>
          <Footer />
        </HideNavAndFooter>
      </BrowserRouter>
    </main>
  );
}