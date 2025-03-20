import React from 'react';
import Footer from '../Components/Footer/Footer';

const Service = () => {
  return (
    <div className="w-full flex justify-center">
      <div id="recipe" className="w-full max-w-5xl bg-white p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section (Image) */}
          <div id="sndImg" className="relative flex justify-center">
            <div className="rounded-lg p-6">
              {/* Uncomment and add actual image paths */}
              {/* <img className="w-full" src="chef.png" alt="Chef" /> */}
              {/* <img src="lettuce.png" alt="Lettuce" className="absolute top-0 left-0 w-16 animate-bounce" /> */}
              {/* <img src="knife.png" alt="Knife" className="absolute top-10 right-0 w-16 animate-pulse" /> */}
            </div>
          </div>

          {/* Right Section (Text) */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-red-400 uppercase tracking-wide text-2xl">Cook with us</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2 text-black">
              Cooking together with <br /> the expert.
            </h1>
            <p className="text-gray-400 mt-5 text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....            </p>
            <button className="mt-10 mx-auto md:mx-0 bg-red-500 text-white rounded-full hover:bg-red-600 transition px-8 py-3 cursor-not-allowed">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
