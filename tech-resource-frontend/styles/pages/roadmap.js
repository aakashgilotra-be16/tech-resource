// pages/roadmap.js
import { useState, useEffect } from 'react';
import ResourceCard from '../../components/ResourceCard';

const Roadmap = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch the roadmap resources from the backend (dummy data for now)
    const fetchedResources = [
      { title: 'Resource 1', summary: 'Learn the basics of Product Management', url: '#' },
      { title: 'Resource 2', summary: 'Advanced Project Management techniques', url: '#' },
    ];
    setResources(fetchedResources);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-12">Your Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
