import { useEffect, useState } from 'react';
import api from '../services/api';

const RoadmapList = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await api.get('/roadmaps');
        setRoadmaps(response.data.roadmaps);
      } catch (err) {
        setError('Error fetching roadmaps');
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Roadmaps</h1>
      <ul>
        {roadmaps.map((roadmap) => (
          <li key={roadmap._id}>
            <h2>{roadmap.title}</h2>
            <p>{roadmap.summary}</p>
            <a href={roadmap.url} target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
            <p>Created at: {new Date(roadmap.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapList;