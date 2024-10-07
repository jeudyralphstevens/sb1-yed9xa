import React from 'react'
import { Users, DollarSign, AlertTriangle, Calendar } from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<Users />} title="Active Drivers" value="42" />
        <DashboardCard icon={<DollarSign />} title="Pending Payments" value="15" />
        <DashboardCard icon={<AlertTriangle />} title="Overdue Accounts" value="3" />
        <DashboardCard icon={<Calendar />} title="Upcoming Renewals" value="7" />
      </div>
      {/* Add more dashboard components here */}
    </div>
  )
}

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
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

export default Dashboard