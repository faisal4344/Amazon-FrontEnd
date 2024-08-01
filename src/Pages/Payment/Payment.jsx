// import React, {useContext} from 'react'
// import './Payment.css'
// import LayOut from '../../Components/LayOut/LayOut'
// import { DataContext } from '../../Components/DataProvider/DataProvider';
// import ProductCard from "../../Components/Product/ProductCard";




// function Payment  () {
//   const [{user, basket }] = useContext(DataContext);

// const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);

//   return (
//     <LayOut>

// <div className='payment_header'>
//   checkout({totalItem}) items
//   </div>
// <section className='payment'>
// <div className='flex'>
//   <h3>Delivery Address</h3>

//   <div>
//    <div>{user.email}</div>
//    <div>123 React Lane</div>
//    <div>chicago, IL</div>
// </div>
// </div>
// <hr />


// <div className='flex'>
// <h3>Review items and delivery</h3>
// <div>
//   {
//     basket?.map((item)=><ProductCard product={item} flex={true}/>)
//   }
// </div>
// </div>
// <hr />
// <div></div>




// </section>
//     </LayOut>
 
//   );
// }

// export default Payment

// import React, { useContext, useState } from 'react';
// import './Payment.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { DataContext } from '../../Components/DataProvider/DataProvider';
// import ProductCard from "../../Components/Product/ProductCard";
// import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
// import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
// import { axiosInstance } from '../../Api/axios';
// import { db } from "../../Utility/firebase";
// import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';

// function Payment() {
//   const [{ user, basket }] = useContext(DataContext) || [{}, []];

//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);

//   const total = basket.reduce((amount, item) => {
//     return item.price * item.amount + amount;
//   }, 0);

//   const [cardError,setCardError] = useState(null);
//   const [processing,setProcessing] = useState(false);

// const stripe = useStripe();
// const elements = useElements();
// const  navigate = useNavigate();

// const handleChange = (e)=>{
// console.log(e);
// e?.error?.message? setCardError(e?.error?.message): setCardError("")
// };
// const handlePayment = async(e) =>{
//   e.preventDefault();
//   try{
//    setProcessing(true); 
//     const response = await axiosInstance({
//       method: "Post",
//       url: `/payment/create?total=${total*100}`,
//     });
//     console.log(response.data);
//     const clientSecret = response.data?.clientSecret;

//     const { paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method:{
//           card: elements.getElement(CardElement),
//         },
//       }
//     );
// // console.log(confirmation);
// await db 
// .collection("users")
// .doc(user.uid)
// .collection("orders")
// .doc(paymentIntent.id)
// .set({
//   basket:basket,
//   amount: paymentIntent.amount,
//   created: paymentIntent.created,
// });




// navigate("/orders", {state: {msg: "you have placed now order"}});


// setProcessing(false);
 
// }catch(error){
//   setProcessing(false);
//   }
// };
//   return (
//     <LayOut>
//       <div className='payment_header'>
//         checkout ({totalItem}) items
//       </div>
//       <section className='payment'>
//         <div className='flex'>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user?.email || 'No email available'}</div>
//             <div>123 React Lane</div>
//             <div>Chicago, IL</div>
//           </div>
//         </div>
//         <hr />
//         <div className='flex'>
//           <h3>Review items and delivery</h3>
//           <div>
//             {basket?.length > 0 ? (
//               basket.map((item) => <ProductCard key={item.id} product={item} flex={true} />)
//             ) : (
//               <p>No items in basket</p>
//             )}
//           </div>
//         </div>
//         <hr />
//         <div className='flex'>
//           <h3>Payment methods</h3>
//           <div className='payment_card_container'>
            
//             <div className='payment_detail'>
//               <form onSubmit={handlePayment}>
//                 {cardError && <small style={{color:"red"}}>{cardError}</small>}
//                <CardElement onChange={handleChange} />



//                <div className='payment_price'>
//                    <div>
//                     <span style={{display:"flex", gap:"10px"}}>
//                      <p>Total Order |</p> Total Order | <CurrencyFormat amount={total}/>
//                      </span>
//                   </div>
//                  <button type='submit'>
//                   {
//                    processing? (
//                     <div className='loading'>
//                       <ClipLoader color="gray" size= {12}/>
//                       <p>please wait ...</p>
//                     </div>
//                    ): "  Pay Now" 
//                   }
                  
                
                  
                  
                  
//                   </button>
//                </div>

//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Payment;

import React, { useContext, useState } from 'react';
import './Payment.css';
import LayOut from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { db } from "../../Utility/firebase";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext) || [{}, []];

  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });

      const clientSecret = response.data?.clientSecret;

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      await db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

        dispatch({type: Type.EMPTY_BASKET});

      navigate("/orders", { state: { msg: "You have placed an order successfully!" } });
    } catch (error) {
      setProcessing(false);
      console.error("Payment failed: ", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      <div className='payment_header'>
        Checkout ({totalItem}) items
      </div>
      <section className='payment'>
        <div className='flex'>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email || 'No email available'}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className='flex'>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.length > 0 ? (
              basket.map((item) => <ProductCard key={item.id} product={item} flex={true} />)
            ) : (
              <p>No items in basket</p>
            )}
          </div>
        </div>
        <hr />
        <div className='flex'>
          <h3>Payment methods</h3>
          <div className='payment_card_container'>
            <div className='payment_detail'>
              <form onSubmit={handlePayment}>
                {cardError && <small style={{ color: "red" }}>{cardError}</small>}
                <CardElement onChange={handleChange} />
                <div className='payment_price'>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type='submit'>
                    {processing ? (
                      <div className='loading'>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;



// import React, { useContext, useState } from 'react';
// import './Payment.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { DataContext } from '../../Components/DataProvider/DataProvider';
// import ProductCard from "../../Components/Product/ProductCard";
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
// import { axiosInstance } from '../../Api/axios';

// function Payment() {
//   const [{ user, basket }] = useContext(DataContext) || [{}, []];
//   const [cardError, setCardError] = useState(null);
//   const [processing, setProcessing] = useState(false); // Added processing state
//   const stripe = useStripe();
//   const elements = useElements();

//   const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
//   const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

//   const handleChange = (e) => {
//     setCardError(e?.error?.message || "");
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setProcessing(true); // Disable button

//     try {
//       const response = await axiosInstance.post(`/payment/create?total=${total * 100}`);
//       const clientSecret = response.data?.clientSecret;

//       if (clientSecret) {
//         const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card: elements.getElement(CardElement),
//           },
//         });

//         if (error) {
//           setCardError(error.message);
//         } else {
//           console.log("Payment successful:", paymentIntent);
//           // Handle post-payment success logic here (e.g., updating DB, showing success message, etc.)
//         }
//       } else {
//         setCardError("Failed to retrieve client secret.");
//       }
//     } catch (error) {
//       setCardError("Payment failed. Please try again.");
//       console.error("Payment error:", error);
//     } finally {
//       setProcessing(false); // Re-enable button
//     }
//   };

//   return (
//     <LayOut>
//       <div className='payment_header'>
//         Checkout ({totalItem}) items
//       </div>
//       <section className='payment'>
//         <div className='flex'>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user?.email || 'No email available'}</div>
//             <div>123 React Lane</div>
//             <div>Chicago, IL</div>
//           </div>
//         </div>
//         <hr />
//         <div className='flex'>
//           <h3>Review items and delivery</h3>
//           <div>
//             {basket?.length > 0 ? (
//               basket.map((item) => <ProductCard key={item.id} product={item} flex={true} />)
//             ) : (
//               <p>No items in basket</p>
//             )}
//           </div>
//         </div>
//         <hr />
//         <div className='flex'>
//           <h3>Payment methods</h3>
//           <div className='payment_card_container'>
//             <div className='payment_detail'>
//               <form onSubmit={handlePayment}>
//                 {cardError && <small style={{color:"red"}}>{cardError}</small>}
//                 <CardElement onChange={handleChange} />
//                 <div className='payment_price'>
//                   <div>
//                     <span style={{display:"flex", gap:"10px"}}>
//                       <p>Total Order |</p> <CurrencyFormat amount={total}/>
//                     </span>
//                   </div>
//                   <button type='submit' disabled={processing}>Pay Now</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Payment;

// import React, { useContext, useState } from 'react';
// import './Payment.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { DataContext } from '../../Components/DataProvider/DataProvider';
// import ProductCard from "../../Components/Product/ProductCard";
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
// import { axiosInstance } from '../../Api/axios';

// function Payment() {
//   const [{ user, basket }] = useContext(DataContext) || [{}, []];
//   const [cardError, setCardError] = useState(null);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);

//   const stripe = useStripe();
//   const elements = useElements();

//   const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;
//   const total = basket?.reduce((amount, item) => item.price * item.amount + amount, 0) || 0;

//   const handleChange = (e) => {
//     setCardError(e?.error?.message || "");
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setPaymentProcessing(true);

//     try {
//       const response = await axiosInstance.post(`/payment/create?total=${total * 100}`);
//       const clientSecret = response.data?.clientSecret;

//       if (!clientSecret) {
//         setCardError("Failed to get client secret");
//         setPaymentProcessing(false);
//         return;
//       }

//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (error) {
//         setCardError(error.message);
//       } else if (paymentIntent.status === 'succeeded') {
//         // Handle successful payment here
//         console.log('Payment succeeded:', paymentIntent);
//       }

//     } catch (error) {
//       setCardError('Payment processing failed. Please try again.');
//     } finally {
//       setPaymentProcessing(false);
//     }
//   };

//   return (
//     <LayOut>
//       <div className='payment_header'>
//         Checkout ({totalItem}) items
//       </div>
//       <section className='payment'>
//         <div className='flex'>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user?.email || 'No email available'}</div>
//             <div>123 React Lane</div>
//             <div>Chicago, IL</div>
//           </div>
//         </div>
//         <hr />
//         <div className='flex'>
//           <h3>Review items and delivery</h3>
//           <div>
//             {basket?.length > 0 ? (
//               basket.map((item) => (
//                 <ProductCard key={item.id} product={item} flex={true} />
//               ))
//             ) : (
//               <p>No items in basket</p>
//             )}
//           </div>
//         </div>
//         <hr />
//         <div className='flex'>
//           <h3>Payment methods</h3>
//           <div className='payment_card_container'>
//             <div className='payment_detail'>
//               <form onSubmit={handlePayment}>
//                 {cardError && <small style={{ color: "red" }}>{cardError}</small>}
//                 <CardElement onChange={handleChange} />
//                 <div className='payment_price'>
//                   <div>
//                     <span style={{ display: "flex", gap: "10px" }}>
//                       <p>Total Order |</p> 
//                       <CurrencyFormat amount={total} />
//                     </span>
//                   </div>
//                   <button type='submit' disabled={paymentProcessing}>
//                     {paymentProcessing ? 'Processing...' : 'Pay Now'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Payment;
