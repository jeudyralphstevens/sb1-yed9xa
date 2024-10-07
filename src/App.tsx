import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import DriverManagement from './components/DriverManagement';
import PaymentTracking from './components/PaymentTracking';
import FleetManagement from './components/FleetManagement';
import Settings from './components/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/drivers" element={<DriverManagement />} />
          <Route path="/payments" element={<PaymentTracking />} />
          <Route path="/fleet" element={<FleetManagement />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;