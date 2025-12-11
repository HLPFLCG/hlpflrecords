'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from './Button'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! Welcome to HLPFL Records. I'm here to help you with any questions about our artists, services, or how to submit your music. What can I assist you with today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const botResponses = {
    greetings: [
      "Hello! Welcome to HLPFL Records. How can I help you today?",
      "Hi there! I'm here to answer your questions about our record label.",
      "Welcome! What can I assist you with regarding our services or artists?"
    ],
    artist_submission: [
      "Great! We're always looking for new talent. You can submit your music through our contact page. Make sure to include a link to your music and a brief bio.",
      "Excellent! We'd love to hear your music. Please visit our contact page and submit your demo along with information about your musical style and career goals.",
      "Perfect! Artist submissions are handled through our contact form. Include your SoundCloud/Spotify links and tell us about your music journey."
    ],
    services: [
      "HLPFL Records offers comprehensive services including artist development, music production, global distribution, publishing & rights management, marketing & promotion, and career management.",
      "We provide complete music business solutions - from production to promotion. Our services include recording studio access, worldwide distribution, copyright protection, and strategic career guidance.",
      "Our services cover everything an artist needs: professional production, global platform distribution, marketing campaigns, royalty management, and personalized career development."
    ],
    artists: [
      "We work with over 50 talented artists across various genres including Pop, R&B, Hip-Hop, and Trap. You can view all our artists on the Artists page.",
      "Our roster features diverse talent from emerging voices to established stars. We specialize in developing artists for long-term success in the music industry.",
      "HLPFL Records represents exceptional musical talent across multiple genres. Each artist receives personalized development and strategic support."
    ],
    contact: [
      "You can reach us through our contact page, email us at info@hlpfl.org, or use this chat! We typically respond within 24-48 hours.",
      "Get in touch via our contact form for business inquiries, artist submissions, or general questions. You can also continue this conversation here!",
      "Contact us through our website's contact page or continue chatting here. We're here to help with any questions about our services or opportunities."
    ],
    about: [
      "HLPFL Records is a premier record label with 15+ years of experience, 200+ releases, and over 1 billion streams. We focus on artist development and long-term success.",
      "We're a world-class record label dedicated to discovering and developing exceptional talent. With decades of industry experience, we provide comprehensive support for artists at every career stage.",
      "HLPFL Records represents the pinnacle of artist development and music industry success. We've helped numerous artists achieve global recognition through our strategic approach."
    ],
    default: [
      "I'm here to help with questions about our artists, services, artist submissions, or any other information about HLPFL Records. Could you please rephrase your question?",
      "I can assist with information about our services, artist roster, submission process, or contact details. What specific information are you looking for?",
      "Feel free to ask me about our services, artists, how to submit music, or general inquiries about HLPFL Records. I'm here to help!"
    ]
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const generateBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return getRandomResponse('greetings')
    } else if (lowerMessage.includes('submit') || lowerMessage.includes('demo') || lowerMessage.includes('music') || lowerMessage.includes('artist')) {
      return getRandomResponse('artist_submission')
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('provide') || lowerMessage.includes('help')) {
      return getRandomResponse('services')
    } else if (lowerMessage.includes('artist') || lowerMessage.includes('roster') || lowerMessage.includes('talent')) {
      return getRandomResponse('artists')
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('call')) {
      return getRandomResponse('contact')
    } else if (lowerMessage.includes('about') || lowerMessage.includes('history') || lowerMessage.includes('story') || lowerMessage.includes('background')) {
      return getRandomResponse('about')
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
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking
    await new Promise(resolve => setTimeout(resolve, 1500))

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateBotResponse(inputValue),
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botResponse])
    setIsTyping(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center gap-2 ${isOpen ? 'hidden' : 'block'}`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="pr-2 font-medium">Chat with us</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-gray-900 rounded-lg shadow-2xl z-50 flex flex-col border border-gray-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h4 className="text-white font-semibold text-lg">HLPFL Assistant</h4>
              <p className="text-purple-100 text-sm">How can we help you today?</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'bg-gray-800 text-gray-100 border border-gray-700'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-100 border border-gray-700 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isTyping}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
          </div>
        </div>
      )}
    </>
  )
}