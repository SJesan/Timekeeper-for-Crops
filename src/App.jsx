import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import CropSelection from './components/CropSelection'
import KnowledgeHub from './components/KnowledgeHub'
import FarmerProfile from './components/FarmerProfile'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crops" element={<CropSelection />} />
        <Route path="/knowledge" element={<KnowledgeHub />} />
        <Route path="/profile" element={<FarmerProfile />} />
      </Routes>
    </div>
  )
}

export default App
