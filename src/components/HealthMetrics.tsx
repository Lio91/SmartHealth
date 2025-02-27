import React from 'react';
import { Heart, Activity, Moon } from 'lucide-react';

const HealthMetrics = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Heart className="h-6 w-6 text-red-500 mr-2" />
        生理健康数据
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Activity className="h-5 w-5 text-green-500 mr-2" />
            <span>心率</span>
          </div>
          <span className="font-semibold">75 次/分</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Moon className="h-5 w-5 text-blue-500 mr-2" />
            <span>睡眠质量</span>
          </div>
          <span className="font-semibold">良好</span>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;