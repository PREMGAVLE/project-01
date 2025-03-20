import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";

const Dishes = () => {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const limit = 12;

    // Fetch data with pagination & loading state
    const fetchData = (page) => {
        setLoading(true);  // Set loading state to true
        const skip = (page - 1) * limit;

        axios.get(
            `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
            .then((response) => {
                setData(response.data.recipes);
                setLoading(false); // Set loading state to false
            })

            .catch((error) => {
                console.error(error);
            })
    };


    useEffect(() => {
        fetchData(pageNumber);
    }, [pageNumber]);

    return (
        <div className="container mx-auto p-8 mt-10">
            {/* Title */}
            <h1 className="text-5xl font-bold text-green-600 text-center  p-6 mb-10">
                All Dishes Here 🍽️
            </h1>

            {/* Loading State */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
                </div>
            ) : (
                <>
                    {/* Dish Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {data.map((dish) => (
                            <div
                                key={dish.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
                            >
                                <img
                                    className="h-56 w-full object-cover"
                                    src={dish.image}
                                    alt={dish.name}
                                />
                                <div className="p-4 text-center">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {dish.name}
                                    </h2>
                                    <p className="text-gray-600 mt-2 text-sm truncate">
                                        {dish.instructions}
                                    </p>
                                    <div className="mt-4">
                                        <span className="text-lg font-bold text-blue-600">
                                            ⭐ {dish.rating}
                                        </span>
                                         <br />
                                          {/* <button className="bg-green-500 rounded-full text- text-blue-">Let's Order</button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-6 mt-10">
                        <button
                            className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={pageNumber === 1 || loading}
                            onClick={() => setPageNumber((prev) => prev - 1)}
                        >
                            ⬅ Prev
                        </button>
                        <h2 className="text-xl font-bold text-gray-700">{pageNumber}</h2>
                        <button
                            className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={loading}
                            onClick={() => setPageNumber((prev) => prev + 1)}
                        >
                            Next ➡
                        </button>
                    </div>
                     
                    
                </>
            )}
        </div>
    );
};

export default Dishes;
