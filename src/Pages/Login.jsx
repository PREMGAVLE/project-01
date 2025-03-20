// import React, { useContext, useState } from 'react'
// // import { AuthContextProvider } from '../Them/AuthContext'
// import { Navigate } from 'react-router-dom'
// import { AuthContextProvider } from '../Contex/AuthContext'
// import axios from 'axios'

// const Login = () => {
//     const { isAuth, Login } = useContext(AuthContextProvider)
//     console.log(isAuth)
//     const [email, setEmail] = useState(' eve.holt@reqres.in')
//     const [password, setPassword] = useState(' cityslicks')
//     //eve.holt@reqres.in
//     //cityslicks
//     let handleClick = () => {

//         axios.get('https://reqres.in/api/login')
//             .then((data) => {
//                 console.log(data.token)
//                 Login(data.token)
//             })


//     }
//     ///// let fetchData = () => {
//     // axios.get(`http://localhost:3000/dishes?limit=10`)
//     // .then(response => {
//     //     console.log(response)
//     //     setData(response.data)

//     // })


//     const [status, setStatus] = useState(true)

//     let HandleStatus = () => {

//         setStatus(!status)

//     }

//     if (isAuth) {
//         return <Navigate to={'/dishes'} />
//     }

//     return (
//         <div className='text-center fixed top-0 left-0 w-full h-full mt-10     justify-center'>


//               <div className='flex justify-center mt-10 gap-5'>
//                 <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg" alt="" />
//                 <h1 className='2xl'>Cheif's Kitchen</h1>
//               </div>

//               <div>

//               </div>

//             <input type="email"
//                 placeholder='Email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} />
//             <br />
//             <br />
//             <input type="text"
//                 placeholder='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} />
//             <br />
//             <br />
//             <button onClick={handleClick}>Login</button>

//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />



//             <button onClick={HandleStatus} >
//                 {status ? 'Following' : 'Follow'}
//             </button>
//         </div>
//     )
// }

// export default Login
// import React, { useContext, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContextProvider } from '../Contex/AuthContext';
// import axios from 'axios';

// const Login = () => {
//     const { isAuth, Login } = useContext(AuthContextProvider);
//     const [email, setEmail] = useState('eve.holt@reqres.in');
//     const [password, setPassword] = useState('cityslicks');
//     const [status, setStatus] = useState(true);

//     let handleClick = async () => {
//         // try {
//         //     const response = await axios.post('https://reqres.in/api/login', { email, password });
//         //     console.log(response.data.token);
//         //     Login(response.data.token);
//         // } catch (error) {
//         //     console.error("Login failed", error);
//         // }
//         axios.get('https://reqres.in/api/login')
//             .then((data) => {
//                 console.log(data.token)
//                 Login(data.token)
//             })

//     };

//     let HandleStatus = () => {
//         setStatus(!status);
//     };

//     if (isAuth) {
//         return <Navigate to={'/dishes'} />;
//     }

//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen '>
//             <div className='bg-black p-8 rounded-2xl shadow-xl w-70'>
//                 <div className='flex items-center justify-center gap-4 mb-6'>

//                     <img  src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg" alt="Logo" className='w-15 h-20' />
//                     <h1 className='text-2xl font-bold'>Chef's Kitchen</h1>
//                 </div>
//                 <div  className='flex  gap-8 justify-center mt-8 mb-8'>
//                     <div className='flex bg-orange-500 w-20 rounded-lg
//                      '>
//                         <h1>Sigin</h1>
//                         <div class="imageb"></div>
//                         {/* <img className='w-10   ' src="https://fabrikbrands.com/wp-content/uploads/History-of-The-Google-Logo-1-scaled.jpg" alt="" /> */}
//                     </div>
//                     <div  className='flex bg-orange-500 w-20 rounded-lg'>
//                     <h1>Sigin</h1>
//                     <img src="" alt="" />
//                     </div>
//                 </div>
//                 <input 
//                     type="email" 
//                     placeholder='Email' 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)}
//                     className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
//                 />
//                 <input 
//                     type="password" 
//                     placeholder='Password' 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)}
//                     className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
//                 />
//                 <button 
//                     onClick={handleClick} 
//                     className='w-full bg-orange-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300'
//                 >
//                     Sigin
//                 </button>

