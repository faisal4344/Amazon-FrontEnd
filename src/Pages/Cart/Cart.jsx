// import React from 'react'
// import LayOut from '../../Components/LayOut/LayOut'

// function Cart  () {
//   return (
//     <LayOut>

// <div>Cart</div>

//     </LayOut>
 
//   )
// }

// export default Cart


﻿

// import React, { useContext } from 'react'
// // import Layout from '../../Components/Layout/LayOut'
// import Layout from '../../Components/LayOut/LayOut';
// import { DataContext } from '../../Components/DataProvider/DataProvider';
//  import ProductCard from '../../Components/Product/ProductCard'
// import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
// import {Link} from 'react-router-dom'
// import './Cart.css'
// import { Type } from '../../Utility/action.type';
// function Cart() {
// const [{ basket, user }, dispatch] = useContext(DataContext);
// const total = basket.reduce((amount,item)=>{
//   return item.price * item.amount + amount
// },0)
// const increment =(item)=>{

//   dispatch({
//     type:Type.ADD_TO_BASKET,
//     item
//   })
// }
// const decrement =(id)=>{

//   dispatch({
//     type:Type.REMOVE_FROM_BASKET,
//     id
//   })
// }
// return (
// <Layout>
// <section className="container">
// <div className="cart_container">
// <h2>Hello</h2>
// <h3>Your shopping basket </h3>
// <hr />
// {
// basket?.length==0? (<p>Opps ! No item in your cart</p>):(
// basket?.map((item,i)=>{
// return     <section>
//   <ProductCard
// key={i}
// product={item}
// renderDesc={true}
// renderAdd={false}
// flex={true}
//  />

//     <div>
//       <button onClick={()increment(item)}>+</button>
//        <button onClick={()decrement(item.id)}>-</button>

//     </div>
// </section>
// })
// )

// }



// </div>
// {basket?.length !==0&&(
//   <div className="subtotal">
// <div>
//   <p>Subtotal ({basket?.length }items) </p>
//   <CurrencyFormat amount={total}/>

// </div>
// <span>
//   <input type="checkbox"/>
//   <small>This order contains a gift</small>
// </span>
// <Link to="/payments" >continue to checkout </Link>
// </div>

// )}

// </section>
// </Layout>
// );

// }

// export default Cart

﻿

import React, { useContext } from 'react';
// import Layout from '../../Components/Layout/LayOut';
import Layout from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import './Cart.css';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className="container">
        <div className="cart_container">
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket?.map((item, i) => (
              <section key={i} className='cart_product'>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className='btn_container'>
                  <button className='btn' onClick={() => increment(item)}>
                  <IoIosArrowUp size={30} />


                  </button>
                  <span>{item.amount}</span>
                  <button className='btn' onClick={() => decrement(item.id)}>
                  <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>
                Subtotal ({basket?.length} items)
              </p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
