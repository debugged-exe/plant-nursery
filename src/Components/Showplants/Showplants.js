import React from 'react';
import './Showplants.css';
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';


function Showplants({products}){
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
                products.filter((items,idx)=>idx<3)
                .map((items,index)=>
                     <CarouselItem key={index} name={items.name} desc={items.desc} imgUrl = {items.imgUrl}  />
                )
                }
            </Carousel>
            </div>
            <div className="displaycards cf flex-wrap">
            {
                products.filter((items,idx)=>idx>=3)
                .map((items,index)=>
                <div key={index} className="fl w-hundred w-50-m w-25-l ma2 tc pv4 fon">
                <div className='card ma3'>
                    <div className='imgBox'>
                        <img src={`${items.imgUrl}`} alt='Taj Mahal'></img>
                    </div>
                    <div className='content'>
                        <h2>{items.name}</h2>
                        <p>{items.desc}</p>
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
