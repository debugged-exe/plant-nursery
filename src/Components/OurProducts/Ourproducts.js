import React from 'react';
import './Ourproducts.css';
import Carousel from 'react-elastic-carousel';
import RoseImg from './RoseImg.jpeg';
import MangoImg from './MangoImg.jpeg';
import AnarImg from './Anarimg.jpeg';
import FigImg from './FigImg.jpeg';

function Ourproducts() {
    const TopProducts = [
        {
            name: "Rose",
            desc: "The rose is a type of flowering shrub. Its name comes from the Latin word Rosa.The flowers of the rose grow in many different colors, from the well-known red rose or yellow roses and sometimes white or purple roses. Roses belong to the family of plants called Rosaceae. All roses were originally wild and they come from several parts of the world, North America, Europe, northwest Africa and many parts of Asia and Oceania.",
            imgUrl: RoseImg
        },
        {
            name: "Mango",
            desc: "A mango is a stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes. Mangoes are native to South Asia, from where the \"common mango\" or \"Indian mango\", Mangifera indica, has been distributed worldwide to become one of the most widely cultivated fruits in the tropics.",
            imgUrl: MangoImg
        },
        {
            name: "Anar",
            desc: "The fruit is the size of a large orange, obscurely six-sided, with a smooth leathery skin that ranges from brownish yellow to red; within, it is divided into several chambers containing many thin transparent arils of reddish, juicy pulp, each surrounding an angular elongated seed.",
            imgUrl: AnarImg
        },
        {
            name: "Fig",
            desc: "Figs are, therefore, soft fruits, with a thin skin whose colour varies from green to purple, while the flesh is red or white. Depending on the species, it is round or flattened, although its shape is usually wider than high. The fig tree, like other fruit trees from dry areas, is scarcely known in agronomy.",
            imgUrl: FigImg
        }
    ];
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
                            <img src={TopProducts[0].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{TopProducts[0].name}</b></h1>
                            <p className="lh-copy ik">
                                {TopProducts[0].desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={TopProducts[1].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{TopProducts[1].name}</b></h1>
                            <p className="lh-copy ik">
                                {TopProducts[1].desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={TopProducts[2].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{TopProducts[2].name}</b></h1>
                            <p className="lh-copy ik">
                                {TopProducts[2].desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={TopProducts[3].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{TopProducts[3].name}</b></h1>
                            <p className="lh-copy ik">
                                {TopProducts[3].desc}
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default Ourproducts;
