import React, { useState } from 'react'
import Navigation from './Navigation'

const KnowledgeHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isListening, setIsListening] = useState(false)

  // Placeholder data for knowledge articles
  const articles = [
    {
      id: 1,
      title: 'আধুনিক কৃষি প্রযুক্তি',
      category: 'technology',
      icon: '🚜',
      image: '🌾',
      description: 'ড্রোন, সেন্সর, এবং স্মার্ট সেচ ব্যবস্থার মাধ্যমে আধুনিক কৃষি প্রযুক্তি ব্যবহার করে উৎপাদন বৃদ্ধি করুন।',
      content: [
        'ড্রোন ব্যবহার করে ফসলের স্বাস্থ্য পর্যবেক্ষণ',
        'সেন্সর দিয়ে মাটির আর্দ্রতা ও পিএইচ মাপা',
        'স্মার্ট সেচ ব্যবস্থার মাধ্যমে পানির সাশ্রয়',
        'জিপিএস টেকনোলজি দিয়ে ক্ষেতের মানচিত্র তৈরি',
      ],
      author: 'ড. আহমেদ হোসেন',
      date: '১৫ মার্চ, ২০২৪',
      readTime: '৫ মিনিট',
    },
    {
      id: 2,
      title: 'রোগ ব্যবস্থাপনা',
      category: 'disease',
      icon: '🦠',
      image: '🌿',
      description: 'ফসলের বিভিন্ন রোগ চিহ্নিত করে সঠিক ব্যবস্থা নিন। জৈব ও রাসায়নিক পদ্ধতির সমন্বয়ে রোগ নিয়ন্ত্রণ করুন।',
      content: [
        'ধান ক্ষেতে ব্লাস্ট রোগের লক্ষণ ও প্রতিকার',
        'গম ক্ষেতে রাস্ট রোগের ব্যবস্থাপনা',
        'সবজি ক্ষেতে পাউডারি মিলডিউ নিয়ন্ত্রণ',
        'জৈব কীটনাশকের ব্যবহার ও প্রস্তুত প্রণালী',
      ],
      author: 'ড. ফাতেমা বেগম',
      date: '১২ মার্চ, ২০২৪',
      readTime: '৭ মিনিট',
    },
    {
      id: 3,
      title: 'মাটির স্বাস্থ্য টিপস',
      category: 'soil',
      icon: '🌱',
      image: '🌍',
      description: 'মাটির স্বাস্থ্য ভালো রাখার জন্য জৈব পদার্থ, সার, এবং সেচের সঠিক ব্যবহার জানুন।',
      content: [
        'মাটির পিএইচ মাত্রা পরিমাপ ও নিয়ন্ত্রণ',
        'জৈব সারের প্রস্তুত প্রণালী ও ব্যবহার',
        'মাটির আর্দ্রতা বজায় রাখার কৌশল',
        'মাটি ক্ষয় রোধে কন্টুর চাষ পদ্ধতি',
      ],
      author: 'ড. রহমান আলী',
      date: '১০ মার্চ, ২০২৪',
      readTime: '৬ মিনিট',
    },
    {
      id: 4,
      title: 'জলবায়ু পরিবর্তন ও কৃষি',
      category: 'climate',
      icon: '🌍',
      image: '🌤️',
      description: 'জলবায়ু পরিবর্তনের প্রভাব মোকাবেলায় অভিযোজন কৌশল ও টেকসই কৃষি পদ্ধতি।',
      content: [
        'খরা সহনশীল ফসলের জাত নির্বাচন',
        'বন্যা প্রতিরোধী কৃষি পদ্ধতি',
        'তাপমাত্রা বৃদ্ধি সহনশীল ফসল চাষ',
        'জলবায়ু স্মার্ট কৃষি প্রযুক্তি',
      ],
      author: 'ড. সাবরিনা আক্তার',
      date: '৮ মার্চ, ২০২৪',
      readTime: '৮ মিনিট',
    },
    {
      id: 5,
      title: 'কীটপতঙ্গ নিয়ন্ত্রণ',
      category: 'pest',
      icon: '🐛',
      image: '🦋',
      description: 'ফসলের ক্ষতি করে এমন কীটপতঙ্গ চিহ্নিত করে জৈব ও রাসায়নিক পদ্ধতিতে নিয়ন্ত্রণ করুন।',
      content: [
        'ধান ক্ষেতে স্টেম বোরার নিয়ন্ত্রণ',
        'সবজি ক্ষেতে আফিড নিয়ন্ত্রণ',
        'জৈব কীটনাশকের প্রস্তুত প্রণালী',
        'ইপিএম (IPM) পদ্ধতির ব্যবহার',
      ],
      author: 'ড. ইমরান হোসেন',
      date: '৫ মার্চ, ২০২৪',
      readTime: '৬ মিনিট',
    },
    {
      id: 6,
      title: 'ফসল সংগ্রহ ও সংরক্ষণ',
      category: 'harvest',
      icon: '🌾',
      image: '📦',
      description: 'ফসলের সঠিক সময়ে সংগ্রহ ও দীর্ঘদিন সংরক্ষণের কৌশল জানুন।',
      content: [
        'ধান সংগ্রহের সঠিক সময় নির্ধারণ',
        'ফসল শুকানোর আধুনিক পদ্ধতি',
        'গুদামে সংরক্ষণের কৌশল',
        'ফসলের মান বজায় রাখার উপায়',
      ],
      author: 'ড. নাসরিন আক্তার',
      date: '৩ মার্চ, ২০২৪',
      readTime: '৫ মিনিট',
    },
  ]

  // Community Posts data
  const communityPosts = [
    {
      id: 1,
      farmer: 'আব্দুল রহমান',
      location: 'রাজশাহী',
      crop: 'ধান',
      story: 'জৈব সারের ব্যবহার করে আমার ধানের ফলন ৩০% বেড়েছে। মাটি এখন অনেক উর্বর।',
      image: '🌾',
      likes: 24,
      date: 'আজ',
      verified: true,
    },
    {
      id: 2,
      farmer: 'ফাতেমা বেগম',
      location: 'ঢাকা',
      crop: 'সবজি',
      story: 'ড্রিপ সেচ ব্যবহার করে সবজি চাষে পানির খরচ অর্ধেক কমেছে। খুব ভালো ফলন পাচ্ছি।',
      image: '🥦',
      likes: 18,
      date: 'কাল',
      verified: false,
    },
    {
      id: 3,
      farmer: 'ইমরান হোসেন',
      location: 'চট্টগ্রাম',
      crop: 'ভুট্টা',
      story: 'কীটপতঙ্গ নিয়ন্ত্রণের জন্য নিম পাতা ব্যবহার করেছি। খুব কার্যকরী এবং সাশ্রয়ী।',
      image: '🌽',
      likes: 31,
      date: 'পরশু',
      verified: true,
    },
    {
      id: 4,
      farmer: 'নাসরিন আক্তার',
      location: 'সিলেট',
      crop: 'চা',
      story: 'জৈব চা চাষ করে প্রিমিয়াম দাম পাচ্ছি। বিদেশে রপ্তানিও হচ্ছে।',
      image: '🍃',
      likes: 42,
      date: 'মঙ্গল',
      verified: true,
    },
  ]

  const categories = [
    { id: 'all', name: 'সব', icon: '📚' },
    { id: 'technology', name: 'প্রযুক্তি', icon: '🚜' },
    { id: 'disease', name: 'রোগ ব্যবস্থাপনা', icon: '🦠' },
    { id: 'soil', name: 'মাটি', icon: '🌱' },
    { id: 'climate', name: 'জলবায়ু', icon: '🌍' },
    { id: 'pest', name: 'কীটপতঙ্গ', icon: '🐛' },
    { id: 'harvest', name: 'সংগ্রহ', icon: '🌾' },
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

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
            📚 জ্ঞান ভাণ্ডার
          </h1>
          <p className="text-gray-600">
            আধুনিক কৃষি প্রযুক্তি, রোগ ব্যবস্থাপনা, এবং মাটির স্বাস্থ্য সম্পর্কিত গুরুত্বপূর্ণ তথ্য
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-farming-green bg-green-50 text-farming-green'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-farming-green hover:bg-green-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article) => (
            <div key={article.id} className={`card hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
              {/* Article Header */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{article.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{article.title}</h3>
                  <p className="text-sm text-gray-500">
                    {article.author} • {article.date}
                  </p>
                </div>
              </div>

              {/* Article Image */}
              <div className="text-center mb-4">
                <div className="text-6xl bg-gray-100 rounded-lg p-4">
                  {article.image}
                </div>
              </div>

              {/* Article Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.description}
              </p>

              {/* Article Content Preview */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1">
                  {article.content.slice(0, 2).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="text-farming-green text-xs mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  ⏱️ {article.readTime} পড়ার সময়
                </span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => speakText(article.description)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                    disabled={isListening}
                  >
                    🔊 {isListening ? 'শুনছি...' : 'শুনুন'}
                  </button>
                  <button className="text-farming-green hover:text-farming-dark-green font-medium">
                    আরও পড়ুন →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Posts Section */}
        <div className="mb-12">
          <div className={`card ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              👥 কৃষক সম্প্রদায়ের সাফল্যের গল্প
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {communityPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="text-3xl">{post.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-800">{post.farmer}</h3>
                        {post.verified && (
                          <span className="text-blue-600 text-sm">✓ যাচাইকৃত</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{post.location} • {post.crop}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">{post.story}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                        <span>❤️</span>
                        <span>{post.likes}</span>
                      </button>
                      <button 
                        onClick={() => speakText(post.story)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                        disabled={isListening}
                      >
                        <span>🔊</span>
                        <span>{isListening ? 'শুনছি...' : 'শুনুন'}</span>
                      </button>
                    </div>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className={`card bg-gradient-to-r from-green-50 to-blue-50 border-2 border-farming-green ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🌟 বিশেষ আর্টিকেল: স্মার্ট কৃষির ভবিষ্যৎ
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  কৃত্রিম বুদ্ধিমত্তা, ইন্টারনেট অফ থিংস, এবং বড় ডেটা বিশ্লেষণের মাধ্যমে 
                  কৃষি ক্ষেত্রে বিপ্লব আসছে। জানুন কীভাবে এই প্রযুক্তি আপনার কৃষি উৎপাদন 
                  বৃদ্ধি করতে পারে।
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-farming-green text-white rounded-full text-sm">
                    #স্মার্টকৃষি
                  </span>
                  <span className="px-3 py-1 bg-weather-blue text-white rounded-full text-sm">
                    #প্রযুক্তি
                  </span>
                  <span className="px-3 py-1 bg-soil-brown text-white rounded-full text-sm">
                    #ভবিষ্যৎ
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => speakText('স্মার্ট কৃষির ভবিষ্যৎ: কৃত্রিম বুদ্ধিমত্তা, ইন্টারনেট অফ থিংস, এবং বড় ডেটা বিশ্লেষণের মাধ্যমে কৃষি ক্ষেত্রে বিপ্লব আসছে')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    disabled={isListening}
                  >
                    🔊 {isListening ? 'শুনছি...' : 'শুনুন'}
                  </button>
                  <button className="btn-primary">
                    📖 সম্পূর্ণ পড়ুন
                  </button>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl bg-white rounded-full p-8 shadow-lg">
                  🤖
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <div className={`card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-weather-blue ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📧 নিয়মিত আপডেট পান
              </h3>
              <p className="text-gray-600 mb-4">
                নতুন কৃষি টিপস, প্রযুক্তি এবং গবেষণা সম্পর্কিত আপডেট পেতে সাবস্ক্রাইব করুন
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-farming-green"
                />
                <button className="btn-primary whitespace-nowrap">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeHub
