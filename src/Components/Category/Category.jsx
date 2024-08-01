// // import React from 'react'
// // import {categoryInfos} from './catagoryFullInfos' 
// // import CategoryCard from './CategoryCard' 
// // function Category() {
// // return (
// //      <section>
// // {
// // categoryInfos.map((infos)=>{ 
// // <CategoryCard data = {infos} />
// // })
// // }
// // </section>
// // )
// // }
// // export default Category

// import React from 'react';
// import { categoryInfos } from './catagoryFullInfos'; // Assuming correct path
// import CategoryCard from './CategoryCard';
// import './category.css'

// function Category() {
//   return (
//     <section className='category_container'>
//       {categoryInfos.map((infos) => (
//         <CategoryCard data={infos} key={infos.id} /> // Add a unique key
//       ))}
//     </section>
//   );
// }

// export default Category;


// Import necessary libraries
// import React from 'react';
// import { categoryInfos } from './catagoryFullInfos'; // Assuming correct path
// import CategoryCard from './CategoryCard';
// import './category.css'; // Import stylesheet (optional)

// // Define the Category component
// function Category() {
//   // Render the component's content
//   return (
//     // <section className='category_container'>
//     //   {categoryInfos.length > 0 ? ( 
//     //     categoryInfos.map((infos) => (
//     //       <CategoryCard key={infos.id} data={infos} />
//     //     ))
//     //   ) : (
//     //     <p>No categories available.</p>
//     //   )}
//     // </section>
//     <section className='category_container'>
//     {categoryInfos.length > 0 ? ( // Handle empty categoryInfos
//       categoryInfos.map((infos) => (
//         <CategoryCard key={infos.id} data={infos} />
//       ))
//     ) : (
//       <p>No categories available.</p>
//     )}
//   </section>
//   );
// }

// // Export the component
// export default Category;


import React from 'react';
import { categoryInfos } from './catagoryFullInfos';
import CategoryCard from './CategoryCard';
import './category.css';

function Category() {
  return (
    <section className="category_container">
      {categoryInfos.length > 0 ? (
        categoryInfos.map((infos) => (
          <CategoryCard key={infos.id} data={infos} />
        ))
      ) : (

      

        <p>No categories available.</p>
      )}
    </section>
  );
}

export default Category;

