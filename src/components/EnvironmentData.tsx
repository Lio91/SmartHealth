import React from 'react';
import { Wind, Thermometer, Droplets } from 'lucide-react';

const EnvironmentData = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Wind className="h-6 w-6 text-blue-500 mr-2" />
        环境指标
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Wind className="h-5 w-5 text-green-500 mr-2" />
            <span>空气质量</span>
          </div>
          <span className="font-semibold">优</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Thermometer className="h-5 w-5 text-red-500 mr-2" />
            <span>温度</span>
          </div>
          <span className="font-semibold">24°C</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Droplets className="h-5 w-5 text-blue-500 mr-2" />
            <span>湿度</span>
          </div>
          <span className="font-semibold">45%</span>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentData;