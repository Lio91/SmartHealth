import React from 'react';
import { Users, BookOpen, Heart, Trophy } from 'lucide-react';

const CommunityActivities = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Users className="h-6 w-6 text-indigo-500 mr-2" />
        社区健康活动
      </h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-medium">健康讲座：心脏病预防</h3>
                <p className="text-sm text-gray-600 mt-1">时间：2024-03-25 14:00</p>
                <p className="text-sm text-gray-600">地点：社区活动中心</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              报名参加
            </button>
          </div>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Trophy className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium">太极拳培训班</h3>
                <p className="text-sm text-gray-600 mt-1">时间：每周二、四 07:00</p>
                <p className="text-sm text-gray-600">地点：社区广场</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              报名参加
            </button>
          </div>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">义诊活动</h3>
                <p className="text-sm text-gray-600 mt-1">时间：2024-03-30 09:00-16:00</p>
                <p className="text-sm text-gray-600">地点：社区卫生服务中心</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              预约参加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityActivities;