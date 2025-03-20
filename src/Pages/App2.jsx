import React, { useRef } from "react";

const App2 = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4">
        <ul className="flex gap-4">
          <li>
            <button onClick={scrollToAbout} className="text-blue-500">
              About Us
            </button>
          </li>
        </ul>
      </nav>

      {/* Other Sections */}
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <h1>Welcome Section</h1>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="h-screen bg-blue-200 flex items-center justify-center">
        <h2>About Us Section</h2>
      </div>
    </div>
  );
};

export default App2;