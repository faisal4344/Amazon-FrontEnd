// function CategoryCard({data}) {
//     return ( <div>
//     <a href="">
//     <span>
//     I
//     <h2>{data.title} </h2>
//     </span>
//     <img src={data.imgLink} alt="" /> <p>shop now</p>
//     </a>
//     </div>
//     )
//     }
//     export default CategoryCard
    
// import React from 'react'
// import './category.css'
// import { Link } from 'react-router-dom';

// function CategoryCard({ data }) {
//     return (
//       <div className='category'>
//         <Link to ={'/category/${data.name}'}> {/* Assuming the href points to a relevant category page */}
//           <span> {/* Consider removing or replacing with meaningful content */}
//             <h2>{data?.title}</h2>
//           </span>
//           <img src={data?.imgLink} alt={data.title} /> {/* Add alt attribute */}
//           <p>shop now</p>
//         </Link>
//       </div>
//     );
//   }
  
//   export default CategoryCard;
  

// import React from 'react';
// import './category.css'; // Import stylesheet (optional)

// // Define the CategoryCard component
// function CategoryCard({ data }) {
//   // Destructure data props for better readability (optional)
//   const { title, imgLink } = data;

//   return (
//     <div className='category'>
//       <a href="#" className='category-link'> {/* Replace "#" with actual category page link */}
//         <h2>{title}</h2>
//         <img src={imgLink} alt={title} /> {/* Add alt attribute for accessibility */}
//       </a>
//       <p>Shop Now</p> {/* Capitalize "Shop Now" for consistency */}
//     </div>
//   );
// }

// export default CategoryCard;


import React from 'react';
import './category.css';
import { Link } from 'react-router-dom';

function CategoryCard({ data }) {
  return (
    <div className="category">
      <Link to={`/category/${data.name}`}> {/* Corrected string interpolation */}
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
