import React from 'react';
import Showplants from '../../Components/Showplants/Showplants';
import {plants} from '../../Database/Plants';
import Carousel from "react-elastic-carousel";
import CarouselItem from "../../Components/Showplants/CarouselItem";
import './PlantPage.css';
const PlantPage = ({}) => {
    return (
        <section id={'plant-section'}>
            <div className="displaycarousel" style={{paddingTop: "5%", paddingBottom: "5%"}}>
                <Carousel itemsToShow={1} data-aos={'fade-up'}>
                    {
                        plants.filter((items, idx) => idx < 3)
                            .map((items, index) =>
                                <CarouselItem key={index} name={items.name} desc={items.desc} imgUrl={items.imgUrl}/>
                            )
                    }
                </Carousel>
            </div>
        </section>);
}

export default PlantPage;