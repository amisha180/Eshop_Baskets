import React from 'react';
import './Footer.css';
import appStore from '../../../images/applestore.jpg'
import playStore from '../../../images/google.jpg'

function Footer() {
  return (
    <div>
       <footer id="footer">
       <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
         <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> 
      </div>

      <div className="midFooter">
        <h1>Eshop Basket.</h1>
        <p>Best products in affordable prices is our first priority</p>

        <p>Copyrights 2022 &copy; EshopBasket.com</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/eshopBasket">Instagram</a>
        <a href="http://instagram.com/eshopBasket">Facebook</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer
