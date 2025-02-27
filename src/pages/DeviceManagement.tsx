import React from 'react';
import { Smartphone, Watch, Link, Plus, Trash2 } from 'lucide-react';

const DeviceManagement = () => {
  const [devices] = React.useState([
    { id: 1, name: '智能手环', type: 'watch', status: '已连接', battery: 85 },
    { id: 2, name: '血压计', type: 'health', status: '未连接', battery: 90 },
    { id: 3, name: '体温计', type: 'health', status: '已连接', battery: 75 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">设备管理</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          添加设备
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <div key={device.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                {device.type === 'watch' ? (
                  <Watch className="h-6 w-6 text-indigo-600" />
                ) : (
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                )}
                <span className="ml-2 text-lg font-semibold">{device.name}</span>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">状态</span>
                <span className={`font-medium ${
                  device.status === '已连接' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {device.status}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">电量</span>
                <div className="flex items-center">
                  <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${device.battery}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{device.battery}%</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100">
                <Link className="h-5 w-5 mr-2" />
                设备详情
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">设备使用指南</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800">如何添加新设备</h3>
            <p className="text-blue-700 mt-1">
              1. 点击"添加设备"按钮<br />
              2. 选择设备类型<br />
              3. 按照提示完成配对
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800">设备维护建议</h3>
            <p className="text-green-700 mt-1">
              1. 定期清洁设备<br />
              2. 保持设备充电<br />
              3. 避免设备受潮
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceManagement;