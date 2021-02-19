import React from 'react';
import Showplants from '../../Components/Showplants/Showplants';
import pots from '../../Database/Pots';
import flowers from '../../Database/Flowers';
import seeds from '../../Database/Seeds';
import tools from '../../Database/Tools';
const ProductPage = ({product}) => {

    
        switch(product){
            case 'flowers':
                return(
                    <Showplants products = {flowers} />
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