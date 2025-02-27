import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

const data = [
  { name: '周一', 心率: 75, 血压: 120 },
  { name: '周二', 心率: 72, 血压: 118 },
  { name: '周三', 心率: 78, 血压: 122 },
  { name: '周四', 心率: 74, 血压: 119 },
  { name: '周五', 心率: 76, 血压: 121 },
  { name: '周六', 心率: 71, 血压: 117 },
  { name: '周日', 心率: 73, 血压: 118 },
];

const HealthTrends = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <Activity className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">健康趋势</h2>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="心率" stroke="#ef4444" />
          <Line type="monotone" dataKey="血压" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthTrends;