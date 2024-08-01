// import React from 'react'
// import './Signup.css'
// import { Link } from 'react-router-dom'

// function Auth () {
//   return (
//     <section>

// <Link>
// <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//  alt="" 
//  />
// </Link>

// <div>
//   <h1>Sign In</h1>
//   <form action="">
// <div>
//   <label htmlFor="email">Email</label>
//   <input type="email" id="email"/>
// </div>
// <div>
// <label htmlFor="password">Password</label>
// <input type="password" id="password"/>
// </div>
// <button>Sign In</button>

//   </form>
// </div>
//  </section>




 
//   );
// }

// export default Auth


// import React from 'react';
// import './auth.css';
// import { Link } from 'react-router-dom';

// function Auth() {
//   return (
//     <section className='login'>
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt="Amazon logo"
//         />
//       </Link>

//       <div className='login_container '>
//         <h1>Sign In</h1>
//         <form action="">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <button className='logo_signInButton'>Sign In</button>
//         </form>
//        <p>
//         By signing-in you agree to the AMAZON_FAKE_CLONE conditions of use and sale. please see our privacy Notice, our Cookies Notice and our Interest based Adds Notice.   
//        </p>
//        <button login_registerButton>Create your Amazon Account</button>


//       </div>
//     </section>
//   );
// }

// export default Auth;


// import React from 'react';
// import './auth.css';
// import { Link } from 'react-router-dom';

// function Auth() {
//   return (
//     <section className='login'>
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt="Amazon logo"
//         />
//       </Link>

//       <div className='login_container'>
//         <h1>Sign In</h1>
//         <form action="">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <button className='login_signInButton'>Sign In</button>
//         </form>
//         <p>
//           By signing-in you agree to the AMAZON_FAKE_CLONE conditions of use and sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-based Ads Notice.
//         </p>
//         <button className='login_registerButton'>Create your Amazon Account</button>
//       </div>
//     </section>
//   );
// }

// export default Auth;

// import React, { useState,useContext } from 'react';
// import './auth.css';
// import { Link } from 'react-router-dom';
// import { auth } from '../../Utility/firebase'
// import {signInWithEmailAndPassword,createUserWithEmailAndPassword, signInWithEmailLink} from "firebase/auth"
// import {DataContext} from "../../Components/DataProvider/DataProvider"
// function Auth() {
//   const [email, setEmail]= useState("");
//   const [password, setPassword]= useState("");
//   const [error, setError]= useState("");
//   const [{user}, dispatch] = useContext(DataContext)
//       console.log(user);
//   // console.log(password,email);
//   const authHandler = async(e)=>{
//     e.preventDefault();
//     console.log(e.target.name);
//     if(e.target.name== "signin"){
//       signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
     
//         dispatch({
//           type:Type.SET_USER,
//           user:userInfo.use
//       })

//       }).catch((err)=>{
      
//         setERROR(err.message)
//       })

//     }else{
//       createUserWithEmailAndPassword(auth,email,password).
//       then((userInfo)=>{
    
//         dispatch({
//           type:Type.SET_USER,
//           user:userInfo.use
//       })
//       }).catch((err)=>{
//         setERROR(err.message)
//       })
//     }
//   };
//   return (
//     <section className='login'>
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt="Amazon logo"
//           className="login_logo"
//         />
//       </Link>

//       <div className='login_container'>
//         <h1 className="login_heading">Sign In</h1>
//         <form className="login_form">
//           <div className="login_inputGroup">
//             <label htmlFor="email">Email</label>
//             <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email" />
//           </div>
//           <div className="login_inputGroup">
//             <label htmlFor="password">Password</label>
//             <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" />
//           </div>
//           <button type= 'submit' name='signin' onClick={authHandler} className='login_signInButton'>Sign In</button>
//         </form>
//         <p className="login_privacyNotice">
//           By signing in, you agree to the AMAZON_FAKE_CLONE conditions of use and sale. Please see our <Link to="/privacy">Privacy Notice</Link>, our <Link to="/cookies">Cookies Notice</Link>, and our <Link to="/ads">Interest-based Ads Notice</Link>.
//         </p>
//         <button type='submit' name='signup' onClick={authHandler}  className='login_registerButton'>Create your Amazon Account</button>
//         {
//           error && <small>{error}</small>
//         }
//       </div>
//     </section>
//   );
// }

// export default Auth;
import React, { useState, useContext } from 'react';
import './auth.css';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { auth } from '../../Utility/firebase'; // Make sure to import auth
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import necessary auth functions
// import { ClipLoader  } from 'react-spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const [loasding, setLoading] = useState({
  signIn:false,
  signUp:false
})


  const [{ user }, dispatch] = useContext(DataContext);
// console.log(user);
  // const authHandler = async (e) => {
  //   e.preventDefault();
  //   if (e.target.name === 'signin') {
  //     try {
  //       const userInfo = await signInWithEmailAndPassword(auth, email, password);
  //       dispatch({
  //         type: 'SET_USER', // Replace with your actual action type
  //         user: userInfo.user, // Use userInfo.user instead of userInfo.use
  //       });
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   } else {
  //     try {
  //       const userInfo = await createUserWithEmailAndPassword(auth, email, password);
  //       dispatch({
  //         type: 'SET_USER', // Replace with your actual action type
  //         user: userInfo.user, // Use userInfo.user instead of userInfo.use
  //       });
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   }
  // };
  const navigate = useNavigate()
const navStateData = useLocation();

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name === 'signin') {
      // setLoading({...loading, signIn:true})
    
      try {
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: 'SET_USER', // Replace with your actual action type
          user: userInfo.user,
        });
        // setLoading({...loading, signIn:false})
        navigate(navStateData?.state?.redirect ||"/")
      } catch (err) {
        setError(err.message); // Set the error state
        // setLoading({...loading, signIn:false})
      }
    } else {
      // setLoading({...loading, signUP:true})
      try {
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: 'SET_USER', // Replace with your actual action type
          user: userInfo.user,
        });
        // setLoading({...loading, signUP:false})
        navigate(navStateData?.state?.redirect || "/");
      } catch (err) {
        setError(err.message); // Set the error stat
        // setLoading({...loading, signUP:false})
      }
    }
  };
  
  return (
    <section className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Amazon logo'
          className='login_logo'
        />
      </Link>

      <div className='login_container'>
        <h1 className='login_heading'>Sign In</h1>
        <form className='login_form'>
          <div className='login_inputGroup'>
            <label htmlFor='email'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='login_inputGroup'>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              id='password'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            name='signin'
            onClick={authHandler}
            className='login_signInButton'
          >
            
            Sign In
          </button>
          {
  navStateData?.state?.msg && (
    <small
      style={{
        padding: "5px",
        textAlign: "center",
        color: "red",
        fontWeight: "bold",
      }}
    >
      {navStateData?.state?.msg}
    </small>
  )
}

        </form>
        <p className='login_privacyNotice'>
          By signing in, you agree to the AMAZON_FAKE_CLONE conditions of use and sale. Please see our{' '}
          <Link to='/privacy'>Privacy Notice</Link>, our <Link to='/cookies'>Cookies Notice</Link>, and
          our <Link to='/ads'>Interest-based Ads Notice</Link>.
        </p>
        <button
          type='submit'
          name='signup'
          onClick={authHandler}
          className='login_registerButton'
        >
          Create your Amazon Account
        </button>
        {error && (<small style={{paddingTop: "5px" , color: "red"}}>{error}</small>)}
      </div>
    </section>
  );
}

export default Auth;


﻿

// import React from 'react'
// //  import classes from './auth.css'
// // import LayOut from '../../Components/LayOut/LayOut' 
// // import LayOut from '../../Components/LayOut/LayOut'
// import  LayOut form '../../Components/LayOut/LayOut'
// function Auth() {
// return (
// <Layout>
// <div>Sign up</div>
// </Layout>
// )}
// export default Auth


// import React from 'react';
// import Layout from '../../Components/LayOut/LayOut';

// function Auth() {
//   return (
//     <Layout>
//       <div>Sign up</div>
//     </Layout>
//   );
// }

// export default Auth;