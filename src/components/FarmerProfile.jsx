import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const FarmerProfile = () => {
  const [profile, setProfile] = useState({
    name: 'আব্দুল রহমান',
    region: 'রাজশাহী',
    preferredCrops: ['ধান', 'গম', 'ভুট্টা'],
    phone: '01712-345678',
    experience: '১৫ বছর'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm(profile);
  };

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'bn-BD';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              👨‍🌾 কৃষক প্রোফাইল
            </h1>
            <p className="text-lg text-gray-600">
              আপনার কৃষি যাত্রার তথ্য দেখুন এবং আপডেট করুন
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                📋 ব্যক্তিগত তথ্য
              </h2>
              <button
                onClick={handleEdit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                ✏️ সম্পাদনা করুন
              </button>
            </div>

            {!isEditing ? (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500">নাম:</span>
                    <span className="font-medium text-gray-800">{profile.name}</span>
                    <button
                      onClick={() => speakText(`নাম: ${profile.name}`)}
                      className="text-blue-500 hover:text-blue-600 text-xl"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500">অঞ্চল:</span>
                    <span className="font-medium text-gray-800">{profile.region}</span>
                    <button
                      onClick={() => speakText(`অঞ্চল: ${profile.region}`)}
                      className="text-blue-500 hover:text-blue-600 text-xl"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500">পছন্দের ফসল:</span>
                    <span className="font-medium text-gray-800">{profile.preferredCrops.join(', ')}</span>
                    <button
                      onClick={() => speakText(`পছন্দের ফসল: ${profile.preferredCrops.join(', ')}`)}
                      className="text-blue-500 hover:text-blue-600 text-xl"
                    >
                      🔊
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500">ফোন:</span>
                    <span className="font-medium text-gray-800">{profile.phone}</span>
                    <button
                      onClick={() => speakText(`ফোন: ${profile.phone}`)}
                      className="text-blue-500 hover:text-blue-600 text-xl"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500">অভিজ্ঞতা:</span>
                    <span className="font-medium text-gray-800">{profile.experience}</span>
                    <button
                      onClick={() => speakText(`অভিজ্ঞতা: ${profile.experience}`)}
                      className="text-blue-500 hover:text-blue-600 text-xl"
                    >
                      🔊
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">নাম</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">অঞ্চল</label>
                    <input
                      type="text"
                      value={editForm.region}
                      onChange={(e) => handleInputChange('region', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ফোন</label>
                    <input
                      type="text"
                      value={editForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">অভিজ্ঞতা</label>
                    <input
                      type="text"
                      value={editForm.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    💾 সংরক্ষণ করুন
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    ❌ বাতিল করুন
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Progress Tracking */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              📊 আপনার অগ্রগতি
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">✅ সম্পন্ন কাজ</span>
                    <span className="text-green-600 font-semibold">৮০%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">⏳ আসন্ন কাজ</span>
                    <span className="text-yellow-600 font-semibold">৩০%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">📈 ফলন অনুমান</span>
                    <span className="text-blue-600 font-semibold">৮৫%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">🏆 সাফল্য স্কোর</span>
                    <span className="text-purple-600 font-semibold">৮৫%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              ⚡ দ্রুত কাজ
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/dashboard"
                className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl text-center transition-colors"
              >
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold">ড্যাশবোর্ড</div>
                <div className="text-sm opacity-90">মূল তথ্য দেখুন</div>
              </Link>
              <Link
                to="/crops"
                className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl text-center transition-colors"
              >
                <div className="text-3xl mb-2">🌾</div>
                <div className="font-semibold">ফসল নির্বাচন</div>
                <div className="text-sm opacity-90">নতুন ফসল বাছাই করুন</div>
              </Link>
              <Link
                to="/knowledge"
                className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-xl text-center transition-colors"
              >
                <div className="text-3xl mb-2">📚</div>
                <div className="font-semibold">জ্ঞান কেন্দ্র</div>
                <div className="text-sm opacity-90">নতুন তথ্য শিখুন</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
