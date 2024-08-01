// import React, {useEffect,useState} from 'react'
// import axios from 'axios'
// import ProductCard from './ProductCard.jsx'
// import './Product.css'
// import Loader from '../Loader/Loader.jsx'

// function Product() {

//     const [products, setProducts] = useState()
// const [isLoading, setIsLoading] = useState(false)
//     useEffect(() =>{
// axios.get('https://fakestoreapi.com/products')
// .then((res)=> {
// setProducts(res.data)
// setIsLoading(false)
// }).catch((err)=>{
//     console.log(err)
//     setIsLoading(false)
// })

//     },[])
    

//         return (
//           <>
//           {
//             isLoading?(<Loader/>) : (   <section className='products_container'>
//               {
//               products.map((singleProduct)=>{
//                    return  <ProductCard product={singleProduct} key={singleProduct.id} />
//               })}
//           </section>)
//           }
       
//           </>

//   )
// }

// export default Product

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard.jsx';
// import './Product.css';

// function Product() {
//   const [products, setProducts] = useState([]); // Initialize products as an empty array
//   const [isLoading, setIsLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null); // Store any errors

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true); // Set loading state

//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError(err); // Store error for display
//       } finally {
//         setIsLoading(false); // Reset loading state regardless of success or failure
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array for one-time fetch

//   return (
//     <section className='products_container'>
//       {isLoading ? (
//         <p>Loading products...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))
//       )}
//     </section>
//   );
// }

// export default Product;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import './Product.css';
import Loader from '../Loader/Loader.jsx';

function Product() {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true); // Start with loading set to true

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data || []); // Ensure data is an array or set as an empty array
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className='products_container'>
          {products.length > 0 ? (
            products.map((singleProduct) => (
              <ProductCard   renderAdd={true} product={singleProduct} key={singleProduct.id} />
            ))
          ) : (
            <div>No products available</div>
          )}
        </section>
      )}
    </>
  );
}

export default Product;
