import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isListening, setIsListening] = useState(false)

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
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50'}`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
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

      {/* Header */}
      <header className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-farming-green mb-4">
              শস্যঘড়ি
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              আপনার স্মার্ট কৃষি সহকারী
            </p>
            
            {/* Voice button for main title */}
            <button
              onClick={() => speakText('শস্যঘড়ি - আপনার স্মার্ট কৃষি সহকারী')}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
              disabled={isListening}
            >
              <span>🔊</span>
              <span>{isListening ? 'শুনছি...' : 'শিরোনাম শুনুন'}</span>
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            সঠিক সময়ে ফসল রোপণ ও সংগ্রহ, আবহাওয়া পূর্বাভাস, এবং কৃষি জ্ঞানের মাধ্যমে 
            আপনার কৃষি উৎপাদন বৃদ্ধি করুন। আমরা আপনাকে প্রতিটি ধাপে গাইড করব।
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard" className="btn-primary w-full sm:w-auto">
              🌱 শুরু করুন
            </Link>
            <Link to="/dashboard" className="btn-secondary w-full sm:w-auto">
              🔐 লগইন
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            কেন শস্যঘড়ি?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                স্মার্ট ক্যালেন্ডার
              </h3>
              <p className="text-gray-600">
                ফসল রোপণ ও সংগ্রহের সঠিক সময় জানুন। 
                আবহাওয়া ও মৌসুম অনুযায়ী পরামর্শ পান।
              </p>
              <button
                onClick={() => speakText('স্মার্ট ক্যালেন্ডার: ফসল রোপণ ও সংগ্রহের সঠিক সময় জানুন। আবহাওয়া ও মৌসুম অনুযায়ী পরামর্শ পান।')}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center space-x-2 mx-auto"
                disabled={isListening}
              >
                <span>🔊</span>
                <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
              </button>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="text-4xl mb-4">☔</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                আবহাওয়া পূর্বাভাস
              </h3>
              <p className="text-gray-600">
                ৭ দিনের বিস্তারিত আবহাওয়া পূর্বাভাস। 
                বৃষ্টি, তাপমাত্রা ও আর্দ্রতা সম্পর্কে জানুন।
              </p>
              <button
                onClick={() => speakText('আবহাওয়া পূর্বাভাস: ৭ দিনের বিস্তারিত আবহাওয়া পূর্বাভাস। বৃষ্টি, তাপমাত্রা ও আর্দ্রতা সম্পর্কে জানুন।')}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2 mx-auto"
                disabled={isListening}
              >
                <span>🔊</span>
                <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
              </button>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                কৃষি জ্ঞান ভাণ্ডার
              </h3>
              <p className="text-gray-600">
                আধুনিক কৃষি প্রযুক্তি, রোগ ব্যবস্থাপনা, 
                এবং মাটির স্বাস্থ্য সম্পর্কিত টিপস।
              </p>
              <button
                onClick={() => speakText('কৃষি জ্ঞান ভাণ্ডার: আধুনিক কৃষি প্রযুক্তি, রোগ ব্যবস্থাপনা, এবং মাটির স্বাস্থ্য সম্পর্কিত টিপস।')}
                className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center space-x-2 mx-auto"
                disabled={isListening}
              >
                <span>🔊</span>
                <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Assistance Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            🔊 ভয়েস সহায়তা
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            প্রতিটি তথ্য ও পরামর্শ বাংলায় শুনতে পারেন। 
            আপনার ব্রাউজার ভয়েস সাপোর্ট করলে 🔊 বোতামে ক্লিক করে শুনুন।
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">সহজ ব্যবহার</h3>
              <p className="text-gray-600">বড় বোতাম ও আইকন দিয়ে সহজে ব্যবহার করুন</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">অফলাইন সাপোর্ট</h3>
              <p className="text-gray-600">ইন্টারনেট ছাড়াও সর্বশেষ তথ্য দেখুন</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">
            🌾 কৃষকদের জন্য, কৃষকদের দ্বারা নির্মিত 🌾
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © ২০২৪ শস্যঘড়ি - স্মার্ট কৃষি সহকারী
          </p>
          
          {/* Voice button for footer */}
          <button
            onClick={() => speakText('কৃষকদের জন্য, কৃষকদের দ্বারা নির্মিত। শস্যঘড়ি - স্মার্ট কৃষি সহকারী')}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2 mx-auto"
            disabled={isListening}
          >
            <span>🔊</span>
            <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
