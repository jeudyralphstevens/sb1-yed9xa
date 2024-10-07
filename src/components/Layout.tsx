import React from 'react'
import { Link } from 'react-router-dom'
import { Bike, Users, DollarSign, Truck, Home, Settings } from 'lucide-react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold flex items-center">
            <Bike className="mr-2" />
            BonBras
          </h1>
        </div>
        <nav className="mt-8">
          <Link to="/" className="block py-2 px-4 hover:bg-blue-700">
            <Home className="inline-block mr-2" />
            Dashboard
          </Link>
          <Link to="/drivers" className="block py-2 px-4 hover:bg-blue-700">
            <Users className="inline-block mr-2" />
            Driver Management
          </Link>
          <Link to="/payments" className="block py-2 px-4 hover:bg-blue-700">
            <DollarSign className="inline-block mr-2" />
            Payment Tracking
          </Link>
          <Link to="/fleet" className="block py-2 px-4 hover:bg-blue-700">
            <Truck className="inline-block mr-2" />
            Fleet Management
          </Link>
          <Link to="/settings" className="block py-2 px-4 hover:bg-blue-700">
            <Settings className="inline-block mr-2" />
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout