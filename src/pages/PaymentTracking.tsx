import React from 'react'
import { BarChart, Calendar, Download } from 'lucide-react'

const PaymentTracking: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payment Tracking</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600">Total Collected (This Month)</p>
            <p className="text-2xl font-bold text-blue-600">$12,450</p>
          </div>
          <div>
            <p className="text-gray-600">Overdue Payments</p>
            <p className="text-2xl font-bold text-red-600">$1,200</p>
          </div>
          <div>
            <p className="text-gray-600">Upcoming Payments (Next 7 Days)</p>
            <p className="text-2xl font-bold text-green-600">$3,500</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center mr-2">
            <BarChart className="mr-2" /> Generate Report
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <Download className="mr-2" /> Export Data
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Payments</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 text-left">Driver</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Add sample data here */}
            <tr className="border-b border-gray-200">
              <td className="py-2">John Doe</td>
              <td className="py-2">$150</td>
              <td className="py-2">2023-04-15</td>
              <td className="py-2 text-green-600">Paid</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2">Jane Smith</td>
              <td className="py-2">$200</td>
              <td className="py-2">2023-04-14</td>
              <td className="py-2 text-red-600">Overdue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentTracking