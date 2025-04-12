import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ProjectGrid from './ProjectGrid';
import AnalyticsWidget from './AnalyticsWidget';

// Mock data
const mockProjects = [
  {
    id: '1',
    title: 'Summer Collection',
    thumbnail: 'https://picsum.photos/seed/summer/800/600',
    lastEdited: '2h ago',
    status: 'published',
    stats: { views: 1234, conversions: 12.5 }
  },
  {
    id: '2',
    title: 'Winter Essentials',
    thumbnail: 'https://picsum.photos/seed/winter/800/600',
    lastEdited: '1d ago',
    status: 'draft',
    stats: { views: 856, conversions: 8.3 }
  },
  {
    id: '3',
    title: 'Spring Lookbook',
    thumbnail: 'https://picsum.photos/seed/spring/800/600',
    lastEdited: '3d ago',
    status: 'published',
    stats: { views: 2341, conversions: 15.7 }
  }
];

function Dashboard() {
  const [currentRoute, setCurrentRoute] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onNavigate={setCurrentRoute} currentRoute={currentRoute} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        
        <main className="flex-1 overflow-auto">
          {currentRoute === 'dashboard' && (
            <div className="p-6">
              <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <AnalyticsWidget
                  title="Total Views"
                  value="45.2k"
                  change={12.5}
                  changeType="positive"
                />
                <AnalyticsWidget
                  title="Conversions"
                  value="12.3%"
                  change={-2.4}
                  changeType="negative"
                />
                <AnalyticsWidget
                  title="Active Projects"
                  value="8"
                  change={33.3}
                  changeType="positive"
                />
              </div>

              <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
              <ProjectGrid projects={mockProjects} />
            </div>
          )}

          {currentRoute === 'projects' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Projects</h1>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  New Project
                </button>
              </div>
              <ProjectGrid projects={mockProjects} />
            </div>
          )}

          {currentRoute === 'analytics' && (
            <div className="p-6">
              <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    Chart Placeholder
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-lg font-semibold mb-4">Conversion Rates</h2>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    Chart Placeholder
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard; 