import React from "react";
import Navbar from '../Navbar/navbar';
import Home from '../Home/Home';
import Ourproducts from "../OurProducts/Ourproducts";
import Gallery from '../Gallery/gallery';
import AboutUs from '../About/about';
import ContactUs from '../ContactForm/contact';
import Founders from '../Founders/Founders';
import Footer from '../Footer/Footer';
import ShowPlants from '../Showplants/Showplants';
function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Ourproducts/>
            <Gallery/>
            <AboutUs/>
            <ContactUs/>
            <Founders/>
            <Footer/>
            {/*<ShowPlants/>*/}
        </div>
    );
}

export default App;
