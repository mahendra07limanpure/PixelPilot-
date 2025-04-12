import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

function AnalyticsWidget({ title, value, change, changeType = 'positive' }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center mt-1">
            <ArrowUpIcon 
              className={`w-4 h-4 ${
                changeType === 'positive' ? 'text-green-500' : 'text-red-500 transform rotate-180'
              }`} 
            />
            <span className={`text-sm ml-1 ${
              changeType === 'positive' ? 'text-green-500' : 'text-red-500'
            }`}>
              {change}%
            </span>
          </div>
        </div>
        <div className="w-32 h-16 bg-gray-100 rounded">
          {/* Chart placeholder */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Chart
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsWidget; 