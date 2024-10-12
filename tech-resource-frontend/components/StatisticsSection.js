// components/StatisticsSection.js
// components/StatisticsSection.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const StatisticsSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Check if the statistics section is in view when scrolling
    const handleScroll = () => {
      const section = document.getElementById('statistics-section');
      const rect = section?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="statistics-section" className="bg-black text-white py-20">
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">Platform Statistics</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-orange-500 mb-2"
          >
            10K+
          </motion.h3>
          <p className="text-lg text-gray-400">Active Users</p>
        </div>
        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-orange-500 mb-2"
          >
            500+
          </motion.h3>
          <p className="text-lg text-gray-400">Resources Available</p>
        </div>
        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-orange-500 mb-2"
          >
            AI-Powered
          </motion.h3>
          <p className="text-lg text-gray-400">Content Analysis & Curation</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;





// const StatisticsSection = () => {
//     return (
//       <section className="bg-black text-white py-12 py-20">
//         <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">Platform Statistics</h2>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
//           <div className="p-6">
//             <h3 className="text-5xl font-bold text-orange-500 mb-2">10K+</h3>
//             <p className="text-lg text-gray-400">Active Users</p>
//           </div>
//           <div className="p-6">
//             <h3 className="text-5xl font-bold text-orange-500 mb-2">500+</h3>
//             <p className="text-lg text-gray-400">Resources Available</p>
//           </div>
//           <div className="p-6">
//             <h3 className="text-5xl font-bold text-orange-500 mb-2">AI-Powered</h3>
//             <p className="text-lg text-gray-400">Content Analysis & Curation</p>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default StatisticsSection;
  