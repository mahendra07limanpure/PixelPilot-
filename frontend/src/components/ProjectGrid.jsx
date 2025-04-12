import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid; 