import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Activity, Bell, User, Settings, Menu } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import HealthAnalysis from './pages/HealthAnalysis';
import DeviceManagement from './pages/DeviceManagement';
import Telemedicine from './pages/Telemedicine';
import Profile from './pages/Profile';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* 顶部导航栏 */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="md:hidden p-2"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <Activity className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">智慧健康管理平台</span>
              </div>
              <div className="flex items-center space-x-4">
                <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
                <Link to="/profile">
                  <User className="h-6 w-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* 侧边导航栏 */}
          <aside className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-64 bg-white shadow-lg h-screen fixed md:sticky top-0 left-0`}>
            <div className="p-4">
              <nav className="space-y-2">
                <Link to="/" className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 rounded-lg">
                  <Activity className="h-5 w-5 mr-3" />
                  首页
                </Link>
                <Link to="/health-analysis" className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 rounded-lg">
                  <Activity className="h-5 w-5 mr-3" />
                  健康分析
                </Link>
                <Link to="/device-management" className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 rounded-lg">
                  <Settings className="h-5 w-5 mr-3" />
                  设备管理
                </Link>
                <Link to="/telemedicine" className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 rounded-lg">
                  <Activity className="h-5 w-5 mr-3" />
                  远程医疗
                </Link>
              </nav>
            </div>
          </aside>

          {/* 主要内容区域 */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/health-analysis" element={<HealthAnalysis />} />
              <Route path="/device-management" element={<DeviceManagement />} />
              <Route path="/telemedicine" element={<Telemedicine />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;