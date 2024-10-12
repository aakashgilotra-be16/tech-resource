// components/Navbar.js
import { FaHome, FaRoad, FaUsers, FaSearch, FaSignInAlt } from 'react-icons/fa';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="bg-black py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          🚀 TechHub
        </a>
        <ul className="flex space-x-8 text-white text-lg">
          <li>
            <a href="/" className="hover:text-orange-500 flex items-center">
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a href="/roadmap" className="hover:text-orange-500 flex items-center">
              <FaRoad className="mr-2" /> Roadmaps
            </a>
          </li>
          <li>
            <a href="/community" className="hover:text-orange-500 flex items-center">
              <FaUsers className="mr-2" /> Community
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 flex items-center">
              <FaSearch className="mr-2" /> Explore
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-orange-500 flex items-center">
              <FaSignInAlt className="mr-2" /> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
