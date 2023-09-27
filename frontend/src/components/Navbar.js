import React, { useState } from 'react';
import CloudSun from '../images/cloud-sun.svg'
import './Navbar.css'

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  return (
    <nav className='nav-main' >
    <div className='nav-icons'>
        <img src={CloudSun} alt="" />
      </div>
      
      <div className='nav-head'>
      <a href="/">WeatherMe</a>
      </div>
      <div className='nav-pages'>
        <a href="/today" className={selectedItem === 'today' && 'active'} onClick={() => handleItemClick('today')}>Today</a>
        <a href="/tomarrow" className={selectedItem === 'tommarow' && 'active'} onClick={() => handleItemClick('tommarow')}>Tomarrow</a>
        <a href="/monthlyforecast" className={selectedItem === 'monthlyforecast' && 'active'} onClick={() => handleItemClick('monthlyforecast')}>Monthly Forecast</a>

      </div>
    </nav>
  )
}

export default Navbar