import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Single from '../pages/Single'
import ContactOne from '../pages/Contacts/Contact1'
import ContactTwo from '../pages/Contacts/Contact2'
import ContactThree from '../pages/Contacts/Contact3'
const MyRoutes = () => {

  return (
    <>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>} >
              <Route path='contact-1' element={<ContactOne/>} />
              <Route path='contact-2' element={<ContactTwo/>} />
              <Route path='contact-3' element={<ContactThree/>} />
            </Route>
            <Route path='/:id' element={<Single/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default MyRoutes