import React from 'react';
import { Users, DollarSign, Truck, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <Users className="mr-2 text-blue-600" />
          Active Drivers
        </h2>
        <p className="text-3xl font-bold text-blue-600">24</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <DollarSign className="mr-2 text-green-600" />
          Total Payments
        </h2>
        <p className="text-3xl font-bold text-green-600">$12,450</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <Truck className="mr-2 text-purple-600" />
          Fleet Status
        </h2>
        <p className="text-3xl font-bold text-purple-600">18/20</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <AlertTriangle className="mr-2 text-red-600" />
          Alerts
        </h2>
        <p className="text-3xl font-bold text-red-600">3</p>
      </div>
    </div>
  );
};

export default Dashboard;