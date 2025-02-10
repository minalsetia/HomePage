import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-20 flex justify-between items-center p-4 bg-white shadow-xl">
      <h1 className="text-blue-600 font-bold text-xl">Academics Pro</h1>

      {/* Navbar for larger screens */}
      <nav className="hidden md:block">
        <ul className="flex space-x-20">
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#modules" className="hover:text-blue-500">Modules</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-blue-600"
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Dropdown menu for mobile */}
        {isMenuOpen && (
          <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
            <ul>
              <li><a href="#features" className="block py-2">Features</a></li>
              <li><a href="#about" className="block py-2">About</a></li>
              <li><a href="#modules" className="block py-2">Modules</a></li>
              <li><a href="#contact" className="block py-2">Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* Sign In Button */}
      <button 
        className="bg-blue-400 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 cursor-pointer"
        onClick={() => {
          console.log("Sign In button clicked!");
        }}
      >
        Sign In
      </button>
    </header>
  );
}
