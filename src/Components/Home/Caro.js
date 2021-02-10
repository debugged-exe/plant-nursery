import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Caro.css';
import imageurl1 from './plant1.png';
import imageurl2 from './plant2.png';
import imageurl3 from './plant3.png';
import imageurl4 from './plant4.png';

function Caro(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={imageurl1} class="d-block w-100 im" alt="caro image 1" />
                </div>
                <div class="carousel-item">
                    <img src={imageurl2} class="d-block w-100 im" alt="caro image 2" />
                </div>
                <div class="carousel-item">
                    <img src={imageurl3} class="d-block w-100 im" alt="caro image 3" />
                </div>
                <div class="carousel-item">
                    <img src={imageurl4} class="d-block w-100 im" alt="caro image 4" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    );
}

export default Caro;