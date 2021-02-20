import React from 'react';
import imgurl1 from './plant1.png';
import imgurl2 from './plant2.png';
import imgurl3 from './plant3.png';
import imgurl4 from './plant4.png';
import './Ourproducts.css';
import Carousel from 'react-elastic-carousel';

const products = [
    {
        name: "Cherry Tomato Seeds",
        desc: "Cherry tomatoes are small round tomatoes that grow on a stem similar to how grapes do andare a great addition to salads, pastas, or salsa for a mouthful of flavour. Rich in antioxidants and numerous nutrients they are a growers joy. Extremely easy to grow, and apart from tasting great they also add a nice colour to your garden!",
        imgUrl: imgurl1
    },
    {
      name: "Crassula Green Mini Plant",
      desc: "Are you a sucker for succulents? The Crassula Green Mini will be your dream plant kid. One of the easiest houseplants to look after, the Crassula Green Mini boasts a lush foliage which beautifies any room. Also considered lucky as per Feng Shui for its coin like round plump leaves, so go on, bring some green home, the luck just tags along for free.",
        imgUrl: imgurl2
    },
    {
      name: "Football Ceramic Pot (5.3 Inch Diameter)",
      desc:"Etch your home decor with the Football Planter and leave your guests pondering over your distinct taste and flair for unique objects. With this planter, you can now enhance your charming and aromatic flowers and foliage.",
        imgUrl: imgurl3
    },
    {
      name: "Pyramid Plastic Impulse Sprinkler",
      desc:"The pulsating sprinkler head adjusts conveniently from partial to full circle. It provides full uniform coverage up to 60 feet in diameter and is effective for long-distance sprinkling.",
        imgUrl: imgurl4
    }
];

function Ourproducts() {
    return (
        <section id={'OurProducts'} className="pb4">

            <div style={{
                fontWeight: '700',
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '5%',
                paddingTop: '2%'
            }} data-aos={'slide-down'} data-aos-duration={'3000'}>
                Top Selling Products
            </div>
            <Carousel itemsToShow={1} data-aos={'fade-up'}>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[0].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[0].name}</b></h1>
                            <p className="lh-copy ik">
                                {products[0].desc}

                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[1].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[1].name}</b></h1>
                            <p className="lh-copy ik">
                              {products[1].desc}

                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[2].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[2].name}</b></h1>
                            <p className="lh-copy ik">
                              {products[2].desc}

                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[3].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[3].name}</b></h1>
                            <p className="lh-copy ik">
                              {products[3].desc}

                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default Ourproducts;
