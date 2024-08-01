// import React, { useEffect, useState } from 'react'
// import './Results.css'
// import LayOut from '../../Components/LayOut/LayOut'
// import { useParams } from 'react-router-dom'
//  import axios from 'axios'
//  import { productUrl } from '../../Api/endPoints'
//  import ProductCard from '../../Components/Product/ProductCard'


//  import React, { useEffect, useState } from 'react';
// import './Results.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Api/endPoints';
// import ProductCard from '../../Components/Product/ProductCard';
// import Loader from '../../Components/Loader/Loader';

// function Results   () {
//  const [results,setResults] = useState([]);
//   const {categoryName} =useParams() 
//   const [isLoading, setIsLoading] = useState(false)
//   useEffect(() => {
//     axios.get('${productUrl}/products/category/${categoryName}')
//     .then((res) => {
//         setResults(res.data)
    
//         console.log(res.data)
//         setIsLoading(false)

//     }).catch((err)=>{
//         console.log(err)
//         setIsLoadinh(false);
//     });

//     },[]);
  

// return (
//   <LayOut>
//     <section>
//       <h1 style={{ padding: '30px' }}>Results</h1>
//       <p style={{ padding: '30px' }}>Category / {categoryName}</p>
//       <hr />
//       {isLoading?(<Loader/>) : (  <div className="products_container">
//         {
//           results?.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//             </div>
    
//           )}
//           </section>
//           </LayOut>
//         );
//       };
   
// export default Results;

// import React, { useEffect, useState } from 'react';
// import './Results.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Api/endPoints';
// import ProductCard from '../../Components/Product/ProductCard';

// function Results() {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();

//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`) // Corrected string interpolation
//       .then((res) => {
//         setResults(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [categoryName]); // Add categoryName to dependency array

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: '30px' }}>Results</h1>
//         <p style={{ padding: '30px' }}>Category / {categoryName}</p>
//         <hr />
//         <div className="products_container">
//           {results.map((product) => (
//             <ProductCard key={product.id} product={product} /> // Ensure unique key
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;


// import React, { useEffect, useState } from 'react';
// import './Results.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Api/endPoints';
// import ProductCard from '../../Components/Product/ProductCard';
// import Loader from '../../Components/Loader/Loader';

// function Results() {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();

//   useEffect(() => {


//     axios.get(`${productUrl}/products/category/${categoryName}`)
//   .then((res) => {
//     setResults(res.data);
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//     // axios
//     //   .get(`${productUrl}/products/category/${categoryName}`)
//     //   .then((res) => {
//     //     setResults(res.data);
//     //     console.log(res.data);
//     //   })
//     //   .catch((err) => {
//     //     console.error(err);
//     //   });
//   }, [categoryName]);

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: '30px' }}>Results</h1>
//         <p style={{ padding: '30px' }}>Category / {categoryName}</p>
//         <hr />
//         {isLoading?(<Loader/>) : (  <div className="products_container">
//           {
//             results?.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//               </div>
      
//             )}
//             </section>
//             </LayOut>
//           );
//         };
     
// export default Results;




import React, { useEffect, useState } from 'react';
import './Results.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true); // Initialize to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${productUrl}/products/category/${categoryName}`);
        // Ensure response data is an array
        setResults(Array.isArray(res.data) ? res.data : []);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="products_container">
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard key={product.id} product={product} 
               renderAdd={true}/>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
