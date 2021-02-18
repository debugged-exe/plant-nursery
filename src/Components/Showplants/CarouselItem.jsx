import React from 'react';

const CarouselItem = ({imgUrl,desc,name}) => {
    return(
        <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1 className='ml2 b'>{name}</h1>
                            <p className="lh-copy ik ml2">
                               {desc}
                            </p>
                        </div>
                    </div>
                </div> 
    );
}

export default CarouselItem;