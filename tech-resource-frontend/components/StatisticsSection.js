// components/StatisticsSection.js
const StatisticsSection = () => {
    return (
      <section className="bg-black text-white py-20">
        <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">Platform Statistics</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
          <div className="p-6">
            <h3 className="text-5xl font-bold text-orange-500 mb-2">10K+</h3>
            <p className="text-lg text-gray-400">Active Users</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-orange-500 mb-2">500+</h3>
            <p className="text-lg text-gray-400">Resources Available</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-orange-500 mb-2">AI-Powered</h3>
            <p className="text-lg text-gray-400">Content Analysis & Curation</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatisticsSection;
  