import React from 'react'
import { Truck, Tool, Calendar } from 'lucide-react'

const FleetManagement: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Fleet Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <FleetCard icon={<Truck />} title="Total Motorcycles" value="50" />
        <FleetCard icon={<Tool />} title="Scheduled Maintenance" value="3" />
        <FleetCard icon={<Calendar />} title="Upcoming Renewals" value="5" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Motorcycle Status</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 text-left">Registration</th>
              <th className="py-2 text-left">Driver</th>
              <th className="py-2 text-left">Status</th>
              <th className="py-2 text-left">Last Maintenance</th>
              <th className="py-2 text-left">Next Service</th>
            </tr>
          </thead>
          <tbody>
            {/* Add sample data here */}
            <tr className="border-b border-gray-200">
              <td className="py-2">ABC-123</td>
              <td className="py-2">John Doe</td>
              <td className="py-2 text-green-600">Active</td>
              <td className="py-2">2023-03-15</td>
              <td className="py-2">2023-06-15</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2">XYZ-789</td>
              <td className="py-2">Jane Smith</td>
              <td className="py-2 text-yellow-600">Maintenance</td>
              <td className="py-2">2023-04-01</td>
              <td className="py-2">2023-07-01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const FleetCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-500">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  )
}

export default FleetManagement