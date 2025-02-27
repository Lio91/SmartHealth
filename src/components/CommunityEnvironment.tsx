import React from 'react';
import { Wind, Sun, Droplets, Volume2, AlertTriangle } from 'lucide-react';

const CommunityEnvironment = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Wind className="h-6 w-6 text-green-500 mr-2" />
        社区环境监测
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Volume2 className="h-5 w-5 text-blue-500 mr-2" />
              <span>噪音水平</span>
            </div>
            <span className="text-green-600 font-medium">45 dB</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-2/5 h-full bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Sun className="h-5 w-5 text-yellow-500 mr-2" />
              <span>光照强度</span>
            </div>
            <span className="text-blue-600 font-medium">12000 lux</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-3/5 h-full bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Droplets className="h-5 w-5 text-blue-500 mr-2" />
              <span>水质指数</span>
            </div>
            <span className="text-yellow-600 font-medium">良好</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-4/5 h-full bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center text-yellow-700">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span>今日光照强度偏高，建议外出时做好防晒措施</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEnvironment;