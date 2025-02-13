// import React from 'react';
// import { Carousel } from 'react-responsive-carousel'; 
// import {img} from './img/data'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './carousel.css';

// function CarouselEffect() {
//   return (
//     <div>
 
//       <Carousel
//       autoPlay={true}
//       infiniteLoop={true}
//       showIndicators={false}
//       showThumbs={false}>

//         {
//             img.map((imageItemLink)=>{
//                 return <img src={imageItemLink}/>
//             })
//         }
//         </Carousel>
//         <div  className= 'hero_img'>
           
//         </div>
//       </div>)}

//       export default CarouselEffect


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`Carousel item ${index + 1}`} />
        ))}
      </Carousel>
      <div className="hero_img"></div>
    </div>
  );
}

export default CarouselEffect;
