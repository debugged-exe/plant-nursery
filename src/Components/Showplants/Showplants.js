import React from 'react';
import './Showplants.css';
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';


function Showplants({products}) {
    console.log(products);
    return (
        <section id={'OurProducts'} className="pb4 chan">
            <div style={{
                fontWeight: '700',
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '5%',
                paddingTop: '2%'
            }} data-aos={'slide-down'} data-aos-duration={'3000'}>

            </div>
            <div className="displaycarousel">
                <Carousel itemsToShow={1} data-aos={'fade-up'}>
                    {
                        products.filter((items, idx) => idx < 3)
                            .map((items, index) =>
                                <CarouselItem key={index} name={items.name} desc={items.desc} imgUrl={items.imgUrl}/>
                            )
                    }
                </Carousel>
            </div>
            <div className="displaycards cf flex-wrap flex justify-center">
                {
                    products.filter((items, idx) => idx >= 3)
                        .map((items, index) =>
                            <div key={index} className="flex flex-wrap items-center justify-around">
                                <div className='card'>
                                    <div>
                                        <img className={'card-image'} style={{height: "200px", width: "200px",objectFit: "cover"}}src={`${items.imgUrl}`} alt='Taj Mahal'></img>
                                    </div>
                                    <div>
                                        <div className="card-title">{items.name}</div>
                                        <div>{items.desc}</div>
                                    </div>
                                </div>
                            </div>
                        )
                }

            </div>
        </section>

    );
}

export default Showplants;
