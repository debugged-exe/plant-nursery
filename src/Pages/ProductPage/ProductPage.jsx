import React from 'react';
import Showplants from '../../Components/Showplants/Showplants';

import flowers from '../../Database/Flowers';
import seeds from '../../Database/Seeds';

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

            default :
                return(
                    <h1>Loading....</h1>
                )
        }
    
    
}

export default ProductPage;