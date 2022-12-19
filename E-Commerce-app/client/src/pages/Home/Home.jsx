import React from 'react'
import Slider from '../../components/Slider/Slider.jsx';
import FeaturedProducts from '../../components/FeaturedProducts.jsx/FeaturedProducts.jsx';
import Categories from '../../components/Categories/Categories.jsx';

function Home() {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home