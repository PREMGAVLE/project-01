import { useState } from "react";
import React from 'react'
import Footer from "../Components/Footer/Footer";

const Contact = () => {

    const HoverCard = ({ img, title, description, buttonText }) => {
        const [hovered, setHovered] = useState(false);

        return (
            <div
                className="relative bg-white rounded-2xl  overflow-hidden cursor-pointer transition-transform transform hover:scale-105 flex"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img style={{ borderRadius: '50px' }} src={img} alt={title} className="w-full h-full " />
                <div className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-sm mt-2 text-center">{description}</p>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                        {buttonText}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen  py-12 flex flex-col items-center">

            <div className="mt-10 justify-center">
                <h2 className="text-sm font-medium text-red-600 tracking-wide uppercase text-center">Our Gallery</h2>
                <br />
                <h2 className="text-5xl font-bold text-gray-800 text-center mb-6">Gallery of our cooked food.</h2>
            </div>

            <div style={{
                width: '80%',
                // margin: '50px'
            }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl">
                <div className="md:col-span-2 lg:col-span-1 row-span-2 flex">
                    <HoverCard
                        img="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodone.jpg"
                        title="Fresh Caesar Salad"
                        description="Crispy romaine lettuce with grilled chicken, parmesan, and Caesar dressing."
                        buttonText="Learn More"
                    />
                </div>
                <div  >
                    <HoverCard
                        img="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodtwo.jpg"
                        title="Healthy Veggie Stir-fry"
                        description="A delicious mix of fresh vegetables sautéed with spices."
                        buttonText="Learn More"
                    />
                </div>
                <div   >
                    <HoverCard
                        img="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodthree.jpg"
                        title="Spicy Stir-fried Veggies"
                        description="Mushrooms, bell peppers, and fresh greens in a spicy sauce."
                        buttonText="Learn More"
                    />
                </div>
                <div style={{

                    marginTop: '-67.9%'
                }}>
                    <HoverCard
                        img="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodfour.jpg"
                        title="BBQ Chicken Feast Pizza"
                        description="BBQ chicken pizza with rich cheese and fresh herbs."
                        buttonText="Learn More"
                    />
                </div>
            </div>

        </div>
    )
}

export default Contact