//                 <h1 className='text-center mt-8'>Forget Password</h1>

//                 <div className='flex justify-center mt-3'>
//                     <h1>Not a member yet ?</h1>
//                     <h1 className='text-orange-500  '>Sigin</h1>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useContext, useState } from 'react';
import { data, Link, Navigate } from 'react-router-dom';
import { AuthContextProvider } from '../Contex/AuthContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ pop }) => {
    const { isAuth, Login, Token } = useContext(AuthContextProvider);
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicks');
    // const [err,setErr]=useState(false)


    let handleClick = () => {
        // try {
        //     const response = await axios.post('https://reqres.in/api/login', { email, password });

        //     Login(response.data.token);
        // } catch (error) {
        //     console.error("Login failed", error);
        // }

        axios.get(`https://reqres.in/api/login`)
            .then(data => {
                // console.log(data.data)
                Login(data.data.token)


            })
            .catch((error) => {
                setErr(true)
                toast.error('Login failed! Please check your credentials.');
            })


    };

    const handleSubmit = () => {
        toast.success('Login successful!');

    }

    if (isAuth) {

        return (

            <Navigate to={'/dishes'} />



        )
    }
    // if(err){
    //     return(
    //         <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    //   <div class="text-center">
    //     <p class="text-base font-semibold text-indigo-600">404</p>
    //     <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
    //     <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    //     <div class="mt-10 flex items-center justify-center gap-x-6">
    //       <Link to={'/'} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
    //       <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    //     </div>
    //   </div>
    // </main>
    //     )
    // }
    // const toggleSignIn = () => {
    //     setShowSignIn(showSignIn);
    //     console.log('click')

    // };


    return (
        < >


            {/* <div        className='  '> */}
            {/* <button onClick={() => pop(false)} className="absolute mb-10 top-0 right-0 mr-0  dark:invert">X</button> */}
            <div class='blur '></div>
            <div onSubmit={handleSubmit} id='login2' className='bg-gray-300  rounded-full w-full md:w-full p-8 shadow-xl '>
                <ToastContainer position="top-right" autoClose={3000} />
                <button onClick={() => pop(false)} className=" absolute  top-5 right-6 mr- cursor-pointer hover:bg-violet-600   text-black-500">X</button>

                <div className='flex items-center justify-center gap-4 mb-2'>
                    <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg" alt="Logo" className='w-15 h-20' />
                    <h1 className='text-2xl font-bold text-black'>Chef's Kitchen</h1>
                </div>

                <h1 className='text-xl font-bold text-center text-black' >OR</h1>


                <div className='flex gap-8 justify-center mt-8 mb-8'>
                    <button className='flex  cursor-not-allowed  bg-orange-500 w-40 h-12 rounded-lg justify-center gap-5 items-center'>
                        <h1>Sigin</h1>
                        <img className='w-6 h-6' src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="Google" />
                    </button>
                    <button className='flex cursor-not-allowed  bg-orange-500 w-40 h-12 gap-5 rounded-lg justify-center items-center'>
                        <h1>Sigin</h1>
                        <img className='w-7 h-7 rounded-full' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />

                    </button>
                </div>
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <button
                    onClick={handleClick}
                    className='w-full  cursor-pointer px-6 bg-orange-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300'
                >
                    Sign In
                </button>
                <h1 className='text-center mt-8 cursor-not-allowed  hover:text-red-500 text-black'>Forget Password</h1>
                <div className='flex justify-center mt-3'>
                    <h1 className='text-black'>Not a member yet?</h1>
                    <h1 className='text-orange-500 ml-1 cursor-not-allowed  '>Sign Up</h1>

                </div>
            </div>

            {/* </div> */}
        </>


    );
};

export default Login;



