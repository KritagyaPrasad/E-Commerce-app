import React from 'react'
import Slider from '../../components/Slider/Slider.jsx';
import FeaturedProducts from '../../components/FeaturedProducts.jsx/FeaturedProducts.jsx';

function Home() {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home