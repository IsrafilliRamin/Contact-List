import React from 'react'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import './fayl.scss'

const Header = () => {
  return (
    <div className='HeaderDiv'>
      <NavLink to='/contacts/new/'>
      <Button className='btnHeader' type="primary">Create a new connection </Button>
      </NavLink>
      
      </div>
  )
}

export default Header