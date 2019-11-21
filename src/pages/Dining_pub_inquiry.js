import React from 'react'
import { Link } from 'react-router-dom'
import Navigation_Navber from '../components/Navigation_Navber/Navigation_Navber'
import Dining_bar_list from "../components/Dining_bar/Dining_bar_list";
import Footer from '../components/Navigation_Navber/Footer'

const Dining_pub_inquiry = () => {
    return (
        <>
           <Navigation_Navber/>
           <Dining_bar_list />
            <Footer/>
        </>
    )
}


export default Dining_pub_inquiry