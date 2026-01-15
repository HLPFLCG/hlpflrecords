'use client'

import dynamic from 'next/dynamic'

const Chatbot = dynamic(
  () => import('@/components/ui/Chatbot').then(mod => ({ default: mod.Chatbot })),
  { ssr: false }
)

export function ChatbotWrapper() {
  return <Chatbot />
}
