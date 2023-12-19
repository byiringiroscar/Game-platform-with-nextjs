import React from 'react'
import UpperNav from './navSection/UpperNav'
import LowerNav from './navSection/LowerNav'

const Navbar = () => {
  return (
    <div className='max-container padding-container'>
        <UpperNav />
        <LowerNav />
    </div>
  )
}

export default Navbar