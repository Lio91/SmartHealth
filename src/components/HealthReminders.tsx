import React from 'react';
import { Bell, Pill, Calendar, Activity, Gift } from 'lucide-react';

const HealthReminders = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Bell className="h-6 w-6 text-purple-500 mr-2" />
        智能健康提醒
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center">
            <Pill className="h-5 w-5 text-purple-500 mr-2" />
            <div>
              <h3 className="font-medium text-purple-700">服药提醒</h3>
              <p className="text-purple-600 text-sm">距离下次服药还有 2 小时</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-blue-500 mr-2" />
            <div>
              <h3 className="font-medium text-blue-700">体检提醒</h3>
              <p className="text-blue-600 text-sm">您已超过6个月未体检，建议及时预约</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center">
            <Activity className="h-5 w-5 text-green-500 mr-2" />
            <div>
              <h3 className="font-medium text-green-700">运动提醒</h3>
              <p className="text-green-600 text-sm">今日步数未达标，建议适当运动</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <Gift className="h-5 w-5 text-pink-500 mr-2" />
            <span className="text-gray-700">健康积分</span>
          </div>
          <span className="text-pink-600 font-medium">2,580 分</span>
        </div>
      </div>
    </div>
  );
};

export default HealthReminders;