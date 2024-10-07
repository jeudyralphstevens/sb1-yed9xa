import React from 'react'
import { DollarSign, Calendar, Truck, User } from 'lucide-react'

const DriverPortal: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Driver Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <DriverCard icon={<DollarSign />} title="Balance Due" value="$150" />
        <DriverCard icon={<Calendar />} title="Next Payment" value="2023-04-20" />
        <DriverCard icon={<Truck />} title="Motorcycle" value="ABC-123" />
        <DriverCard icon={<User />} title="Contract Status" value="Active" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Add sample data here */}
            <tr className="border-b border-gray-200">
              <td className="py-2">2023-04-10</td>
              <td className="py-2">$150</td>
              <td className="py-2 text-green-600">Paid</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2">2023-04-03</td>
              <td className="py-2">$150</td>
              <td className="py-2 text-green-600">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Motorcycle Maintenance</h2>
        <p className="mb-2"><strong>Next Service Date:</strong> 2023-05-15</p>
        <p className="mb-4"><strong>Mileage:</strong> 15,230 km</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Report Issue</button>
      </div>
    </div>
  )
}

const DriverCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
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

export default DriverPortal