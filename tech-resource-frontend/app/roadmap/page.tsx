// app/roadmap/page.tsx
'use client';
import RoadmapList from '../../components/RoadmapList';

const RoadmapPage = () => {
  return (
    <div>
      <h1>Roadmap Page</h1>
      <RoadmapList />
    </div>
  );
};

export default RoadmapPage;

// import ResourceCard from '../../components/ResourceCard';
// import { useState, useEffect } from 'react';

// export default function Roadmap() {
//   const [resources, setResources] = useState([]);

//   useEffect(() => {
//     const fetchedResources = [
//       { title: 'Resource 1', summary: 'Learn basics of Product Management', url: '#' },
//       { title: 'Resource 2', summary: 'Advanced Project Management techniques', url: '#' },
//     ];
//     setResources(fetchedResources);
//   }, []);

  

  // return (
  //   <div className="min-h-screen py-16">
  //     <h1 className="text-center text-4xl font-bold text-orange-500 mb-12">Your Roadmap</h1>
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
  //       {resources.map((resource, index) => (
  //         <ResourceCard key={index} resource={resource} />
  //       ))}
  //     </div>
  //   </div>
  // );
// }
