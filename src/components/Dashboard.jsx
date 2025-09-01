import React, { useState } from 'react'
import Navigation from './Navigation'

const Dashboard = () => {
  const [isOffline, setIsOffline] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isListening, setIsListening] = useState(false)

  // Placeholder data for crop calendar
  const cropCalendar = [
    { crop: 'ধান', action: 'রোপণ', date: '১৫ মার্চ', status: 'upcoming', icon: '🌾' },
    { crop: 'গম', action: 'সংগ্রহ', date: '২০ মার্চ', status: 'urgent', icon: '🌿' },
    { crop: 'ভুট্টা', action: 'রোপণ', date: '২৫ মার্চ', status: 'upcoming', icon: '🌽' },
    { crop: 'সবজি', action: 'সেচ', date: 'আজ', status: 'today', icon: '🥦' },
  ]

  // Placeholder data for smart suggestions
  const smartSuggestions = [
    '🌧️ আগামী ৩ দিনে ভারী বৃষ্টি হবে - ধান রোপণের জন্য উপযুক্ত সময়',
    '🌡️ তাপমাত্রা ৩৫°C এর উপরে - সকালে বা সন্ধ্যায় সেচ দিন',
    '🌱 মাটির আর্দ্রতা কম - জৈব সার প্রয়োগ করুন',
    '☀️ রোদের তীব্রতা বেশি - ছায়া দেওয়া গাছপালা রক্ষা করুন',
  ]

  // Placeholder data for weather forecast
  const weatherForecast = [
    { day: 'আজ', temp: '৩২°C', condition: '☀️', rain: '০%' },
    { day: 'কাল', temp: '৩০°C', condition: '⛅', rain: '১০%' },
    { day: 'পরশু', temp: '২৮°C', condition: '🌧️', rain: '৮০%' },
    { day: 'মঙ্গল', temp: '২৯°C', condition: '🌧️', rain: '৭০%' },
    { day: 'বুধ', temp: '৩১°C', condition: '⛅', rain: '২০%' },
    { day: 'বৃহস্পতি', temp: '৩৩°C', condition: '☀️', rain: '০%' },
    { day: 'শুক্র', temp: '৩২°C', condition: '☀️', rain: '৫%' },
  ]

  // Placeholder data for alerts
  const alerts = [
    {
      type: 'danger',
      icon: '☔',
      title: 'ভারী বৃষ্টি সতর্কতা',
      message: 'ভারী বৃষ্টি হবে ৩ দিনের মধ্যে - ফসল রক্ষার ব্যবস্থা নিন',
    },
    {
      type: 'success',
      icon: '🌾',
      title: 'ধান রোপণের সময়',
      message: 'এই সপ্তাহে ধান রোপণের উপযুক্ত সময় - মাটি প্রস্তুত করুন',
    },
    {
      type: 'info',
      icon: '🌡️',
      title: 'তাপমাত্রা বৃদ্ধি',
      message: 'তাপমাত্রা বৃদ্ধি পাচ্ছে - সেচের সময় বাড়ান',
    },
    {
      type: 'warning',
      icon: '🐛',
      title: 'কীটপতঙ্গ সতর্কতা',
      message: 'ধান ক্ষেতে কীটপতঙ্গের আক্রমণ দেখা যাচ্ছে - ব্যবস্থা নিন',
    },
  ]

  // Weather map data for Bangladesh
  const weatherMap = [
    { region: 'রাজশাহী', condition: '☀️', temp: '৩২°C' },
    { region: 'ঢাকা', condition: '⛅', temp: '৩০°C' },
    { region: 'চট্টগ্রাম', condition: '🌧️', temp: '২৮°C' },
    { region: 'সিলেট', condition: '🌧️', temp: '২৭°C' },
    { region: 'খুলনা', condition: '☀️', temp: '৩১°C' },
    { region: 'বরিশাল', condition: '⛅', temp: '২৯°C' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200'
      case 'today': return 'text-green-600 bg-green-50 border-green-200'
      case 'upcoming': return 'text-blue-600 bg-blue-50 border-blue-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getAlertType = (type) => {
    switch (type) {
      case 'danger': return 'alert-danger'
      case 'success': return 'alert-success'
      case 'warning': return 'alert-warning'
      case 'info': return 'alert-info'
      default: return 'alert-info'
    }
  }

  // Voice assistance function
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      setIsListening(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'bn-IN'
      utterance.onend = () => setIsListening(false)
      speechSynthesis.speak(utterance)
    } else {
      alert('আপনার ব্রাউজারে ভয়েস সাপোর্ট নেই')
    }
  }

  // Emergency help function
  const handleEmergencyHelp = () => {
    alert('🚨 জরুরি সাহায্যের জন্য কৃষি অফিসে যোগাযোগ করুন: ১৬১২৩')
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <Navigation />
      
      {/* Offline Mode Indicator */}
      {isOffline && (
        <div className="bg-yellow-500 text-white text-center py-2 px-4">
          📴 ইন্টারনেট নেই – সর্বশেষ তথ্য দেখানো হচ্ছে
        </div>
      )}

      {/* Emergency SOS Button */}
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={handleEmergencyHelp}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg animate-pulse"
          title="জরুরি সাহায্য"
        >
          🚨
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <div className="fixed top-20 left-4 z-50">
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full shadow-lg ${
            isDarkMode ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white'
          }`}
          title={isDarkMode ? 'আলো মোড' : 'অন্ধকার মোড'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            স্বাগতম, কৃষক ভাই! 👨‍🌾
          </h1>
          <p className="text-gray-600">
            আজ {new Date().toLocaleDateString('bn-BD')} - আপনার কৃষি পরিকল্পনা দেখুন
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Crop Calendar & Smart Suggestions */}
          <div className="space-y-6">
            {/* Interactive Crop Calendar */}
            <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                📅 ফসল ক্যালেন্ডার
              </h2>
              <div className="space-y-3">
                {cropCalendar.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getStatusColor(item.status)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-semibold">{item.crop}</p>
                          <p className="text-sm opacity-80">{item.action}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{item.date}</p>
                        <p className="text-xs opacity-70">
                          {item.status === 'urgent' && 'জরুরি'}
                          {item.status === 'today' && 'আজ'}
                          {item.status === 'upcoming' && 'আসছে'}
                        </p>
                      </div>
                    </div>
                    {/* Voice button for each calendar item */}
                    <button
                      onClick={() => speakText(`${item.crop} ${item.action} ${item.date}`)}
                      className="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                      disabled={isListening}
                    >
                      <span>🔊</span>
                      <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Suggestions */}
            <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                💡 স্মার্ট পরামর্শ
              </h2>
              <div className="space-y-3">
                {smartSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-blue-800">{suggestion}</p>
                    <button
                      onClick={() => speakText(suggestion)}
                      className="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                      disabled={isListening}
                    >
                      <span>🔊</span>
                      <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Weather & Alerts */}
          <div className="space-y-6">
            {/* Weather Forecast */}
            <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                ☔ আবহাওয়া পূর্বাভাস
              </h2>
              <div className="grid grid-cols-7 gap-2">
                {weatherForecast.map((day, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">{day.day}</p>
                    <p className="text-2xl mb-1">{day.condition}</p>
                    <p className="text-sm font-semibold text-gray-800">{day.temp}</p>
                    <p className="text-xs text-gray-500">{day.rain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Map Visualization */}
            <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                🗺️ বাংলাদেশ আবহাওয়া মানচিত্র
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {weatherMap.map((region, index) => (
                  <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs font-medium text-gray-600">{region.region}</p>
                    <p className="text-lg">{region.condition}</p>
                    <p className="text-xs text-gray-800">{region.temp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Alerts */}
            <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                🚨 স্মার্ট সতর্কতা
              </h2>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className={`alert-card ${getAlertType(alert.type)}`}>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{alert.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{alert.title}</h4>
                        <p className="text-sm">{alert.message}</p>
                      </div>
                    </div>
                    {/* Voice button for each alert */}
                    <button
                      onClick={() => speakText(`${alert.title}: ${alert.message}`)}
                      className="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                      disabled={isListening}
                    >
                      <span>🔊</span>
                      <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🚀 দ্রুত কাজ
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 bg-farming-green text-white rounded-lg hover:bg-farming-dark-green transition-colors">
                <div className="text-2xl mb-2">🌾</div>
                <p className="font-medium">নতুন ফসল যোগ করুন</p>
              </button>
              <button className="p-4 bg-weather-blue text-white rounded-lg hover:bg-blue-600 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <p className="font-medium">রিপোর্ট দেখুন</p>
              </button>
              <button className="p-4 bg-soil-brown text-white rounded-lg hover:bg-yellow-600 transition-colors">
                <div className="text-2xl mb-2">🌱</div>
                <p className="font-medium">মাটি পরীক্ষা</p>
              </button>
              <button className="p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">📞</div>
                <p className="font-medium">সাহায্য চাই</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
