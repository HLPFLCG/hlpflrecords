# 📱 Mobile Easter Eggs Guide - HLPFL Records

Complete guide for discovering Easter eggs on mobile devices with touch-optimized interactions.

---

## 🎵 **MOBILE-SPECIFIC FEATURES**

### **Swipe Gestures**
- **Swipe Left**: Next track (when player is open)
- **Swipe Right**: Previous track (when player is open)
- **Requirements**: Fast horizontal swipe (< 300ms, > 50px)
- **Analytics**: Tracked as `swipe_next` or `swipe_previous`

### **Shake to Shuffle**
- **Action**: Shake your device 3 times quickly
- **Result**: Plays a random Alki track
- **Requirements**: Device motion API support
- **Analytics**: Tracked as `shake_to_shuffle`

### **Touch-Optimized Player**
- Larger touch targets for buttons
- Responsive sizing (adapts to screen width)
- Swipe-friendly track navigation
- Mobile-optimized visualizer (smaller FFT for performance)

---

## 🎮 **ALL MOBILE EASTER EGGS**

### **Music Player Access**

#### **1. Tap Anywhere + Type "alki"**
- **Action**: Use mobile keyboard to type "alki"
- **Result**: Opens music player with Track #1
- **Works**: In any text field or when keyboard is visible

#### **2. Long Press Logo (3 seconds)**
- **Action**: Press and hold HLPFL logo for 3 seconds
- **Result**: Opens music player
- **Note**: Alternative to typing on mobile

### **Track Selection**

#### **3. Tap Track Names**
- **Action**: Tap any track in the player list
- **Result**: Plays that track immediately
- **Features**: Color-coded borders, descriptions

#### **4. Swipe Navigation**
- **Action**: Swipe left/right when player is open
- **Result**: Navigate between tracks
- **Speed**: Works with quick swipes

#### **5. Shake to Shuffle**
- **Action**: Shake device 3 times
- **Result**: Plays random track
- **Note**: Requires motion permission

### **Corner Secrets (Touch)**

#### **6. Triple-Tap Top-Left**
- **Action**: Tap top-left corner 3 times quickly
- **Timing**: Within 1 second
- **Result**: Plays "Home"
- **Indicator**: Gold glow when discovered

#### **7. Double-Tap Bottom-Right**
- **Action**: Tap bottom-right corner 2 times
- **Timing**: Within 1 second
- **Result**: Plays "Okay"
- **Indicator**: Gold glow when discovered

### **Word-Based Secrets (Touch)**

#### **8. Double-Tap "music" Word**
- **Action**: Double-tap any word "music" on page
- **Result**: Plays "Tear Me Apart"
- **Works**: On any instance of the word

#### **9. Double-Tap "artist" Word**
- **Action**: Double-tap any word "artist"
- **Result**: Plays "IPTWHA"
- **Works**: On any instance of the word

#### **10. Double-Tap "record" Word**
- **Action**: Double-tap any word "record"
- **Result**: Plays "Like That"
- **Works**: On any instance of the word

### **URL Discoveries (Mobile)**

#### **11. Type "grouped"**
- **Action**: Type "grouped" using mobile keyboard
- **Result**: Opens Grouped link popup
- **Link**: https://app.grouped.com/everythingalki

#### **12. Type "instagram" or "insta"**
- **Action**: Type using mobile keyboard
- **Result**: Opens Instagram link popup
- **Link**: https://instagram.com/alkiotis

#### **13. Tap URL Buttons in Player**
- **Action**: Tap "Grouped" or "Instagram" buttons
- **Result**: Opens respective link popup
- **Location**: Bottom of music player

### **Scroll-Based (Mobile)**

#### **14. Scroll to 50% + Wait**
- **Action**: Scroll to middle of page, wait 3 seconds
- **Result**: Plays "Home"
- **Note**: Only triggers once per session

---

## 🎨 **MOBILE UI FEATURES**

### **Responsive Player**
- **Width**: Full screen width minus 20px margins
- **Max Width**: 400px for larger tablets
- **Height**: Auto-adjusts based on content
- **Position**: Fixed bottom-right with mobile spacing

### **Touch-Friendly Controls**
- **Button Size**: Minimum 40x40px for easy tapping
- **Spacing**: Adequate gaps between buttons
- **Feedback**: Visual feedback on tap
- **Scrolling**: Smooth scrolling track list

### **Mobile Visualizer**
- **Size**: 80px height (vs 100px desktop)
- **Performance**: Smaller FFT (128 vs 256) for battery efficiency
- **Position**: Above player when active
- **Theme**: HLPFL gold gradient colors

