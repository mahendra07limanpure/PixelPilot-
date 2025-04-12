import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

function Sidebar({ onNavigate, currentRoute }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'projects', label: 'Projects', icon: FolderIcon },
    { id: 'analytics', label: 'Analytics', icon: ChartBarIcon },
    { id: 'team', label: 'Team', icon: UsersIcon },
    { id: 'settings', label: 'Settings', icon: Cog6ToothIcon },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? 80 : 240 }}
      className="bg-white h-screen border-r border-gray-200 flex flex-col"
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        {!isCollapsed && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            PixelPilot
          </motion.h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-2 p-3 rounded-lg mb-1 ${
                currentRoute === item.id
                  ? 'bg-purple-50 text-purple-600'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-6 h-6" />
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-medium"
                >
                  {item.label}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </nav>
    </motion.div>
  );
}

export default Sidebar; 