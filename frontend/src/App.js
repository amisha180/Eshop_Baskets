import { useEffect,useState } from 'react';
import './App.css';
import Header from './component/layout/Header/Header.js'
import Footer from './component/layout/Footer/Footer.js'
import {BrowserRouter,Routes, Route ,Link} from "react-router-dom";
import WebFont from "webfontloader";
import Home from './component/Home/Home.js';
import ProductDetails  from './component/Product/ProductDetails.js'
import Products from './component/Product/Products.js'
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp.js';
import store from './store.js';
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js"
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import Cart from './component/Cart/Cart.js'
import Shipping from './component/Cart/Shipping.js';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import axios from "axios";
import Payment from './component/Cart/Payment.js';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders.js';
import About from "./component/layout/About/About.js"
import Contact from './component/layout/Contact/Contact';


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(()=>{
    WebFont.load({
      google: {
        families : ["Roboto","Droid Sans","Chilanka"]
      }
    })
    store.dispatch(loadUser());
    getStripeApiKey();
  },[])
  return (<>
  <BrowserRouter>
     <Header/>
     {isAuthenticated && <UserOptions user={user} />}
    <Routes>

<Route exact path="/"  element={<Home/> } />
<Route exact path="/about"  element={<About/> } />
<Route exact path="/contact"  element={<Contact/> } />
<Route exact path="/product/:id"  element={<ProductDetails/> } />
<Route exact path="/products"  element={<Products/> } />
<Route exact path="/login"  element={<LoginSignUp/> } />
<Route  path="/products/:keyword"  element={<Products/> } />

{isAuthenticated && <Route exact path="/account"  element={<Profile/> } />}
{isAuthenticated && <Route exact path="/me/update"  element={<UpdateProfile/> } />}
{isAuthenticated && <Route exact path="/password/update"  element={<UpdatePassword/> } />}
<Route exact path="/password/forgot"  element={<ForgotPassword/> } />
<Route exact path="/search"  element={<Search/> } />
<Route exact path="/cart"  element={<Cart/> } />
<Route exact path="/order/confirm"  element={<ConfirmOrder/> } />


{isAuthenticated && <Route exact path="/login/shipping"  element={<Shipping/> } />}

 
 <Route exact path="/process/payment"  element={<Elements stripe={loadStripe(stripeApiKey)}><Payment/> </Elements>} />
 <Route exact path="/success"  element={<OrderSuccess/> } />
  <Route exact path="/orders"  element={<MyOrders/> } /> 


    </Routes>

     <Footer/>
     </BrowserRouter>

</>
    
  )
}

export default App;
