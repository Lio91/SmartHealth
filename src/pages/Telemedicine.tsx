import React from 'react';
import { Video, Phone, Calendar, MessageSquare, Clock } from 'lucide-react';

const Telemedicine = () => {
  const [appointments] = React.useState([
    {
      id: 1,
      doctor: '张医生',
      specialty: '心内科',
      date: '2024-03-20',
      time: '14:30',
      type: '视频问诊',
      status: '待进行',
    },
    {
      id: 2,
      doctor: '李医生',
      specialty: '全科',
      date: '2024-03-22',
      time: '10:00',
      type: '电话问诊',
      status: '待进行',
    },
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">远程医疗</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <Video className="h-8 w-8 text-indigo-600 mb-3" />
          <h3 className="font-semibold text-gray-900">视频问诊</h3>
          <p className="text-gray-600 text-sm mt-1">与医生进行视频通话</p>
        </button>

        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <Phone className="h-8 w-8 text-green-600 mb-3" />
          <h3 className="font-semibold text-gray-900">电话问诊</h3>
          <p className="text-gray-600 text-sm mt-1">通过电话与医生交流</p>
        </button>

        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <MessageSquare className="h-8 w-8 text-blue-600 mb-3" />
          <h3 className="font-semibold text-gray-900">图文问诊</h3>
          <p className="text-gray-600 text-sm mt-1">发送消息和图片咨询</p>
        </button>

        <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <Calendar className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-gray-900">预约挂号</h3>
          <p className="text-gray-600 text-sm mt-1">在线预约门诊服务</p>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">我的预约</h2>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                  <p className="text-gray-600">{appointment.specialty}</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  {appointment.status}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  {appointment.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  {appointment.time}
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
                  取消预约
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  进入问诊
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">就诊记录</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between">
                <span className="font-medium">心内科复诊</span>
                <span className="text-gray-600">2024-03-15</span>
              </div>
              <p className="text-gray-600 mt-2">诊断：高血压</p>
              <button className="mt-2 text-indigo-600 hover:text-indigo-700">
                查看详情
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">健康档案</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>血型</span>
              <span className="font-medium">A型</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>过敏史</span>
              <span className="font-medium">无</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>慢性病史</span>
              <span className="font-medium">高血压</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;