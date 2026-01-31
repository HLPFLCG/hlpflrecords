'use client'

import { useState, useEffect, useRef } from 'react'
import { ChatbotAnalytics } from '@/lib/chatbotAnalytics'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ConversationData {
  sessionId: string
  userId: string
  messages: Message[]
  startTime: Date
  endTime?: Date
  userSatisfaction?: number
  topic: string[]
}

export function Chatbot() {
  // Helper functions - defined before use
  const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
  }

  const generateUserId = () => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') {
      return `user_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
    }
    
    let userId = localStorage.getItem('hlpfl_user_id')
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
      localStorage.setItem('hlpfl_user_id', userId)
    }
    return userId
  }

  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "✨ Welcome to HLPFL! I'm your personal assistant here. We provide comprehensive tools and resources for independent creatives and entrepreneurs to build successful careers on their own terms. I'm here to help you discover how our toolkit can elevate your creative journey. What brings you to HLPFL today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationData, setConversationData] = useState<ConversationData>({
    sessionId: generateSessionId(),
    userId: generateUserId(),
    messages: [],
    startTime: new Date(),
    topic: []
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Enhanced bot responses with more personality and HLPFL-specific information
  const botResponses = {
    greetings: [
      "Hey there! 👋 Welcome to HLPFL! I'm excited to help you explore how we can transform your creative journey. What's on your mind today?",
      "Hello! ✨ Great to see you at HLPFL! Whether you're a creator, entrepreneur, or creative professional, I'm here to help. What can I do for you?",
      "Hi! Welcome to the HLPFL family! Since 2009, we've been passionate about empowering creatives and entrepreneurs. How can I assist you today?"
    ],
    about_hlpfl: [
      "HLPFL is the comprehensive resource platform for creatives and entrepreneurs! We provide powerful tools and resources for independent creators to build sustainable careers on their own terms. What makes us special? Our 'tools, not contracts' approach means creatives get professional-grade resources without surrendering control. From content distribution to social media management, we provide everything creators need to succeed independently. Want to know more about our toolkit?",
      "Let me tell you about HLPFL! 🌟 We're a nonprofit that believes in the power of authentic creativity. Since 2009, we've been discovering incredible talent and helping them reach their full potential. We've pioneered new approaches to creative development with our 'tools, not contracts' philosophy. We're not just about the work - we're about building legacies. Interested in learning about our unique development programs?",
      "HLPFL represents the pinnacle of creative empowerment! We've been in the game since 2009, and in that time, we've perfected our approach to nurturing talent. Our secret? We combine traditional creative industry expertise with cutting-edge digital strategies. Our dedicated team works tirelessly to ensure every creator gets personalized attention. We help distribute content across all major platforms worldwide. Curious about our global reach?"
    ],
    artist_submission: [
      "Amazing! I'd love to help you submit your work to HLPFL! ✨ Here's how it works: First, visit our contact page and include links to your best work (portfolio, website, or private links work great). Tell us about your creative journey, your goals, and what makes your work unique. Our team reviews every submission personally - we look for originality, skill, and that special spark that sets you apart. We typically respond within 5-7 business days. What type of creative work do you do?",
      "Fantastic that you're considering HLPFL! 🚀 We're always excited to discover new talent. For submissions, we want to get to know you as a creator, not just your work. Along with your portfolio, share your story - what drives your creativity? What are your career aspirations? We've worked with creators from all backgrounds - from bedroom entrepreneurs to established professionals. Our development program includes strategic guidance, marketing support, and even mental health resources. We invest in our creatives holistically. What's your current experience level?",
      "Ready to join the HLPFL family? 💡 We're looking for creatives who aren't just talented, but passionate and driven too! When you submit, make sure to showcase your range - we love creators who can surprise us. Our submission process is thorough but fair: first, our team reviews your work, then if we're interested, we'll schedule a video call to discuss your vision. We've helped creatives transition from side projects to full-time careers. One thing that sets us apart - we offer development grants to creators we work with! What's your biggest creative dream?"
    ],
    services: [
      "HLPFL provides creatives with comprehensive tools and resources to build successful careers on their own terms! 🎯 Here's what we provide: Social Media Manager (unified dashboard for all platforms), Link in Bio Tool (custom landing page for all your links), Content Distribution (all major platforms, keep 100% of your earnings), Form Builder (capture audience data and manage business), Creator Support Services (on-demand professional guidance), and the HLPFL Creative Vault (exclusive resources and collaboration opportunities). Which area interests you most?",
      "Our toolkit at HLPFL is designed to create sustainable creative careers! 💪 We provide creators with professional tools including social media management, content distribution, form builders, link in bio tools, and creator support services. We believe in giving creatives the resources they need to succeed independently. What's most important to you in your creative journey?",
      "Let me break down HLPFL's service ecosystem! 🌍 We handle everything so you can focus on creating incredible work. Our Creator Development program is comprehensive - we've helped creatives master their craft, build their brand, and develop authentic presence. Our Global Distribution gets your content to audiences worldwide across all major platforms. Our Marketing team has launched viral campaigns and secured features across major outlets. Plus, our resources ensure you're protected while maximizing your success. Ready to dive deeper into any of these services?"
    ],
    artists: [
      "Our HLPFL creative roster is incredibly diverse and talented! 🌟 We work with creators across music, visual arts, design, writing, and more. What's amazing is how each creator maintains their unique voice while benefiting from our support system. Some of our creatives started as independent hobbyists and are now running successful businesses. Others were already established but joined us to reach the next level. We've helped creatives get featured on major platforms, secure brand deals, and build sustainable careers. Want to hear about some specific success stories?",
      "The creatives at HLPFL are like family! 👨‍👩‍👧‍👦 We work with a select community of talented creators, each bringing something special to the table. Our creatives represent the future of independent work. We take pride in our creator development - our members have grown exponentially in skill and reach since joining us. The best part? Our creatives actively collaborate with each other, creating amazing cross-discipline projects. What type of creative work are you most passionate about?",
      "Let me tell you about our amazing HLPFL creatives! ✨ Each creator has a unique journey with us. Some discovered their voice through our development programs, others came to us already established but wanted to expand their reach. We've helped creatives transition from side projects to full-time careers, from local recognition to global audiences. Our creators have been featured on major platforms, in publications, and across social media. Many have secured brand partnerships and expanded into multiple creative ventures. We celebrate diversity in creative expression - from individual artists to entrepreneurial teams. Would you like to know more about our creative community?"
    ],
    contact: [
      "I'd love to connect you with the right people at HLPFL! 📞 You have several options: For creative submissions and general inquiries, use our contact form on the website. For urgent matters, email us at contact@hlpfl.org. You can also continue chatting with me - I'm here 24/7! Our team typically responds within 24-48 hours. If you're a creative looking to submit work, make sure to include links to your portfolio and a brief bio. For business partnerships or press inquiries, mention that in your subject line. What type of connection are you looking to make?",
      "Connecting with HLPFL is easy! 🌐 We want to hear from you! Our main contact form is the best starting point - it helps us direct your inquiry to the right team member. For creative submissions, be detailed about your work and goals. For business inquiries, include your company and what you're looking for. You can also find us on social media - we're active on Instagram, Twitter, and TikTok @hlpfl_. We love hearing from creative enthusiasts, potential collaborators, and creators alike. Plus, you can always chat with me for quick questions! What's the best way to reach you?",
      "Let's make sure you connect with the right team at HLPFL! 🎯 We have different contact channels for different needs: Our Tools team handles new creator onboarding, our Business Development team manages partnerships, Press inquiries go to our Communications team, and general inquiries come to me or our general inbox. We're pretty responsive - tool access is instant, business inquiries within 48 hours. Don't be shy about following up if you don't hear back! We value every connection and potential collaboration. What specific team would you like to connect with?"
    ],
    founder: [
      "Ah, let me tell you about our incredible founder! 🌟 James Rockel started HLPFL in 2009 with a simple but powerful mission: to provide independent creatives with tools and resources they need to succeed. With over 17 years in creative industries, he's seen everything from the rise of digital platforms to how the creative landscape has evolved. His philosophy has always been about building sustainable careers, not just chasing viral moments. He's personally involved in creator development and mentors creatives directly. What's really special is his background in both creative production and business strategy - this unique combination helped shape HLPFL's creator-first approach. Would you like to know more about his vision?",
      "Our founder is the heart and soul of HLPFL! ❤️ James started as a creator himself, so he understands the challenges creatives face firsthand. Before founding HLPFL, he saw how creators often got exploited by industry gatekeepers. That experience inspired him to create something different - a nonprofit where creativity thrives and creators maintain control. He's known for being hands-on, offering strategic guidance and creative mentorship. Many of our creatives credit him with helping them find their authentic voice. His vision has always been clear: discover exceptional talent, provide world-class support, and let the creators shine. What aspect of his philosophy resonates with you most?"
    ],
    success_stories: [
      "Let me share some incredible HLPFL success stories! 🏆 One of our creatives went from working on passion projects to building a six-figure business. Another discovered their unique voice through our development program and now has major brand partnerships. We helped an independent creator secure features in major publications, exposing them to millions of new followers. One of our entrepreneurs went from side hustle to full-time career with brand deals and speaking engagements. What all these stories have in common? Creatives who trusted our process, stayed committed to their craft, and weren't afraid to evolve. Which type of success story inspires you most?",
      "I love sharing our success stories! ✨ They show what's possible when talent meets the right support. We had a creator who was struggling to find their niche - through our strategic guidance and mentorship, they developed a signature style that landed them major opportunities. A designer joined us with barely any following and now has thousands of clients and international recognition. One of our content creators secured major partnerships through our industry connections. These stories aren't just about numbers - they're about creatives finding their voice and connecting with audiences authentically. What's your creative dream?"
    ],
    industry_insights: [
      "Great question about the creative industry! ✨ The landscape has changed dramatically since we started in 2009. Digital platforms now dominate - that's why distribution is so crucial. Social media platforms like TikTok and Instagram can make or break careers overnight. AI is changing creative production, but human creativity remains irreplaceable. The creator economy is booming post-pandemic. What's exciting is how independent creatives can now compete with major companies if they have the right strategy and support. At HLPFL, we stay ahead of these trends to benefit our creators. Want to dive deeper into any specific industry topic?",
      "The creative industry is fascinating right now! 🚀 We're seeing amazing convergence of technology and creativity. Short-form video content is driving discovery more than traditional channels. Direct-to-audience relationships are becoming more valuable than traditional marketing. Brand partnerships and collaborations can launch careers instantly. The rise of independent creators is challenging old gatekeeping models. At HLPFL, we embrace these changes while focusing on what's timeless: great work and authentic creator development. We're helping our creatives build sustainable careers in this evolving landscape. What industry trends are you most curious about?"
    ],
    default: [
      "That's an interesting question! 🤔 While I'm primarily here to help with HLPFL, creator development, submissions, and our services, I'm happy to chat about the creative industry more broadly. Is there something specific about HLPFL or the creative business you'd like to explore? Perhaps you're curious about our creator development process, success stories, or how we help creatives grow their careers?",
      "I'm here to help you discover what HLPFL can offer! ✨ Whether you're an aspiring creator, industry professional, or creative enthusiast, I can share information about our services, opportunities, submission process, and success stories. Feel free to ask me anything about how we help creatives achieve their dreams. What brought you to HLPFL today?",
      "Great question! 👋 I'm your HLPFL assistant, here to help you explore everything we offer - from creator development and content production to global distribution and career management. I can also share insights about our success stories, our 17+ year journey since 2009, and what makes our approach unique. What aspect of HLPFL interests you most?"
    ]
  }

  useEffect(() => {
    scrollToBottom()
    
    // Initialize analytics when chat opens
    if (isOpen && messages.length === 1) {
      const analytics = ChatbotAnalytics.getInstance()
      analytics.startConversation(conversationData.sessionId, conversationData.userId)
    }
  }, [messages, isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  

  const trackConversation = (message: string, sender: 'user' | 'bot') => {
    const analytics = ChatbotAnalytics.getInstance()
    
    if (sender === 'user') {
      analytics.trackMessage(conversationData.sessionId, message, sender)
    } else {
      analytics.trackMessage(conversationData.sessionId, message, sender, 0)
    }
    
    const updatedData = {
      ...conversationData,
      messages: [...conversationData.messages, {
        id: Date.now().toString(),
        text: message,
        sender,
        timestamp: new Date()
      }],
      topic: updateTopics(conversationData.topic, message)
    }
    
    setConversationData(updatedData)
    
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('hlpfl_chat_data', JSON.stringify(updatedData))
    }
  }

  const updateTopics = (currentTopics: string[], message: string): string[] => {
    const messageLower = message.toLowerCase()
    const newTopics = [...currentTopics]
    
    if (messageLower.includes('submit') || messageLower.includes('demo') || messageLower.includes('music')) {
      if (!newTopics.includes('artist_submission')) newTopics.push('artist_submission')
    }
    if (messageLower.includes('service') || messageLower.includes('production') || messageLower.includes('distribution')) {
      if (!newTopics.includes('services')) newTopics.push('services')
    }
    if (messageLower.includes('about') || messageLower.includes('story') || messageLower.includes('founder')) {
      if (!newTopics.includes('about_company')) newTopics.push('about_company')
    }
    if (messageLower.includes('contact') || messageLower.includes('email') || messageLower.includes('reach')) {
      if (!newTopics.includes('contact_inquiry')) newTopics.push('contact_inquiry')
    }
    
    return newTopics
  }

  const generateBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return getRandomResponse('greetings')
    } else if (lowerMessage.includes('hlpfl') || lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('story')) {
      return getRandomResponse('about_hlpfl')
    } else if (lowerMessage.includes('founder') || lowerMessage.includes('who started') || lowerMessage.includes('ceo')) {
      return getRandomResponse('founder')
    } else if (lowerMessage.includes('success') || lowerMessage.includes('stories') || lowerMessage.includes('examples') || lowerMessage.includes('case study')) {
      return getRandomResponse('success_stories')
    } else if (lowerMessage.includes('submit') || lowerMessage.includes('demo') || lowerMessage.includes('apply') || lowerMessage.includes('join')) {
      return getRandomResponse('artist_submission')
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('provide') || lowerMessage.includes('help') || lowerMessage.includes('production') || lowerMessage.includes('distribution')) {
      return getRandomResponse('services')
    } else if (lowerMessage.includes('artist') || lowerMessage.includes('roster') || lowerMessage.includes('talent') || lowerMessage.includes('musicians')) {
      return getRandomResponse('artists')
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('call') || lowerMessage.includes('connect')) {
      return getRandomResponse('contact')
    } else if (lowerMessage.includes('industry') || lowerMessage.includes('trends') || lowerMessage.includes('business') || lowerMessage.includes('future')) {
      return getRandomResponse('industry_insights')
    } else {
      return getRandomResponse('default')
    }
  }

  const getRandomResponse = (category: keyof typeof botResponses): string => {
    const responses = botResponses[category]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    trackConversation(inputValue, 'user')
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking with realistic delay
    const thinkingTime = Math.random() * 2000 + 1000 // 1-3 seconds
    await new Promise(resolve => setTimeout(resolve, thinkingTime))

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateBotResponse(inputValue),
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botResponse])
    trackConversation(botResponse.text, 'bot')
    setIsTyping(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleClose = () => {
    // End conversation tracking
    const analytics = ChatbotAnalytics.getInstance()
    analytics.endConversation(conversationData.sessionId)
    
    const finalData = {
      ...conversationData,
      endTime: new Date()
    }
    setConversationData(finalData)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('hlpfl_chat_data', JSON.stringify(finalData))
    }
    
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Toggle Button - Enhanced with HLPFL styling */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat with HLPFL assistant"
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-gold to-gold-dark text-dark p-4 rounded-full shadow-2xl hover:shadow-gold/25 transform hover:scale-105 transition-all duration-300 z-50 flex items-center gap-3 group ${isOpen ? 'hidden' : 'block'} border border-gold/20`}
      >
        <div className="relative">
          <svg
            className="w-6 h-6 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        </div>
        <span className="pr-2 font-bold text-dark hidden sm:inline">Chat with HLPFL</span>
      </button>

      {/* Chat Window - Enhanced with HLPFL branding */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] bg-dark sm:rounded-2xl shadow-2xl z-50 flex flex-col border-t sm:border border-gold/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gold to-gold-dark p-6 rounded-t-2xl flex justify-between items-center border-b border-gold/20">
            <div>
              <h4 className="text-dark font-bold text-xl mb-1">HLPFL Assistant</h4>
              <p className="text-dark/80 text-sm font-medium">Your personal creative industry guide ✨</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-dark/70 text-xs">Online now</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-dark hover:bg-dark/20 p-2 rounded-full transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div role="log" aria-live="polite" className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-dark to-dark-secondary">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-gold to-gold-dark text-dark'
                      : 'bg-dark-tertiary text-white border border-gold/20'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-dark/70' : 'text-gold/60'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-dark-tertiary text-white border border-gold/20 p-4 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-dark border-t border-gold/20">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about HLPFL..."
                className="flex-1 bg-dark-secondary text-white px-4 py-3 rounded-full border border-gold/20 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isTyping}
                className="bg-gradient-to-r from-gold to-gold-dark text-dark p-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              Powered by HLPFL • Since 2009
            </p>
          </div>
        </div>
      )}
    </>
  )
}