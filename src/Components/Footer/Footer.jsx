import React from 'react'

export default function Footer() {
  return (
    <div >
      <footer className="bg-white  py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {/* Logo & About Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3">
                <img
                  src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg"
                  alt="Chef's Kitchen Logo"
                  className="w-10 h-10"
                />
                <h2 className="text-2xl font-bold">Chef’s Kitchen.</h2>
              </div>
              <p className="text-gray-500 mt-2 text-sm text-center md:text-left">
                Open an account in minutes, get full financial control for much longer.
              </p>
              {/* Social Icons */}
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {['F', 'ⓘ', 'X'].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black shadow-lg hover:bg-blue-500 hover:text-white transition"
                  >
                    <span className="text-xl font-bold">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            {[
              { title: "Company", links: ["About", "Careers", "Mobile", "Blog", "How we work?"] },
              { title: "Information", links: ["Help/FAQ", "Press", "Affiliates", "Hotel owners", "Partners"] },
              { title: "More", links: ["Home", "About Us"] }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="text-gray-500 space-y-2 mt-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-red-500 transition">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <hr className="border-gray-300 my-6" />
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm text-center md:text-left">
            <p>©2025 - Chef’s Kitchen. Distributed by ThemeWagon and Developed by GetNextjsTemplates</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
