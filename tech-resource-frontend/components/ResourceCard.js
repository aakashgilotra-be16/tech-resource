// components/ResourceCard.js
import { FaArrowRight } from 'react-icons/fa';

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">{resource.title}</h3>
      <p className="text-gray-400 mb-4">{resource.summary}</p>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-orange-500 hover:text-orange-600 transition duration-300"
      >
        View Resource <FaArrowRight className="ml-2" />
      </a>
    </div>
  );
};

export default ResourceCard;
