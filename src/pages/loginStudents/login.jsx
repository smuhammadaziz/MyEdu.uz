// import React, { useState, useRef, useEffect } from 'react';
// import './style.scss';
// import cosmoBg from 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbW9zfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

// import { ToastContainer, toast } from 'react-toastify';
// import { NavLink } from 'react-router-dom';
// import ReactCodeInput from 'react-code-input';
// import 'react-toastify/dist/ReactToastify.css';

// function Login() {
//   const reactCodeInputProps = {
//     inputStyle: {
//       fontFamily: 'monospace',
//       margin: '4px',
//       MozAppearance: 'textfield',
//       width: '60px',
//       borderRadius: '3px',
//       fontSize: '14px',
//       height: '60px',
//       paddingLeft: '7px',
//       backgroundColor: 'white',
//       color: 'lightskyblue',
//       border: '1px solid lightskyblue',
//     },
//     inputStyleInvalid: {
//       fontFamily: 'monospace',
//       margin: '4px',
//       MozAppearance: 'textfield',
//       width: '60px',
//       borderRadius: '3px',
//       fontSize: '14px',
//       height: '60px',
//       paddingLeft: '7px',
//       backgroundColor: 'black',
//       color: 'red',
//       border: '1px solid red',
//     },
//   };

//   const data = [
//     {
//       class: '10-01',
//       password: 'Ab04118',
//     },
//     {
//       class: '10-02',
//       password: 'Ab13216',
//     },
//     {
//       class: '10-03',
//       password: 'Ab87211',
//     },
//     {
//       class: '10-04',
//       password: 'Ab29314',
//     },
//     {
//       class: '10-05',
//       password: 'Ab21313',
//     },
//   ];

//   const [isPinCodeValid, setIsPinCodeValid] = useState(true);
//   const [pinCode, setPinCode] = useState('');
//   const [btnIsPressed, setBtnIsPressed] = useState(false);

//   const CORRECT_PIN_CODE = data.map(e => {
//     return pinCode == e.password;
//   });

//   const checkPinCode = () => {
//     setBtnIsPressed(true);
//     if (!isPinCodeValid) setPinCode('');

//     if (CORRECT_PIN_CODE.includes(true)) {
//       toast.success('You are logged in');
//     } else if (!CORRECT_PIN_CODE.includes(true)) {
//       toast.error('something is error');
//     }
//   };

//   const handlePinChange = pinCode => {
//     setPinCode(pinCode);
//     setBtnIsPressed(false);
//   };

//   return (
//     <>
//       <section
//         className='hero'
//         style={{
//           backgroundImage: url({ cosmoBg }),
//         }}
//       >
//         <div className='container heroContainer'>
//           <div className='heroContents'>
//             <div className='heroContentLeft'>
//               <h2 className='heroHeading'>Sinfingiz kodini kiriting</h2>
//               <p className='heroDesc'>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
//                 fuga recusandae sint unde animi enim similique iure error quis deserunt.
//               </p>
//               <NavLink to='/' className='hero-btn'>
//                 Home Pagega
//               </NavLink>
//             </div>
//             <div className='heroContentsformwrapper'>
//               <h2 className='classFormHeading'>Sinfingiz kodini kiriting:</h2>
//               <div action='' className='heroForm'>
//                 <ReactCodeInput
//                   id='pinCode'
//                   type='password'
//                   className='form-control classCodeInput'
//                   isValid={isPinCodeValid}
//                   fields={7}
//                   onChange={handlePinChange}
//                   value={pinCode}
//                   {...reactCodeInputProps}
//                 />
//                 {/* <label>
//                   {isPinCodeValid &&
//                     btnIsPressed &&
//                     toast.success("You are logged in")}
//                 </label>
//                 <label>
//                   {!isPinCodeValid &&
//                     btnIsPressed &&
//                     toast.error("Something is incorrect")}
//                 </label> */}
//                 <button
//                   className='btn btn-primary continue  w-100'
//                   onClick={checkPinCode}
//                 >
//                   Davom etish
//                 </button>
//                 <ToastContainer />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Login;