### **HLPFL Theme (Mobile)**
- **Background**: Dark gradient (#1a1a1a → #0a0a0a)
- **Border**: 2px solid gold (#c87941)
- **Accent**: Gold gradient (#d4945c, #c87941, #a86535)
- **Shadow**: Gold glow (rgba(200, 121, 65, 0.3))

---

## 📊 **MOBILE PERFORMANCE**

### **Optimizations**
- ✅ Smaller visualizer FFT for battery life
- ✅ Touch event optimization
- ✅ Reduced animation complexity
- ✅ Lazy audio loading
- ✅ Efficient gesture detection

### **Battery Considerations**
- Visualizer uses less processing power
- Motion detection only when needed
- Audio context created on demand
- Animations optimized for mobile GPUs

---

## 🎯 **MOBILE QUICK START**

### **First Time Users**
1. Type "alki" using your keyboard
2. Music player opens automatically
3. Tap any track to play
4. Swipe left/right to navigate
5. Shake device to shuffle

### **Pro Tips**
1. Use swipe gestures for quick navigation
2. Shake device for random track
3. Double-tap words for hidden tracks
4. Tap corners for secret tracks
5. Enable motion permissions for shake feature

---

## 🔒 **MOBILE PERMISSIONS**

### **Required**
- ✅ Audio playback (automatic)
- ✅ Touch events (automatic)

### **Optional**
- 📱 Device motion (for shake to shuffle)
- 🔊 Audio context (for visualizer)

### **Privacy**
- No location tracking
- No personal data collected
- Anonymous analytics only
- Secure external links

---

## 📱 **DEVICE COMPATIBILITY**

### **Tested Devices**
- ✅ iPhone (iOS 14+)
- ✅ Android phones (Android 10+)
- ✅ iPad / Tablets
- ✅ Mobile browsers (Safari, Chrome, Firefox)

### **Features by Device**
| Feature | iPhone | Android | Tablet |
|---------|--------|---------|--------|
| Touch Controls | ✅ | ✅ | ✅ |
| Swipe Gestures | ✅ | ✅ | ✅ |
| Shake to Shuffle | ✅ | ✅ | ⚠️ |
| Visualizer | ✅ | ✅ | ✅ |
| Corner Secrets | ✅ | ✅ | ✅ |
| Word Secrets | ✅ | ✅ | ✅ |

⚠️ = May require permission or not available on all tablets

---

## 🎵 **MOBILE TRACK LIST**

All 10 tracks available on mobile:
1. IPTWHA - Tap or type `iptwha`
2. Like That - Tap or type `likethat`
3. Writin' My Wrongs - Tap or type `wrongs`
4. Regrets - Tap or type `regrets`
5. Home - Tap or type `home`
6. Okay - Tap or type `okay`
7. Luv 4 - Tap or type `luv4`
8. Stay - Tap or type `stay`
9. Take It All Away - Tap or type `takeaway`
10. Tear Me Apart - Tap or type `tearme`

---

## 🏆 **MOBILE CHALLENGES**

### **Beginner** ⭐
- Find 3 tracks using tap selection
- Use swipe gestures 5 times
- Discover 1 corner secret

### **Intermediate** ⭐⭐
- Shake to shuffle successfully
- Find all corner secrets (2)
- Discover 3 word secrets

### **Advanced** ⭐⭐⭐
- Complete all mobile gestures
- Find all 10 tracks
- Discover both URL links

### **Master** ⭐⭐⭐⭐⭐
- Complete all challenges
- Use all mobile features
- Share on social media

---

## 💡 **MOBILE TIPS & TRICKS**

### **Gesture Tips**
1. Swipe quickly for best results
2. Shake firmly but not too hard
3. Double-tap with slight delay
4. Corners are within 50px of edges

### **Performance Tips**
1. Close other apps for better performance
2. Enable hardware acceleration in browser
3. Use Wi-Fi for faster audio loading
4. Keep device charged for shake feature

### **Discovery Tips**
1. Try typing track names
2. Explore all four corners
3. Double-tap common words
4. Shake device when stuck
5. Check secret menu for progress

---

## 🔧 **TROUBLESHOOTING**

### **Audio Not Playing**
1. Check device volume
2. Disable silent mode
3. Allow audio autoplay in browser
4. Try tapping play button again
5. Reload page if needed

### **Gestures Not Working**
1. Ensure touch events are enabled
2. Try slower/faster swipes
3. Check motion permissions
4. Restart browser if needed
5. Try different browser

### **Shake Not Working**
1. Enable motion permissions
2. Shake more firmly
3. Try 3 quick shakes
4. Check browser compatibility
5. Use alternative methods

---

## 📞 **SUPPORT**

Having issues on mobile?
- 📧 Email: contact@hlpfl.org
- 📞 Phone: 616-313-5215
- 🌐 Website: hlpfl.org

---

*Last Updated: December 2024*
*Version: 1.0 - Mobile Optimized*
*All features tested on iOS and Android*

---

## 🎉 **ENJOY THE MOBILE EXPERIENCE!**

Discover Alki's music on the go with touch-optimized Easter eggs! 🎵📱