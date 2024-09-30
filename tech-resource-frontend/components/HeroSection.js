// components/HeroSection.js
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const HeroSection = ({ scrollToOfferings }) => {
  return (
    <div className="bg-black text-white text-center py-24 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-orange-500">TechHub</span>
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Your one-stop resource for everything in tech. Explore, Learn, and Grow!
      </p>
      <div className="flex space-x-6 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-orange-500 transition duration-300" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-orange-500 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl hover:text-orange-500 transition duration-300" />
        </a>
      </div>
      <button
        onClick={scrollToOfferings}
        className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full text-lg transition duration-300"
      >
        Explore Offerings
      </button>
    </div>
  );
};

export default HeroSection;
