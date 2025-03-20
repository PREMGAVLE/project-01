import React from 'react';
import About from './About';
import Service from './Service';
import Subscribe from './Subscribe';
import Contact from './Contact';


const Home = ({ props, ref, ref2, ref3 }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center md:item-center md:justify-center">
            {/* Hero Section */}
            <div className="mt-10 grid md:grid-cols-2 gap-5 items-center px-5 md:px-10 text-center md:text-left">
                {/* Left Text Section */}
                <div className="mt-10">
                    <h2 className="text-7xl mt-10 font-bold mb-5 text-black ">
                        Cook anything <br /> with the experts
                    </h2>
                    <p className="text-gray-500 mt-5 text-lg md:text-2xl">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center md:justify-center">
                        <button className="w-48 py-3 rounded-full text-white bg-red-500 hover:bg-red-500 justify-center transition">
                            Let's Cook
                        </button>
                        <button className="w-48 py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-800 hover:text-white transition">
                            Explore Now
                        </button>
                    </div>
                </div>
                {/* Right Image Section */}
                <div className="relative flex justify-center">
                    <div className="bg-red-500 w-32 h-32 rounded-full absolute -top-5 -right-5 hidden md:block"></div>
                    <img
                        src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/hero/banner-image.png"
                        alt="Chef Cooking"
                        className="relative rounded-md max-w-full"
                    />
                </div>
            </div>
            {/* Feature Sections */}
            <About ref={ref} />
            <Service ref2={ref2} />

            {/* Experts Section */}
            <div className="text-center bg-red-100 py-16 px-5 flex flex-col items-center">
                <h2 className="text-gray-500 text-sm uppercase font-bold">Expert Chefs</h2>
                <h1 className="text-3xl md:text-4xl font-bold mt-2">Let's meet the expert.</h1>
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="relative p-5 rounded-tr-[50px] rounded-bl-[50px] text-center bg-white shadow-md w-64">
                            <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/boyone.svg" alt={`Chef ${i}`} className="rounded-full mx-auto w-32 h-32 object-cover" />
                            <h3 className="mt-4 text-lg font-bold">Shoo Thar Mien</h3>
                            <p className="text-gray-400 text-sm">{i === 1 ? 'Senior Chef' : 'Junior Chef'}</p>
                            <div className="absolute bottom-[-10px] right-[-10px] bg-white p-2 rounded-full">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Contact & Subscribe Sections */}
            <Contact />
            <Subscribe />
            {/* Footer Section */}
        </div>
    );
}
export default Home;



// import { useState } from "react";

// export default function SignInForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [submittedData, setSubmittedData] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//     if (formData.email === "admin@example.com" && formData.password === "admin123") {
//       setIsAdmin(true);
//     }
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
//       <div style={{ width: "300px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", backgroundColor: "white" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h2>
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//           />
//           <button type="submit" style={{ padding: "10px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//             Sign In
//           </button>
//         </form>
//         {submittedData && (
//           <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#e5e7eb", borderRadius: "5px" }}>
//             <h3>Submitted Data:</h3>
//             <p>Name: {submittedData.name}</p>
//             <p>Email: {submittedData.email}</p>
//             <p>Phone: {submittedData.phone}</p>
//             <p>Password: {submittedData.password}</p>
//             <p>Confirm Password: {submittedData.confirmPassword}</p>
//           </div>
//         )}
//         {isAdmin && (
//           <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#d1fae5", borderRadius: "5px" }}>
//             <h3 style={{ color: "#047857" }}>Admin Panel</h3>
//             <p>Welcome, Admin! You have full access.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }