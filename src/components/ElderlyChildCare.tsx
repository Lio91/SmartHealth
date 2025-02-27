import React from 'react';
import { MapPin, Phone, Activity, AlertCircle, Heart } from 'lucide-react';

const ElderlyChildCare = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Heart className="h-6 w-6 text-red-500 mr-2" />
        老人儿童关怀
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-3">
              <MapPin className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-medium">实时位置</h3>
            </div>
            <p className="text-sm text-gray-600">张爷爷 - 社区公园</p>
            <p className="text-sm text-gray-600">小明 - 儿童游乐场</p>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <div className="flex items-center mb-3">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <h3 className="font-medium">紧急求助</h3>
            </div>
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              一键呼叫
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-3">
            <Activity className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="font-medium">活动状态</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">张爷爷</span>
              <span className="text-sm text-green-600">正常活动中</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">小明</span>
              <span className="text-sm text-green-600">正常活动中</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-medium mb-2">今日活动记录</h3>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="text-purple-600">09:00</span>
              <span className="text-gray-600 ml-2">张爷爷参加了太极拳活动</span>
            </div>
            <div className="text-sm">
              <span className="text-purple-600">10:30</span>
              <span className="text-gray-600 ml-2">小明参加了儿童绘画班</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderlyChildCare;