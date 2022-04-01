import React from 'react'
import image  from "../images/HD3.jpg"
import "./Header.css"
import Slider from './slider/Slider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages'
import Store from './pages/Store'
import Collection from './pages/Collection'
import Support from './pages/Support'

const Header = () => {
    return(
        // <div className='header'>
        //     {/* <Menu></Menu> */}
        //     <img className='img-right' src = {image} />
        //     {/* <Slider></Slider> */}
        // </div>
        <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/support' element={<Support />} />
        </Routes>
    </Router>
        </>
    )
}

export default Header;