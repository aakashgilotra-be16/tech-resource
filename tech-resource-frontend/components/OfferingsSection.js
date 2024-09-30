// components/OfferingsSection.js
const OfferingsSection = () => {
    return (
      <section id="offerings-section" className="bg-gray-900 text-white py-20">
        <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">Our Offerings</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-bold mb-4">Dynamic Roadmaps</h3>
            <p className="text-gray-400 mb-4">
              AI-generated learning paths to guide your tech career.
            </p>
            <a href="/roadmap" className="text-orange-500 hover:text-orange-600 transition duration-300">
              Learn More
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-bold mb-4">Community Discussions</h3>
            <p className="text-gray-400 mb-4">
              Share and discover resources with the tech community.
            </p>
            <a href="/community" className="text-orange-500 hover:text-orange-600 transition duration-300">
              Join the Community
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-bold mb-4">AI-Powered Resource Analysis</h3>
            <p className="text-gray-400 mb-4">
              Leverage AI to find the best resources for your learning.
            </p>
            <a href="#" className="text-orange-500 hover:text-orange-600 transition duration-300">
              Explore AI Features
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default OfferingsSection;
  