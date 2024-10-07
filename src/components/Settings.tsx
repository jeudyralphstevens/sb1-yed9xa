import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4 flex items-center">
        <SettingsIcon className="mr-2 text-blue-600" />
        Settings
      </h1>
      <p className="text-gray-600">
        Configure your BonBras application settings here. This page is under construction.
      </p>
    </div>
  );
};

export default Settings;