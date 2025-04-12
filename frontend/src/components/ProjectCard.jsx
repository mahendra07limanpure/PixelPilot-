import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-4">Last edited {project.lastEdited}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <EyeIcon className="w-4 h-4" />
            <span>{project.stats.views.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <ArrowTrendingUpIcon className="w-4 h-4" />
            <span>{project.stats.conversions.toLocaleString()}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard; 