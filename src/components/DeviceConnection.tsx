import React from 'react';
import { Smartphone, Watch, Link } from 'lucide-react';

const DeviceConnection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Link className="h-6 w-6 text-purple-500 mr-2" />
        设备连接
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Watch className="h-5 w-5 text-purple-500 mr-2" />
            <span>智能手环</span>
          </div>
          <span className="text-green-500 font-medium">已连接</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Smartphone className="h-5 w-5 text-gray-500 mr-2" />
            <span>血压计</span>
          </div>
          <span className="text-gray-500 font-medium">未连接</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceConnection;