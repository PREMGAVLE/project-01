import React from 'react';

const Subscribe = () => {
    return (

        <div
            style={{

                width: '100%'
            }}>
            <div
                style={{

                    height: '450px',
                    borderRadius: '50px 300px 10px 50px',
                    margin: '50px',
                    backgroundColor: 'rgb(213, 101, 73)',
                }}
                className="relative w-90  rounded-lg flex items-center justify-between ">
                <div style={{
                    marginLeft: '10px'
                }} class=" lg:ml-32 lg:mt-20  lg:mb-20 ">
                    <p class="text-lg font-normal text-white mb-3 ls-51">NEWSLETTER</p>
                    <h2 class="text-3xl md:text-5xl font-semibold text-white mb-8">Subscribe our
                        <br />
                        newsletter.</h2>

                    <form
                        style={{
                            width: '230px',
                        }}
                        // className=" w-full md:w-[550px] bg-white flex items-center shadow-md rounded-full p-2"
                    className="  bg-white relative  text-white focus-within:text-black flex flex-row-reverse shadow-fi rounded-full"
                    >
                        {/* <span className="px-3 text-gray-400">@</span> */}
                        <input
                            style={{ color: 'black' }}
                            type="email"
                            autoComplete='off' name='q'
                            placeholder="  @Enter your email address"
                            // className='  w-full text-black p-4 md:p-6 rounded-full focus:outline-none '
                        className="py-6 sm:py-8 text-sm w-full text-black dark:text-black rounded-full pl-4 par-87 focus:outline-none focus:text-black"
                        // required
                        />
                        <div class='absolute inset-y-0 right-0 flex item-center pr-2'   >
                            <button
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    marginTop: '10px',
                                    marginRight: '10px'
                                }}
                                type="submit"
                                className="p-2 bg-gray-900 hover:scale-110 duration-300 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" role='img' class="iconify iconify--tabler text-white "
                                    width='2' height='32' viewBox='0 0 24 24'>==$0
                                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                                        strokeWidth='2' d='M5 12h14m-4 414-4m-4-414 4' ></path>
                                </svg>
                                <div style={{
                                    position: 'absolute',
                                    // color:'black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '-26px',
                                    marginLeft: '8px',
                                    cursor: 'not-allowed'

                                }}>
                                    ➝
                                </div>

                            </button>
                        </div>

                    </form>
                </div>
                {/* Floating Elements */}

                <div className='hidden md:block'>
                    <img
                        src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/soup.svg"
                        alt="Food"
                        className="absolute top-[-40px] right-0"
                        style={{
                            width: '500px',
                            height: '700px',
                            position: 'absolute',
                            bottom: "-80px",
                            right: "-0px",
                        }}
                    />
                    <div style={{
                        width: '150px',

                        position: 'absolute',
                        right: '-45px',
                    }}>
                        <img
                            src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/lec.svg"
                            alt="Lettuce"
                            style={{
                                width: '100%',
                                // height: '150',

                                // top: '190px',


                            }}
                        />
                    </div>

                    <img
                        src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/onion.svg"
                        alt="Onion"
                        style={{
                            width: '350px',
                            position: 'absolute',
                            top: '320px',
                            right: '180px',
                        }}
                    />
                    <div style={{
                        width: '50px',
                        height: '50px',
                        position: 'absolute',
                        bottom: '50px',
                        right: '450px',
                    }} className="absolute bottom-6 right-0 w-4 h-4 bg-yellow-300 rounded-full"></div>
                    <div style={{
                        width: '30px',
                        height: '30px',
                        position: 'absolute',
                        bottom: '70px',
                        right: '100px',
                    }} className="absolute bottom-2 right-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>

            </div>
        </div>

    );
};

export default Subscribe;


// import React from 'react';

// const Subscribe = () => {
//     return (
//         <div style={{
//             width: '100%',
//             border: '2px solid blue',
//             padding: '20px',
//             height: '600px'
//         }} className="w-full p-4 md:p-10">
//             <div style={{ border: '3px solid black', height: '450px', width: '100%', borderRadius: '50px 300px 10px 50px', margin: '10px', backgroundColor: 'rgb(213, 101, 73)' }}
//                 className="relative w-full md:h-[450px] rounded-[50px] md:rounded-[50px_300px_10px_50px] m-4 md:m-10 flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-10">
//                 <div style={{ marginLeft: '100px' }} className="text-center md:text-left lg:ml-32 lg:mt-20 lg:mb-20">
//                     <p className="text-lg font-normal text-white mb-3">NEWSLETTER</p>
//                     <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Subscribe to our <br /> newsletter.</h2>
//                     <form style={{ width: '100%' }} className="w-full md:w-[550px] bg-white flex items-center shadow-md rounded-full p-2">
//                         <input style={{ color: 'black' }} type="email" autoComplete='off' name='q' placeholder="Enter your email address"
//                             className="w-full text-black p-4 md:p-6 rounded-full focus:outline-none" />
//                         <button style={{ width: '50px', height: '50px', marginTop: '10px', marginRight: '10px' }}
//                             type="submit" className="p-3 bg-gray-900 hover:scale-110 duration-300 rounded-full ml-2">
//                             ➝
//                         </button>
//                     </form>
//                 </div>
//                 {/* Hide images on smaller screens */}
//                 <div className="hidden md:block">
//                     {/* <img
//                         style={{
//                             border:'2px solid green',
//                             width: '400px',
//                             // height: '100px',
//                             position: 'absolute',
//                             bottom: "-80px",
//                             right: "-0px",
//                         }}

//                         src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/soup.svg" alt="Food"
//                         className="absolute bottom-[-80px] right-0 w-[500px] h-[700px]" /> */}
//                     <img

//                         style={{
//                             width: '350px',
//                             position: 'absolute',
//                             top: '320px',
//                             right: '180px',
//                         }}
//                         src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/onion.svg" alt="Lettuce"
//                         className="absolute right-[-45px] w-[150px]" />
//                     <div
//                         style={{
//                             width: '150px',
//                             position: 'absolute',
//                             right: '-45px',
//                         }}>
//                         <img
//                             style={{
//                                 width: '100%',
//                                 // height: '150',

//                                 // top: '190px',


//                             }}
//                             src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/lec.svg"
//                             alt="Onion"
//                             className="absolute top-[320px] right-[180px] w-[350px]" />
//                     </div>
//                     <div style={{
//                         width: '50px',
//                         height: '50px',
//                         position: 'absolute',
//                         bottom: '50px',
//                         right: '450px',
//                     }} className="absolute bottom-6 right-0 w-4 h-4 bg-yellow-300 rounded-full"></div>
//                     <div style={{

//                         width: '30px',
//                         height: '30px',
//                         position: 'absolute',
//                         bottom: '70px',
//                         right: '100px',
//                     }} className="absolute bottom-2 right-0 w-4 h-4 bg-blue-400 rounded-full"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Subscribe;

