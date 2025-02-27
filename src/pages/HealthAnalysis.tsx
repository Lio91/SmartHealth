import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, Heart, Moon } from 'lucide-react';

const data = [
  { name: '周一', 心率: 75, 血压: 120, 睡眠: 7.5 },
  { name: '周二', 心率: 72, 血压: 118, 睡眠: 8 },
  { name: '周三', 心率: 78, 血压: 122, 睡眠: 6.5 },
  { name: '周四', 心率: 74, 血压: 119, 睡眠: 7 },
  { name: '周五', 心率: 76, 血压: 121, 睡眠: 7.8 },
  { name: '周六', 心率: 71, 血压: 117, 睡眠: 8.5 },
  { name: '周日', 心率: 73, 血压: 118, 睡眠: 8.2 },
];

const HealthAnalysis = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">健康分析</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-lg font-semibold">心率趋势</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="心率" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">血压变化</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="血压" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Moon className="h-6 w-6 text-indigo-500 mr-2" />
            <h2 className="text-lg font-semibold">睡眠时长</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="睡眠" stroke="#6366f1" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">健康建议</h2>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800">运动建议</h3>
            <p className="text-green-700 mt-1">根据您的心率数据，建议每天进行30分钟中等强度的有氧运动。</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800">睡眠建议</h3>
            <p className="text-blue-700 mt-1">您的睡眠质量良好，建议保持规律的作息时间，继续保持每晚7-8小时的睡眠时间。</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium text-yellow-800">饮食建议</h3>
            <p className="text-yellow-700 mt-1">建议增加水果蔬菜的摄入，保持均衡饮食，控制盐分摄入以维持健康的血压水平。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAnalysis;