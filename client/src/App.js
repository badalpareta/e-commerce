import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';
import About from './Pages/About';
import Brands from './Pages/Brands';
import {SingleBrand} from './Pages/Brands';
import Contact from './Pages/Contact';
import Bag from './Pages/Bag'
import Wishlist from './Pages/Wishlist'
import DefaultLayout from './Default';
import SignUp from './Pages/signup'
import {SingleProduct} from './Pages/Products'

function App() {
  return (
    <><BrowserRouter>
     <DefaultLayout>
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/products" exact element={<Products />} />
    <Route path="/products/:_id" element={<SingleProduct/>}/>
    <Route path="/about" exact element={<About />} />
    <Route path="/brands" exact element={<Brands />} />
    <Route path="/brands/:brand" exact element={<SingleBrand/>}/>
    <Route path="/contact" exact element={<Contact />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/bag" exact element={<Bag/>}/>
    <Route path="/wishlist" exact element={<Wishlist/>}/>
    <Route path="/signup" exact element={<SignUp/>}/>
    </Routes>
    </DefaultLayout>
    </BrowserRouter></>
  );
}

export default App;
