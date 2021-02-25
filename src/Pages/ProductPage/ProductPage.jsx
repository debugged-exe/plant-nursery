import React from 'react';
import Showplants from '../../Components/Showplants/Showplants';
import pots from '../../Database/Pots';
import plants from '../../Database/Plants';
import seeds from '../../Database/Seeds';
import tools from '../../Database/Tools';
const ProductPage = ({product}) => {

    
        switch(product){
            case 'plants':
                return(
                    <Showplants products = {plants} />
                );
                
            case 'seeds':
                return(
                    <Showplants products = {seeds} />
                );

            case 'pots':
                return(
                    <Showplants products = {pots} />
                );
            case 'tools':
                return(
                    <Showplants products = {tools} />
                );
            default :
                return(
                    <h1>Loading....</h1>
                )
        }
}

export default ProductPage;