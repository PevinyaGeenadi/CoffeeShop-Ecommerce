import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import bannerfoods from "./assets/Brown Aesthetic Jewelry and Accessories Etsy Shop Cover (2).png";
import bannerdrinks from "./assets/Brown Aesthetic Jewelry and Accessories Etsy Shop Cover.png";
import bannerathomecoffee from "./assets/bannerathomecoffe.png";
import AdminLayout from "./admin/AdminLayout";
import AddProduct from "./admin/AddProduct";
import ListProduct from "./admin/ListProduct";
import Dashboard from "./admin/Dashboard";
import ListUsers from "./admin/ListUsers";
import HideNavAndFooter from "./admin/HideNavAndFooter";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import EditProduct from "./admin/EditProduct";


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
          <Route path="/Foods"  element={<Category category="foods" banner={bannerfoods}/>}/>
          <Route path="/At Home Coffee" element={<Category category="homecoffee" banner={bannerathomecoffee }/>}/>



          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart-page" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/main" element={<AdminLayout />} />

          <Route path="/addProduct" element={<AddProduct />} />
          <Route path={"/editProduct/:id"} element={<EditProduct />} />
          <Route path="/listProduct" element={<ListProduct />} />
          <Route path="/listUsers" element={<ListUsers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <HideNavAndFooter>
          <Footer />
        </HideNavAndFooter>
      </BrowserRouter>
    </main>
  );
}