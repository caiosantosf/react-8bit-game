import React from 'react'
import './index.css'

const Hero = () => {
  return (
    <div 
      style = {{
        width: 48,
        height: 100,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s infinite'
      }}
    ></div>
  )
}

export default Hero