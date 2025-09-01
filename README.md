# শস্যঘড়ি (ShoshyoGhorir) - Smart Farming Assistant

A clean, responsive web UI for farmers built with React + Tailwind CSS, fully localized in Bengali with advanced accessibility features.

## 🌾 Project Overview

"শস্যঘড়ি" helps farmers decide the perfect time for sowing and harvesting crops. It provides:
- Crop calendars and smart suggestions
- Weather forecasts and alerts
- Knowledge hub with farming articles
- Farmer profiles and management
- **Voice assistance in Bengali**
- **Offline mode support**
- **Emergency help system**
- **Weather map visualization**
- **Dark mode / High contrast mode**
- Mobile-first responsive design

## 🚀 Features

### 1. Landing Page
- App title: "শস্যঘড়ি – আপনার স্মার্ট কৃষি সহকারী"
- Bengali tagline about guiding farmers
- Call-to-action buttons: "শুরু করুন" (Get Started), "লগইন" (Login)
- Farming-related illustrations and icons
- **Voice assistance for all content**
- **Dark mode toggle**

### 2. Farmer Dashboard
- **2-column layout**: Left side for Crop Calendar & Smart Suggestions, Right side for Weather & Alerts
- Interactive crop calendar with sowing/harvesting dates
- Smart suggestions for optimal farming timing
- 7-day weather forecast widget
- **Weather map visualization for Bangladesh**
- Color-coded alert cards (blue for info, red for danger, green for good news)
- **Voice assistance for all alerts and tips**
- **Emergency SOS button (red) for urgent help**
- **Offline mode indicator**
- **Dark mode support**

### 3. Crop Selection
- Grid of crop icons (ধান 🌾, গম 🌿, ভুট্টা 🌽, সবজি 🥦)
- Personalized sowing/harvesting tips in Bengali
- Seasonal recommendations
- Interactive crop selection with detailed information
- **Voice assistance for crop descriptions and tips**
- **Dark mode support**

### 4. Knowledge Hub
- Articles on modern farming technology, disease management, soil health
- Category filtering system
- Featured articles and newsletter signup
- Rich content with images and descriptions
- **Community Posts section** where farmers share success stories
- **Voice assistance for all articles**
- **Dark mode support**

### 5. Farmer Profile
- Editable profile fields (Name, Region, Preferred Crops)
- Dashboard shortcut links
- **Gamified tracking system**:
  - ✅ Completed tasks (80% progress)
  - ⏳ Upcoming tasks (30% progress)
  - 📈 Yield estimates (85% progress)
  - 🏆 Success score (85% progress)
- **Voice assistance for profile information**
- **Dark mode support**

## 🆕 Extra Features Added

### 1. **Voice Assistance (Bangla)**
- Each alert/tip has a "🔊 Listen" button
- Text-to-speech in Bengali using Web Speech API
- Plays content in farmer-friendly language
- Accessible for users with low literacy

### 2. **Offline Mode (Demo)**
- Shows message: "📴 ইন্টারনেট নেই – সর্বশেষ তথ্য দেখানো হচ্ছে"
- Displays cached information when internet is unavailable
- Perfect for rural areas with weak connectivity

### 3. **Emergency Help Button**
- Red SOS button (🚨) on dashboard
- Fixed position for easy access
- Placeholder for "Call Agriculture Office"
- Animated pulse effect for attention

### 4. **Weather Map Visualization (Simplified)**
- Mini map of Bangladesh with weather indicators
- Shows rain ☔, sun ☀️, and temperature for each region
- Grid layout for easy reading
- Color-coded weather conditions

### 5. **Dark Mode / High Contrast Mode**
- Toggle button (🌙/☀️) on all pages
- High contrast colors for better visibility
- Reduces eye strain in low-light conditions
- Accessible for users with visual impairments

## 🎨 Design Features

- **Colors**: Green (growth), Brown (soil), Blue (weather)
- **Typography**: Noto Sans Bengali font for authentic Bengali text
- **Layout**: Rounded cards with shadows for modern look
- **Icons**: Extensive use of emojis and farming-related symbols
- **Responsive**: Mobile-first design that works on all devices
- **Accessibility**: Voice assistance, high contrast, large buttons

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Fonts**: Noto Sans Bengali (Google Fonts)
- **Voice**: Web Speech API (SpeechSynthesis)
- **State Management**: React Hooks

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd shoshyo-ghorir
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 📱 Pages & Routes

- `/` - Landing Page (with voice assistance)
- `/dashboard` - Main Farmer Dashboard (with weather map & SOS)
- `/crops` - Crop Selection & Information (with voice tips)
- `/knowledge` - Knowledge Hub & Articles (with community posts)
- `/profile` - Farmer Profile & Settings (with gamified tracking)

## 🎯 Key Components

- **Navigation**: Responsive navigation with Bengali labels
- **Dashboard**: 2-column layout with farming information + weather map
- **CropSelection**: Interactive crop grid with voice assistance
- **KnowledgeHub**: Article management with community posts
- **FarmerProfile**: Editable profile with gamified statistics
- **VoiceAssistant**: Text-to-speech functionality throughout the app

## 🌐 Localization

The entire application is localized in Bengali (বাংলা) with:
- Bengali text throughout the interface
- Bengali date formats
- Bengali number systems where appropriate
- Cultural context for farming practices
- **Voice assistance in Bengali language**

## 📊 Placeholder Data

The application includes comprehensive placeholder data for:
- Crop information and seasonal data
- Weather forecasts and regional weather map
- Smart alerts and notifications
- Knowledge articles and community posts
- Farmer profiles and gamified statistics

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  'farming-green': '#22c55e',
  'soil-brown': '#a16207',
  'weather-blue': '#3b82f6',
  // ... more colors
}
```

### Fonts
The application uses Noto Sans Bengali. You can modify fonts in `index.html` and `tailwind.config.js`.

### Voice Settings
Voice assistance uses the Web Speech API. You can customize voice parameters in the `speakText` function.

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid layouts** that adapt to screen size
- **Touch-friendly** buttons and interactions
- **Large buttons** for easy rural usage

## 🚀 Future Enhancements

- Backend API integration
- Real-time weather data
- Crop disease detection with AI
- Soil testing integration
- Farmer community features
- Push notifications
- **Offline-first PWA support**
- **Multi-language support**
- **Advanced voice commands**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (including voice features)
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For support or questions:
- Email: support@shoshyoghorir.com
- Hotline: 16123
- Website: www.shoshyoghorir.com
- **Emergency SOS**: Available on dashboard

## 🌟 Special Features for Rural Users

- **Voice assistance** for low literacy users
- **Large buttons** and icons for easy navigation
- **Offline mode** for weak internet areas
- **Emergency help** for urgent situations
- **High contrast mode** for better visibility
- **Bengali language** throughout the interface

---

**🌾 কৃষকদের জন্য, কৃষকদের দ্বারা নির্মিত 🌾**

Built with ❤️ for the farming community of Bangladesh, featuring advanced accessibility and voice assistance for inclusive farming technology.
