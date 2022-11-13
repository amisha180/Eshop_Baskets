import React ,{Fragment,useEffect} from 'react';
import './Home.css';
import { CgMouse } from "react-icons/all";
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { getProduct,clearErrors } from '../../actions/productAction';
import {useSelector,useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';
import {useAlert} from "react-alert";
import search from '../../images/search.jpg';
import login from '../../images/login.jpg';
import cartimg from '../../images/cartimg.jpg'

function Home() {
    
   const alert = useAlert();
   const dispatch = useDispatch();
   const { loading, error, products } = useSelector((state) => state.products);
   const { isAuthenticated,user } = useSelector((state) => state.user);

   useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch , error, alert]);

  return (
     <Fragment>
        {loading ? (
         <Loader /> 
         
      ) : ( 
        <Fragment>
           <MetaData title="EShop Basket" /> 
           <a  href="/search"><img className ="searchit" src={search} alt="search"></img></a>
      {!isAuthenticated && 
<a  href="/login"><img className ="loginit" src={login} alt="login"></img></a>}
{/* {isAuthenticated && 
<a  href="/cart"><img className ="cart" src={cartimg} alt="login"></img></a>} */}
          <div className="banner">
            <p>Welcome to Eshop Basket</p>
            <h1>FIND BEST PRODUCTS HERE</h1>

            <a href="#container">
              <button>
                 Scroll  <CgMouse/>
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
         

            <div className="container" id="container">
            
            {products &&
              products.map((product) => (
                <ProductCard  product={product} />
               // <Product key={product._id} product={product} />
              ))}
            </div> 
        </Fragment>
      )}
   </Fragment>
   );
}

export default Home
