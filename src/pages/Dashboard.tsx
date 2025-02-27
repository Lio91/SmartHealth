import React from 'react';
import HealthMetrics from '../components/HealthMetrics';
import EnvironmentData from '../components/EnvironmentData';
import Notifications from '../components/Notifications';
import DeviceConnection from '../components/DeviceConnection';
import HealthTrends from '../components/HealthTrends';
import CommunityEnvironment from '../components/CommunityEnvironment';
import HealthReminders from '../components/HealthReminders';
import CommunityActivities from '../components/CommunityActivities';
import ElderlyChildCare from '../components/ElderlyChildCare';
import HealthPoints from '../components/HealthPoints';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">健康概览</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthMetrics />
        <EnvironmentData />
        <Notifications />
        <HealthTrends />
        <DeviceConnection />
        <CommunityEnvironment />
        <HealthReminders />
        <CommunityActivities />
        <ElderlyChildCare />
        <HealthPoints />
      </div>
    </div>
  );
};

export default Dashboard;