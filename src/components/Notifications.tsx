import React from 'react';
import { Bell, AlertTriangle } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Bell className="h-6 w-6 text-yellow-500 mr-2" />
        健康提醒
      </h2>
      <div className="space-y-4">
        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center text-yellow-700">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span>今日运动量不足，建议适当运动</span>
          </div>
        </div>
        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center text-green-700">
            <Bell className="h-5 w-5 mr-2" />
            <span>睡眠质量良好，继续保持</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;