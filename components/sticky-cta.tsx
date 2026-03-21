'use client'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useState } from 'react'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-cream-200 shadow-2xl z-40 md:hidden">
      <div className="max-w-full mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex-1">
          <p className="text-sm font-bold text-chocolate-900">
            <span className="line-through text-xs">R$ 685</span> R$ 37,90
          </p>
          <p className="text-xs text-chocolate-700">94% de desconto</p>
        </div>
        
        <Button 
          size="sm" 
          className="bg-chocolate-900 hover:bg-chocolate-800 text-white font-bold rounded-lg h-auto py-2 px-4 text-sm whitespace-nowrap"
        >
          Quero Meu Kit
        </Button>

        <button
          onClick={() => setIsVisible(false)}
          className="text-chocolate-400 hover:text-chocolate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
