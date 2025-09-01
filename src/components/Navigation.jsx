import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/dashboard', label: 'ড্যাশবোর্ড', icon: '🏠' },
    { path: '/crops', label: 'ফসল নির্বাচন', icon: '🌾' },
    { path: '/knowledge', label: 'জ্ঞান ভাণ্ডার', icon: '📚' },
    { path: '/profile', label: 'প্রোফাইল', icon: '👤' },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-2 border-farming-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold text-farming-green">শস্যঘড়ি</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-farming-green bg-green-50'
                    : 'text-gray-600 hover:text-farming-green hover:bg-green-50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-farming-green">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-white border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'text-farming-green bg-green-50'
                  : 'text-gray-600 hover:text-farming-green hover:bg-green-50'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
