import React from 'react';
import { Gift, Award, Star, ShoppingBag } from 'lucide-react';

const HealthPoints = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Gift className="h-6 w-6 text-pink-500 mr-2" />
        健康积分兑换
      </h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-pink-500 mr-3" />
            <div>
              <h3 className="font-medium">我的积分</h3>
              <p className="text-2xl font-bold text-pink-600">2,580</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
            兑换商城
          </button>
        </div>

        <div>
          <h3 className="font-medium mb-3 flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            积分任务
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>每日健康打卡</span>
              <span className="text-pink-600">+10分</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>参与健康活动</span>
              <span className="text-pink-600">+50分</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>完成运动目标</span>
              <span className="text-pink-600">+30分</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3 flex items-center">
            <ShoppingBag className="h-5 w-5 text-green-500 mr-2" />
            热门兑换
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">健康体检券</h4>
                  <p className="text-sm text-gray-600 mt-1">价值：¥200</p>
                </div>
                <button className="px-3 py-1 bg-pink-100 text-pink-600 rounded-lg">
                  1000积分
                </button>
              </div>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">运动水杯</h4>
                  <p className="text-sm text-gray-600 mt-1">价值：¥99</p>
                </div>
                <button className="px-3 py-1 bg-pink-100 text-pink-600 rounded-lg">
                  500积分
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPoints;