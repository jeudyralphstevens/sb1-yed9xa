import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const DriverManagement: React.FC = () => {
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'John Doe', status: 'Active', paymentStatus: 'Up to date' },
    { id: 2, name: 'Jane Smith', status: 'Inactive', paymentStatus: 'Overdue' },
  ])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Driver Management</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 flex items-center">
        <Plus className="mr-2" /> Add New Driver
      </button>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Payment Status</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4">{driver.id}</td>
              <td className="py-3 px-4">{driver.name}</td>
              <td className="py-3 px-4">{driver.status}</td>
              <td className="py-3 px-4">{driver.paymentStatus}</td>
              <td className="py-3 px-4">
                <button className="text-blue-500 hover:underline mr-2">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DriverManagement