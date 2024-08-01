// import React from 'react'
// import { Rating } from '@mui/material'; 

// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat.jsx'
// import './Product.css'

// function ProductCard({product}) {
//   const {image, title, id, rating, price}=product;
//   return (
//     <div className='card_container'>
//         <a href="">
//             <img src={image} alt="" />
//         </a> 
//         <div> 
//             <h3>{title}</h3>
//             <div className='rating'>
//                {/* rating
               
//                price  */}
//                <Rating value={rating.rate} precision={0.1}/>
// <small>{rating.count}</small>
//             </div>
//             <div>
//                 {/* pr ice */}
//                 <CurrencyFormat amount={price}/>
//             </div>

//             <button className='button'>

//             </button>
//         </div>


//     </div>
//   )
// }

// export default ProductCard;

// import React from 'react';
// import { Rating } from '@mui/material'; // Import Rating component from Material UI

// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat.jsx'; // Import CurrencyFormat component
// import './Product.css'; // Import stylesheet for ProductCard

// function ProductCard({ product }) {
//   const { image, title, id, rating, price } = product; // Destructure product object

//   return (
//     <div className='card_container'>
//       <a href="">
//         <img src={image} alt="" />
//       </a>
//       <div>
//         <h3>{title}</h3>
//         <div className='rating'>
//           <Rating value={rating.rate} precision={0.1} /> {/* Rating component */}
//           <small>{rating.count}</small> (number of ratings)
//         </div>
//         <div>
//           <CurrencyFormat amount={price} /> {/* Currency formatting for price */}
//         </div>
//         <button className='button'>
//           {/* Button content can be added here */}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// import React from 'react';
// import { Rating } from '@mui/material';
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat.jsx';
// import './Product.css';
// import Link from 'react-router-dom'

// function ProductCard({ product,flex ,renderDesc }) {
//   const { image, title, id, rating, price, description } = product;


//   return (
//     <div className={`card_container ${flex ? 'product_flexed' : ''}`}> 
//       <Link to={'/products/${id}'}>
//         <img src={image} alt={title} /> {/* Ensure alt text is descriptive */}
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

//         <div className="rating">
//           <Rating value={rating.rate} precision={0.1} readOnly />
//           <small>{rating.count}</small> (number of ratings)
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className="button">
//           {/* Button content */}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// import React from 'react';
// import { Rating } from '@mui/material';
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat.jsx';
// import './Product.css';
// import { Link } from 'react-router-dom'; // Correct import

// function ProductCard({ product, flex, renderDesc }) {
//   const { image, title, id, rating, price, description } = product;

//   return (
//     <div className={`card_container ${flex ? 'product_flexed' : ''}`}>
//       <Link to={`/products/${id}`}> {/* Fixed template literal */}
//         <img src={image} alt={title} /> {/* Ensure alt text is descriptive */}
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

//         <div className="rating">
//           <Rating value={rating.rate} precision={0.1} readOnly />
//           <small>{rating.count}</small> (number of ratings)
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className="button">
//           {/* Button content */}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

// import React from 'react';
// import { Rating } from '@mui/material';
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat.jsx';
// import './Product.css';
// import { Link } from 'react-router-dom'; // Correct import
// import { DataContext } from '../DataProvider/DataProvider.jsx';

// function ProductCard({ product, flex, renderDesc }) {
//   const { image, title, id, rating = {}, price, description } = product; // Default empty object for rating
//  // Destructure rating with default values to avoid errors
//  const { rate = 0, count = 0 } = rating;

//   const [state,dispatch]=useContext(DataContext)

 

//   return (
//     <div className={`card_container ${flex ? 'product_flexed' : ''}`}>
//       <Link to={`/products/${id}`}> {/* Fixed template literal */}
//         <img src={image} alt={title} /> {/* Ensure alt text is descriptive */}
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

//         <div className="rating">
//           <Rating value={rate} precision={0.1} readOnly />
//           <small>{count}</small> (number of ratings)
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className="button">
//           {/* Button content */}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


﻿

// import React, { useContext } from 'react'
// import Rating from '@mui/material/Rating'
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
// import './Product.css';
// import {Link} from 'react-router-dom'
// import { DataContext } from '../DataProvider/DataProvider'
//  import {Type} from '../../Utility/action.type'

// function ProductCard({product, flex, renderDesc})
// const { image, title, id, rating, price,description} = product;

// const [state, dispatch]=useContext(DataContext)

// const addToCart = ()=>{dispatch({

// type:Type.ADD_TO_BASKET,
// item: {
//   image, title, id, rating, price, description
// }


// })
// }

// ﻿

// return (
// <div className={`card_container ${flex ? 'product_flexed' : ''}`}>
// <Link to={`/products/${id}`}>
// <img src={image} alt="" className="img_container" />
// </Link>

// <div>
// <h3>{title}</h3>
// {renderDesc && <div style={{maxWidth: "750px"}}>{description}</div>} 

// <div className="rating">
// {/* rating */}
// <Rating value={rating?.rate} precision={0.1}/>
// {/*count */}
// <small>{rating?.count}</small>
// </div>
// <div>
// {/* price */}
// <CurrencyFormat amount={price}/>
// </div>
// <button className="button" IonClick = addToCart >
// add to cart
// </button>
// </div>
// </div>
// )
// }
// export default ProductCard


// import React, { useContext } from 'react';
// import Rating from '@mui/material/Rating';
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// import './Product.css';
// import { Link } from 'react-router-dom';
// import { DataContext } from '../DataProvider/DataProvider';
// // import { Type } from '../../Utility/action.type';
// import { Type } from '../../Utility/action.type'; 

// function ProductCard({ product, flex, renderDesc }) {
//   const { image, title, id, rating, price, description } = product;
//   const [state, dispatch] = useContext(DataContext);

//   const addToCart = () => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: {
//         image,
//         title,
//         id,
//         rating,
//         price,
//         description,
//       },
//     });
//   };

//   return (
//     <div className={`card_container ${flex ? 'product_flexed' : ''}`}>
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} className="img_container" />
//       </Link>

//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{ maxWidth: '750px' }}>{description}</div>}

//         <div className="rating">
//           <Rating value={rating?.rate} precision={0.1} readOnly />
//           <small>{rating?.count}</small>
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className="button" onClick={addToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// ProductCard.jsx
import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './Product.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type'; // Ensure this path is correct

function ProductCard({ product, flex, renderDesc,renderAdd }) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div className={`card_container ${flex ? 'product_flexed' : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="img_container" />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: '750px' }}>{description}</div>}

        <div className="rating">
          <Rating value={rating?.rate} precision={0.1} readOnly />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd &&    <button className="button" onClick={addToCart}>
          Add to cart
        </button>
        
        
        }

       
      </div>
    </div>
  );
}

export default ProductCard;

