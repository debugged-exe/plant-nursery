import React from 'react';
import Home from '../../Components/Home/Home';
import Ourproducts from "../../Components/OurProducts/Ourproducts";
import Gallery from '../../Components/Gallery/gallery';
import AboutUs from '../../Components/About/about';
import ContactUs from '../../Components/ContactForm/contact';
import Founders from '../../Components/Founders/Founders';

const HomePage = () => {
    return(
        <>
            <Home/>
            <Ourproducts/>
            <Gallery/>
            <span id='about'/>
            <AboutUs/>
            <ContactUs/>
            <Founders/>  
        </>
    );
}

export default HomePage;