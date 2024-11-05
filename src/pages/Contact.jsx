import React from 'react'
import { Link, Outlet, Route,Routes } from 'react-router-dom'
import ContactOne from './Contacts/Contact1'
import ContactTwo from './Contacts/Contact2'
import ContactThree from './Contacts/Contact3'

const Contact = () => {
  return (
    <div>
      <h1>Hello From Contact</h1>
      <nav className='nav-bar'>
        <ul>
          <li> <Link to="contact-1">Contact 1</Link> </li>
          <li> <Link to="contact-2">Contact 2</Link> </li>
          <li> <Link to="contact-3">Contact 3</Link> </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Contact