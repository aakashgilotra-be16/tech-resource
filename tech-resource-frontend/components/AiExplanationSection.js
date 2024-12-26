// components/AiExplanationSection.js
const AiExplanationSection = () => {
    return (
      <section className="bg-gray-900 text-white py-12 py-20">
        <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">AI-Powered Resource Management</h2>
        <div className="container mx-auto text-center px-6">
          <p className="text-lg text-gray-400 mb-8">
            Our platform leverages cutting-edge AI technologies to analyze resources from multiple sources, assess their
            quality based on community engagement, and automatically generate roadmaps to help you stay on track with your
            learning goals.
          </p>
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full text-lg transition duration-300">
            Discover AI Features
          </a>
        </div>
      </section>
    );
  };
  
  export default AiExplanationSection;
  