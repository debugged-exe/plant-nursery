import React from 'react';
import Showplants from '../../Components/Showplants/Showplants';
import {plants, fruitplants,decorativeplants,palmplants,flowerplants} from '../../Database/Plants';
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
            <div style={{paddingBottom: "5%"}}>
                <div className={'fruit-title'}>Fruit Plants</div>
                <div className="displaycards cf flex-wrap flex justify-center">
                    {
                        fruitplants.filter((items, idx) => idx >= 0 && idx <= 3)
                            .map((items, index) =>
                                <div key={index} className="flex flex-wrap items-center justify-around">
                                    <div className='plant-card'>
                                        <div>
                                            <img className={'plant-card-image'}
                                                 style={{height: "250px", width: "250px", objectFit: "cover"}}
                                                 src={`${items.imgUrl}`} alt='Taj Mahal'></img>
                                        </div>
                                        <div>
                                            <div className="plant-card-title">{items.name}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="flex justify-center">
                    <a href="https://google.com" target="_blank">
                        <button
                            className="plant-button plant-button-success"
                            src="www.google.com"
                        >
                            Show More
                        </button>
                    </a>
                </div>
            </div>
            <div style={{paddingBottom: "5%"}}>
                <div className={'fruit-title'}>Flower Plants</div>
                <div className="displaycards cf flex-wrap flex justify-center">
                    {
                        flowerplants.filter((items, idx) => idx >= 0 && idx <= 3)
                            .map((items, index) =>
                                <div key={index} className="flex flex-wrap items-center justify-around">
                                    <div className='plant-card'>
                                        <div>
                                            <img className={'plant-card-image'}
                                                 style={{height: "250px", width: "250px", objectFit: "cover"}}
                                                 src={`${items.imgUrl}`} alt='Taj Mahal'></img>
                                        </div>
                                        <div>
                                            <div className="plant-card-title">{items.name}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="flex justify-center">
                    <a href="https://google.com" target="_blank">
                        <button
                            className="plant-button plant-button-success"
                            src="www.google.com"
                        >
                            Show More
                        </button>
                    </a>
                </div>
            </div>
            <div style={{paddingBottom: "5%"}}>
                <div className={'fruit-title'}>Decorative Plants</div>
                <div className="displaycards cf flex-wrap flex justify-center">
                    {
                        decorativeplants.filter((items, idx) => idx >= 0 && idx <= 3)
                            .map((items, index) =>
                                <div key={index} className="flex flex-wrap items-center justify-around">
                                    <div className='plant-card'>
                                        <div>
                                            <img className={'plant-card-image'}
                                                 style={{height: "250px", width: "250px", objectFit: "cover"}}
                                                 src={`${items.imgUrl}`} alt='Taj Mahal'></img>
                                        </div>
                                        <div>
                                            <div className="plant-card-title">{items.name}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="flex justify-center">
                    <a href="https://google.com" target="_blank">
                        <button
                            className="plant-button plant-button-success"
                            src="www.google.com"
                        >
                            Show More
                        </button>
                    </a>
                </div>
            </div>
            <div style={{paddingBottom: "5%"}}>
                <div className={'fruit-title'}>Palm Plants</div>
                <div className="displaycards cf flex-wrap flex justify-center">
                    {
                        palmplants.filter((items, idx) => idx >= 0 && idx <= 3)
                            .map((items, index) =>
                                <div key={index} className="flex flex-wrap items-center justify-around">
                                    <div className='plant-card'>
                                        <div>
                                            <img className={'plant-card-image'}
                                                 style={{height: "250px", width: "250px", objectFit: "cover"}}
                                                 src={`${items.imgUrl}`} alt='Taj Mahal'></img>
                                        </div>
                                        <div>
                                            <div className="plant-card-title" >{items.name}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="flex justify-center">
                    <a href="https://google.com" target="_blank">
                        <button
                            className="plant-button plant-button-success"
                            src="www.google.com"
                        >
                            Show More
                        </button>
                    </a>
                </div>
            </div>
        </section>);
}

export default PlantPage;