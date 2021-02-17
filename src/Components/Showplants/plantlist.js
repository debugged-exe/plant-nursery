import React from "react";
import imgurl1 from './plant1.png';
import imgurl2 from './plant2.png';
import imgurl3 from  './plant3.png';

const plantlist = () =>{
    const Categories=[
        {
            heading:'Money Plant',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:imgurl1
        },
        {
            heading:'Hanging Plant',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:imgurl2
        },
        {
            heading:'Montera',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:imgurl3
        }
    ]
    
const categorieslist = Categories.map((ctg,index) =>(<Category key = {index} ctg={ctg}/>))
    return(
    <div data-aos='fade-right' className='flex flex-wrap justify-around items-around mv5'>
        {categorieslist}
    </div>);
}

export default plantlist;