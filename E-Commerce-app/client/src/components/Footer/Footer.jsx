import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet eos iusto id temporibus ipsum maiores incidunt dolorem magnam inventore dolores neque ipsam nostrum, quos dignissimos quod debitis repellat! Repellendus!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem vitae quisquam maiores natus et odio ipsam, vel aspernatur consequatur ducimus fugit, enim deserunt a suscipit? Debitis dolorum sit delectus!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Kapastore</span>
          <span className='copyright'>
            © Copyright 2022. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer