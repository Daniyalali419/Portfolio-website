import { Link } from "react-router-dom";
import"./PricingCards.css";
import React from 'react'

const PricingCards = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Portfolio -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 500</p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- E-commerce/Restaurants -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$ 1000</p>
                <p>- 15 Days -</p>
                <p>- As per Required Pages -</p>
                <p>- SaaS Product -</p>
                <p>- Unlimited Access -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards