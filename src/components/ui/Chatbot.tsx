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
      text: "✨ Welcome to HLPFL! I'm your personal assistant here. We're a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. Zero upfront costs. We earn when you earn. How can I help you today?",
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

  // Enhanced bot responses with HLPFL nonprofit messaging
  const botResponses = {
    greetings: [
      "Hey there! 👋 Welcome to HLPFL! We're a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs. Zero upfront costs—we earn when you earn. What brings you here today?",
      "Hello! ✨ Great to see you at HLPFL! Whether you're an inventor, artist, musician, designer, or writer, we provide business support with zero upfront costs. How can I help?",
      "Hi! Welcome to HLPFL! Since 2009, we've been empowering creative entrepreneurs with commission-only services. No fees, no contracts—just aligned incentives. What can I assist you with today?"
    ],
    about_hlpfl: [
      "HLPFL Inc is a Wyoming 501(c)(3) nonprofit organization! 🎯 We provide commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. What makes us different? Zero upfront costs. We invest our time and resources in you first. We handle sales, marketing, business development, and more. We only earn a commission (typically 15-30%) when we help you make money. Our incentives are aligned with yours. Want to know more about our services?",
      "Let me tell you about HLPFL! 🌟 We're a nonprofit that advocates for fair treatment and equitable compensation for creative entrepreneurs. Traditional agencies charge thousands upfront with no guaranteed results. We do the opposite—we work for free until we help you make money. No upfront costs, no predatory contracts, no hidden fees. We serve inventors, artists, musicians, designers, and writers. Interested in our commission-only model?",
      "HLPFL represents a new approach to supporting creatives! Since 2009, we've been building a nonprofit model where our success depends entirely on your success. We provide brand development, sales representation, marketing strategy, and contract support—all with zero upfront costs. As a 501(c)(3), we exist to serve creators, not to maximize profit. Would you like to learn about our services?"
    ],
    artist_submission: [
      "Interested in partnering with HLPFL? ✨ Here's how it works: Visit our contact page and tell us about yourself and your creative work. Whether you're an inventor with a product, an artist with a portfolio, a musician with music, a designer with projects, or a writer with content—we want to hear from you. We look for creators with viable products or services who need business support. There are zero upfront costs to work with us. We'll review your application and schedule a call if it's a good fit. What type of creative work do you do?",
      "Ready to apply to partner with HLPFL? 🚀 We work with creative entrepreneurs across all disciplines—inventors, artists, musicians, designers, and writers. Our process: submit your work through our contact page, we review it personally, and if we see potential for a successful partnership, we'll connect. Remember: there's nothing to pay upfront. We earn a commission only when we help you make money. What's your creative specialty?",
      "Want to join the HLPFL community? 💡 We're looking for creative entrepreneurs with viable products or creative work who need business support. Submit through our contact page with: what you create, your goals, and why you think we'd work well together. Zero upfront costs—we invest in you first. We handle sales, marketing, and business operations so you can focus on creating. What's your biggest business challenge right now?"
    ],
    services: [
      "HLPFL provides commission-only business development services! 🎯 Here's what we offer: Brand Development & Identity (strategy, visual identity, positioning), Business Entity Formation (LLC setup, registration, compliance), Sales Representation (direct outreach, deal negotiation, client management), Marketing Strategy & Execution (go-to-market, content, PR), Content & Social Media (strategy, creation, community building), and Contract Support (review, rights education, negotiation help). All with zero upfront costs—we earn when you earn. Which service interests you most?",
      "Our services at HLPFL are designed to handle the business side so you can focus on creating! 💪 We provide brand development, entity formation, sales representation, marketing strategy, content creation, and contract negotiation support. The key difference? Zero upfront costs. We work on a commission-only basis (typically 15-30% on sales we facilitate). We succeed when you succeed. What business challenges are you facing?",
      "Let me break down HLPFL's services! 🌍 As a 501(c)(3) nonprofit, we provide: brand development to build your identity, business formation to get you properly structured, sales representation so you can focus on creating, marketing strategy to reach the right audiences, content and social media management, and contract support to protect your interests. Zero fees upfront—we earn only when we help you make money. Which area would help you most?"
    ],
    artists: [
      "At HLPFL, we serve creative entrepreneurs across five disciplines! 🌟 Inventors (patent holders, product developers), Visual Artists (painters, illustrators, photographers), Musicians (artists, producers, bands), Designers (industrial, fashion, UX/UI), and Writers (authors, screenwriters, content creators). What makes each partnership special is that we invest in you first—zero upfront costs. We handle the business side while you focus on creating. What type of creative work do you do?",
      "Our creative community at HLPFL is diverse! 👨‍👩‍👧‍👦 We work with inventors bringing products to market, artists building their brands, musicians growing their careers, designers expanding their reach, and writers getting published. Each creator maintains complete ownership of their work—we just help with the business side. Our commission-only model means we're truly invested in your success. What creative discipline are you in?",
      "HLPFL serves creative entrepreneurs who have viable products or services but need business support. ✨ We work across all disciplines: inventors, visual artists, musicians, designers, and writers. Our nonprofit model is simple—we provide sales, marketing, and business development with zero upfront costs. We earn a commission only on sales we directly facilitate. You keep 100% ownership of your work. Would you like to know more about how we work with creators like you?"
    ],
    contact: [
      "I'd love to connect you with HLPFL! 📞 For partnership inquiries and applications, use our contact form at /contact. Include information about your creative work and business goals. Email us directly at contact@hlpfl.org for general questions. Follow us on Instagram and Twitter @hlpfl_. Our team reviews every inquiry and responds within 24-48 hours. Remember—there's no sales pitch here. We're a nonprofit focused on helping creative entrepreneurs succeed. What would you like to discuss?",
      "Reaching HLPFL is easy! 🌐 Our contact form is the best starting point for partnership applications. Tell us about yourself, your creative work, and what business support you need. For quick questions, email contact@hlpfl.org. Find us on social media @hlpfl_ (Instagram, Twitter, LinkedIn). As a nonprofit, we're here to help—no pressure, no hard sell. We only partner with creators where we believe we can truly help. What type of inquiry do you have?",
      "Let me help you connect with the right team at HLPFL! 🎯 For partnership applications: use our contact form and share your creative work and business goals. For general questions: email contact@hlpfl.org. For updates: follow @hlpfl_ on social media. We respond to all inquiries within 48 hours. And remember—as a 501(c)(3) nonprofit with a commission-only model, there's never any pressure to sign up for anything. We're here to help creators who are a good fit. What would you like to know?"
    ],
    founder: [
      "Let me tell you about our founder! 🌟 James Rockel III founded HLPFL in 2009 with a mission to advocate for fair treatment and equitable compensation for creative entrepreneurs. He saw how traditional agencies and services often exploited creators—charging thousands upfront with no guaranteed results. So he created something different: a nonprofit with a commission-only model where HLPFL only succeeds when creators succeed. As the designated Founder per our bylaws, he has a permanent advisory role in the organization. His philosophy: aligned incentives create better outcomes for everyone. Would you like to know more about his vision?",
      "Our founder James Rockel III is the heart of HLPFL! ❤️ He started HLPFL because he saw creative entrepreneurs being taken advantage of by predatory services and unfair contracts. His solution? A 501(c)(3) nonprofit that charges zero upfront costs and earns only when creators earn. He's passionate about advocacy, education, and protecting creators' rights. The organization's mission—directly from our bylaws—is to advocate for fair treatment, equitable compensation, and protection of rights for creative entrepreneurs. That vision guides everything we do."
    ],
    success_stories: [
      "Our success stories reflect HLPFL's mission! 🏆 Because we work on commission-only, every success story is shared success. We've helped inventors bring products to market, artists land gallery shows and brand deals, musicians secure sync placements and grow their audiences, designers find clients, and writers get published. What all these stories have in common? Creators who had viable work but needed business support—and a nonprofit partner whose incentives were truly aligned with theirs. What's your creative goal?",
      "I love sharing HLPFL success stories! ✨ They demonstrate what's possible when creators get real business support without predatory terms. Our model works because we only succeed when you succeed. We've helped creators go from struggling to find clients to running sustainable businesses. From unknown to featured in major publications. From side project to full-time career. The key? Professional business development with zero upfront risk for the creator. What would success look like for you?"
    ],
    industry_insights: [
      "The creative industry has changed dramatically! ✨ Digital platforms have democratized access, but they've also created new challenges. Many creators struggle with the business side—sales, marketing, contracts, legal issues. Traditional services often exploit this by charging high upfront fees with no guaranteed results. That's why HLPFL exists—to provide professional business support with aligned incentives. We've seen since 2009 how creators with business support dramatically outperform those going it alone. What industry trends are you curious about?",
      "The creator economy is evolving rapidly! 🚀 More people than ever can turn creative work into income—but the business side remains challenging. Predatory services, unfair contracts, and hidden fees are still common. That's why nonprofit models like HLPFL are so important. We advocate for fair treatment and provide the business support creators need without exploiting them. Zero upfront costs, commission-only, completely aligned incentives. What business challenges have you encountered?"
    ],
    default: [
      "Great question! 🤔 I'm here to help with anything about HLPFL—our nonprofit mission, commission-only services, partnership process, or how we help creative entrepreneurs. Whether you're an inventor, artist, musician, designer, or writer, I can explain how we might be able to help. What would you like to know?",
      "I'm here to help you learn about HLPFL! ✨ We're a 501(c)(3) nonprofit providing commission-only business development for creative entrepreneurs. Zero upfront costs—we earn when you earn. I can share information about our services, application process, or what makes our model different. What brought you to HLPFL today?",
      "Thanks for reaching out! 👋 HLPFL is a nonprofit helping creative entrepreneurs with business development—brand, sales, marketing, contracts—with zero upfront costs. We work with inventors, artists, musicians, designers, and writers. Our commission-only model means our success depends on yours. What aspect of HLPFL interests you most?"
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