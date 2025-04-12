import React, { useState } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <BellIcon className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2"
            >
              <UserCircleIcon className="w-8 h-8 text-gray-600" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-200">
                <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Your Profile
                </a>
                <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </a>
                <hr className="my-1" />
                <a href="#logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar; 