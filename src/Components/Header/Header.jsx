// import React, { useContext } from 'react'
// import './Header.css';
// import { Link } from 'react-router-dom';
// import { SlLocationPin } from 'react-icons/sl';
// import { BsSearch } from 'react-icons/bs';
// import LowerHeader from './LowerHeader.jsx';
// import { BiCart } from 'react-icons/bi';
// import { DataContext } from '../DataProvider/DataProvider.jsx';

// function Header() {

//     const [{basket},dispatch]=useContext(DataContext)
//     const totalItem = basket?.reduce((amount,item)=>{
//         return item.amount + amount
//     },0)
//     return (
//         <section  className='fixed'>
//         <section>
//         <div className='header_container' >
//             <div className='logo_container'> 
//                 {/* logo */}
//                 <div>
//                 <Link to="/">
//                     <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
//                 </Link>
//                 <div className='delivery'>
//                 <span>
//                     <SlLocationPin />
//                     </span>
//                 {/* delivery */}
           
                   
//                     <div>
//                         <p>Delivered to</p>
//                         <span>Ethiopia</span>
//                     </div>
//                 </div>
//                 </div>
//                 {/* search */}
//                 <div className="search-container">  {/* Added parent container */}
//       <div className="search">
//         <label htmlFor="search-select">Search By:</label>
//         <select name="search" id="search-select">
//           <option value="">All</option>
//           {/* Add more options as needed */}
//         </select>
//         <input type="text" placeholder="Search..." />
//         <BsSearch size={50} />
//       </div>
//     </div>

//                 {/* other sections */}
//                 <div className='order_container'>
//                     <Link to= "" className='language' >
//                     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" 
//                     alt="" />
//                     <select name="language" id="">
//                         <option value="EN">EN</option>
//                     </select>
//                     </Link>
               
//                     <Link to= "/signUp">
//                         <p>Sign In</p>
//                         <span>Account & Lists</span>
//                     </Link>
//                     <Link to= "/orders">
//                         <p>returns</p>
//                         <span>& Orders</span>
//                     </Link>
//                     <Link to= "/cart" className='cart'>
//                         <BiCart size={35} />
//                         <span>{totalItem}</span>
//                     </Link>
//                 </div>
//             </div>
//             </div>
//         </section>
//         <LowerHeader/>
//         </section>
//     );
// };

// export default Header;
import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { SlLocationPin } from 'react-icons/sl';
import { BsSearch } from 'react-icons/bs';
import LowerHeader from './LowerHeader.jsx';
import { BiCart } from 'react-icons/bi';
import { DataContext } from '../DataProvider/DataProvider.jsx';
import {auth} from "../../Utility/firebase.js"
function Header() {
  const [{ user,basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className='fixed'>
      <section>
        <div className='header_container'>
          <div className='logo_container'>
            {/* logo */}
            <div>
              <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
              </Link>
              <div className='delivery'>
                <span>
                  <SlLocationPin />
                </span>
                {/* delivery */}
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            {/* search */}
            <div className="search-container"> {/* Added parent container */}
              <div className="search">
                <label htmlFor="search-select">Search By:</label>
                <select name="search" id="search-select">
                  <option value="">All</option>
                  {/* Add more options as needed */}
                </select>
                <input type="text" placeholder="Search..." />
                <BsSearch size={50} />
              </div>
            </div>
            {/* other sections */}
            <div className='order_container'>
              <Link to="" className='language'>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />
                <select name="language" id="">
                  <option value="EN">EN</option>
                </select>
              </Link>
              <Link to={!user && "/auth"}> {/* Corrected link path */}
              <div>
                {
                  user ?(
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={()=>auth.signOut()}>Sign Out</span>
                    </>
                  
                  ) : (
                    <> 
                     <p>Hello,sign In</p>
                     <span>Account & Lists</span>
                    </>
                  
                  )
                }
             
              </div>
          
               
              </Link>
              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className='cart'>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
