import React, { useState } from 'react'
import Navigation from './Navigation'

const CropSelection = () => {
  const [selectedCrop, setSelectedCrop] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isListening, setIsListening] = useState(false)

  // Placeholder data for crops
  const crops = [
    {
      id: 'rice',
      name: 'ধান',
      icon: '🌾',
      description: 'বাংলাদেশের প্রধান খাদ্যশস্য',
      sowingTime: 'জ্যৈষ্ঠ-আষাঢ় (জুন-জুলাই)',
      harvestingTime: 'অগ্রহায়ণ-পৌষ (নভেম্বর-ডিসেম্বর)',
      tips: [
        'মাটি ভালভাবে চাষ করে নিন',
        'বীজ ২৪ ঘণ্টা পানিতে ভিজিয়ে রাখুন',
        'সারি থেকে সারির দূরত্ব ২০-২৫ সেমি রাখুন',
        'নিয়মিত সেচ দিন',
      ],
      weather: 'উষ্ণ ও আর্দ্র আবহাওয়া উপযুক্ত',
      soil: 'দোআঁশ মাটি সবচেয়ে ভাল',
    },
    {
      id: 'wheat',
      name: 'গম',
      icon: '🌿',
      description: 'শীতকালীন গুরুত্বপূর্ণ শস্য',
      sowingTime: 'কার্তিক-অগ্রহায়ণ (অক্টোবর-নভেম্বর)',
      harvestingTime: 'ফাল্গুন-চৈত্র (ফেব্রুয়ারি-মার্চ)',
      tips: [
        'শীতকালে রোপণ করুন',
        'মাটি শুকনো রাখুন',
        'নাইট্রোজেন সার বেশি দিন',
        'জলাবদ্ধতা এড়িয়ে চলুন',
      ],
      weather: 'শীতকালীন শুষ্ক আবহাওয়া',
      soil: 'দোআঁশ থেকে ভারী মাটি',
    },
    {
      id: 'corn',
      name: 'ভুট্টা',
      icon: '🌽',
      description: 'উচ্চ পুষ্টিমান সম্পন্ন শস্য',
      sowingTime: 'ফাল্গুন-চৈত্র (ফেব্রুয়ারি-মার্চ)',
      harvestingTime: 'আষাঢ়-শ্রাবণ (জুলাই-আগস্ট)',
      tips: [
        'গরমকালে রোপণ করুন',
        'মাটি গভীরভাবে চাষ করুন',
        'সারি থেকে সারির দূরত্ব ৬০-৭৫ সেমি',
        'নিয়মিত আগাছা পরিষ্কার করুন',
      ],
      weather: 'উষ্ণ ও আর্দ্র আবহাওয়া',
      soil: 'দোআঁশ মাটি উপযুক্ত',
    },
    {
      id: 'vegetables',
      name: 'সবজি',
      icon: '🥦',
      description: 'নানা ধরনের সবজি চাষ',
      sowingTime: 'সারা বছর (মৌসুম অনুযায়ী)',
      harvestingTime: 'রোপণের ৪৫-৯০ দিন পর',
      tips: [
        'মৌসুম অনুযায়ী সবজি বেছে নিন',
        'মাটি ভালভাবে প্রস্তুত করুন',
        'নিয়মিত সেচ ও সার দিন',
        'কীটপতঙ্গ নিয়ন্ত্রণ করুন',
      ],
      weather: 'মৌসুম অনুযায়ী পরিবর্তনশীল',
      soil: 'জৈব পদার্থ সমৃদ্ধ মাটি',
    },
    {
      id: 'pulses',
      name: 'ডাল',
      icon: '🫘',
      description: 'প্রোটিনের উৎস ডালশস্য',
      sowingTime: 'আশ্বিন-কার্তিক (সেপ্টেম্বর-অক্টোবর)',
      harvestingTime: 'মাঘ-ফাল্গুন (জানুয়ারি-ফেব্রুয়ারি)',
      tips: [
        'শীতকালে রোপণ করুন',
        'মাটি শুকনো রাখুন',
        'রাইজোবিয়াম সার ব্যবহার করুন',
        'জলাবদ্ধতা এড়িয়ে চলুন',
      ],
      weather: 'শীতকালীন শুষ্ক আবহাওয়া',
      soil: 'দোআঁশ থেকে ভারী মাটি',
    },
    {
      id: 'oilseeds',
      name: 'তেলবীজ',
      icon: '🌻',
      description: 'তেল উৎপাদনকারী ফসল',
      sowingTime: 'কার্তিক-অগ্রহায়ণ (অক্টোবর-নভেম্বর)',
      harvestingTime: 'ফাল্গুন-চৈত্র (ফেব্রুয়ারি-মার্চ)',
      tips: [
        'শীতকালে রোপণ করুন',
        'মাটি ভালভাবে প্রস্তুত করুন',
        'সারি থেকে সারির দূরত্ব ৩০-৪৫ সেমি',
        'নিয়মিত আগাছা পরিষ্কার করুন',
      ],
      weather: 'শীতকালীন শুষ্ক আবহাওয়া',
      soil: 'দোআঁশ মাটি উপযুক্ত',
    },
  ]

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

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <Navigation />
      
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
            🌾 ফসল নির্বাচন করুন
          </h1>
          <p className="text-gray-600">
            আপনার এলাকার আবহাওয়া ও মাটির ধরন অনুযায়ী উপযুক্ত ফসল বেছে নিন
          </p>
          
          {/* Voice button for header */}
          <button
            onClick={() => speakText('ফসল নির্বাচন করুন। আপনার এলাকার আবহাওয়া ও মাটির ধরন অনুযায়ী উপযুক্ত ফসল বেছে নিন')}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            disabled={isListening}
          >
            <span>🔊</span>
            <span>{isListening ? 'শুনছি...' : 'শিরোনাম শুনুন'}</span>
          </button>
        </div>

        {/* Crop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {crops.map((crop) => (
            <button
              key={crop.id}
              onClick={() => setSelectedCrop(crop)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                selectedCrop?.id === crop.id
                  ? 'border-farming-green bg-green-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-farming-green hover:bg-green-50'
              }`}
            >
              <div className="text-4xl mb-2">{crop.icon}</div>
              <p className="font-semibold text-gray-800 text-sm">{crop.name}</p>
            </button>
          ))}
        </div>

        {/* Selected Crop Details */}
        {selectedCrop && (
          <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-5xl">{selectedCrop.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedCrop.name}</h2>
                <p className="text-gray-600">{selectedCrop.description}</p>
              </div>
              
              {/* Voice button for crop description */}
              <button
                onClick={() => speakText(`${selectedCrop.name}: ${selectedCrop.description}`)}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                disabled={isListening}
              >
                <span>🔊</span>
                <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column - Basic Info */}
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-2">🌱 রোপণের সময়</h3>
                  <p className="text-blue-700">{selectedCrop.sowingTime}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-2">🌾 সংগ্রহের সময়</h3>
                  <p className="text-green-700">{selectedCrop.harvestingTime}</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-2">🌡️ আবহাওয়া</h3>
                  <p className="text-yellow-700">{selectedCrop.weather}</p>
                </div>

                <div className="bg-brown-50 p-4 rounded-lg border-l-4 border-soil-brown">
                  <h3 className="font-semibold text-brown-800 mb-2">🌱 মাটি</h3>
                  <p className="text-brown-700">{selectedCrop.soil}</p>
                </div>
              </div>

              {/* Right Column - Tips */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">
                  💡 গুরুত্বপূর্ণ টিপস
                </h3>
                <div className="space-y-3">
                  {selectedCrop.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-farming-green text-lg">✓</span>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
                
                {/* Voice button for tips */}
                <button
                  onClick={() => speakText(`${selectedCrop.name} চাষের টিপস: ${selectedCrop.tips.join('. ')}`)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                  disabled={isListening}
                >
                  <span>🔊</span>
                  <span>{isListening ? 'শুনছি...' : 'টিপস শুনুন'}</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                📅 ক্যালেন্ডারে যোগ করুন
              </button>
              <button className="btn-secondary">
                📚 আরও জানুন
              </button>
              <button className="bg-soil-brown hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                🌱 রোপণ শুরু করুন
              </button>
            </div>
          </div>
        )}

        {/* Seasonal Recommendations */}
        <div className="mt-8">
          <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🌤️ এই মৌসুমে উপযুক্ত ফসল
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl mb-2">🌾</div>
                <h3 className="font-semibold text-gray-800">ধান</h3>
                <p className="text-sm text-gray-600">জ্যৈষ্ঠ-আষাঢ় মাসে রোপণ</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">🥦</div>
                <h3 className="font-semibold text-gray-800">গ্রীষ্মকালীন সবজি</h3>
                <p className="text-sm text-gray-600">চালকুমড়া, করলা, ঢেঁড়স</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl mb-2">🌽</div>
                <h3 className="font-semibold text-gray-800">ভুট্টা</h3>
                <p className="text-sm text-gray-600">ফাল্গুন-চৈত্র মাসে রোপণ</p>
              </div>
            </div>
            
            {/* Voice button for seasonal recommendations */}
            <div className="text-center mt-4">
              <button
                onClick={() => speakText('এই মৌসুমে উপযুক্ত ফসল: ধান জ্যৈষ্ঠ-আষাঢ় মাসে রোপণ, গ্রীষ্মকালীন সবজি, ভুট্টা ফাল্গুন-চৈত্র মাসে রোপণ')}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2 mx-auto"
                disabled={isListening}
              >
                <span>🔊</span>
                <span>{isListening ? 'শুনছি...' : 'মৌসুমি পরামর্শ শুনুন'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CropSelection
