import React, { forwardRef } from 'react'
import App2 from './App2'
import Navbar from '../Components/Navabar/Navbar'
import Footer from '../Components/Footer/Footer'

const About = forwardRef((props, ref) => {
    return (
        <div ref={ref} >

            {/* <Navbar/> */}
            <div id='aboute' className="bg-white-200 mt-10 text-white p-5 max-w-xxl  shadow-lg  ">
                <div class="text-center mt-10">
                    <h3 class="text-sm text-red-500 tracking-widest uppercase">Features</h3>
                    <h2 class="text-3xl text-gray-800 font-bold mt-2">
                        Get a many of interesting <br /> features.
                    </h2>
                </div>
                <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl ">
                    {/* <!-- Feature 1 --> */}
                    <div class="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                        <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureOne.svg" alt="Menu variations" class="w-16 h-16 mx-auto mb-4" />
                        <h3 class="text-xl font-semibold">Menu variations</h3>
                        <p class="text-gray-400 mt-2">Sed ut perspiciatis unde omnis iste natus error</p>
                        <a href="#" class="text-yellow-400 font-semibold cursor-not-allowed mt-4 inline-block">Learn More →</a>
                    </div>

                    {/* <!-- Feature 2 --> */}
                    <div class="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                        <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureTwo.svg" alt="Cooking warm" class="w-16 h-16 mx-auto mb-4 " />
                        <h3 class="text-xl font-semibold">Cooking warm</h3>
                        <p class="text-gray-400 mt-2">Sed ut perspiciatis unde omnis iste natus error</p>
                        <a href="#" class="text-yellow-400 cursor-not-allowed font-semibold mt-4 inline-block">Learn More →</a>
                    </div>

                    {/* <!-- Feature 3 --> */}
                    <div class="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                        <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureThree.svg" alt="Best chef" class="w-16 h-16 mx-auto mb-4" />
                        <h3 class="text-xl font-semibold">Best chef</h3>
                        <p class="text-gray-400 mt-2">Sed ut perspiciatis unde omnis iste natus error</p>
                        <a href="#" class="text-yellow-400 cursor-not-allowed font-semibold mt-4 inline-block">Learn More →</a>
                    </div>

                    {/* <!-- Feature 4 --> */}
                    <div class="bg-gray-800 p-6 rounded-lg text-center shadow-lg ">
                        <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureFour.svg" alt="Fast food" class="w-16 h-16 mx-auto mb-4" />
                        <h3 class="text-xl font-semibold">Fast food</h3>
                        <p class="text-gray-400 mt-2">Sed ut perspiciatis unde omnis iste natus error</p>
                        <a href="#" class="text-yellow-400 cursor-not-allowed font-semibold mt-4 inline-block">Learn More →</a>
                    </div>
                </div>
            </div>

 



        </div>
    )
})

export default About
