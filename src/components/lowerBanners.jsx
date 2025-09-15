import React from 'react'
import jubilee from '../assets/jubilee.png'
import './lowerBanners.css'
import { Link } from 'react-router-dom'

const Banners = () => {
return (
    <div className="lowerBanners-container">
   {/* lowerBanner*/}
   <section className="lowerBanner relative bottom-0 left-0 right-0"> {/*border-2 border-yellow-500*/}  
        <div className="lowerBanner-content">
        <nav className=" flex items-top text-left ml-4 space-x-8 p-4">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/news">News</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/interviews">Iterviews</Link></li>
              <li><Link to="/videos">Videos</Link></li>
            </ul>
            <ul className="flex flex-col space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/serviceAgreement">Service Agreement</Link></li>
              <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
              <li><Link to="/statementOfFaith">Statement of Faith</Link></li> 
              <li><Link to="/contact" >Contact Us</Link></li>
            </ul>
          </nav>
          <div className="absolute top-0 right-0 p-4">
              <img src={jubilee} alt="jubilee" className="logo h-8" />
          </div>        
          </div>
      </section>
    </div>
)
}

export default Banners
