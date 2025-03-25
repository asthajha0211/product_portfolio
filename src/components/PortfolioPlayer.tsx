"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { cn } from "../lib/utils"
import React from "react"

interface PortfolioPlayerProps {
  darkMode: boolean
  onPlayPress: () => void
}

export default function PortfolioPlayer({ darkMode, onPlayPress }: PortfolioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying)
    onPlayPress()
  }

  return (
    <div className="relative flex justify-center">
      {/* Decorative Elements - Light mode */}
      {!darkMode && (
        <>
          <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full bg-[#d11414]/70 z-0"></div>
          <div className="absolute top-10 left-1/4 w-32 h-16 rounded-t-full bg-[#0b3bfb]/70 z-0"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 rounded-full bg-[#eeff00]/70 z-0"></div>
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 bg-[#990b97]/70 transform rotate-45 z-0"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-32 bg-[#0b3815]/70 z-0"></div>
          <div className="absolute bottom-0 right-1/4 h-16 w-32">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path d="M0,15 Q25,0 50,15 Q75,30 100,15" stroke="#0b3bfb" fill="none" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full border-4 border-[#d11414]/40 z-0"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-8 rounded-t-full border-t-4 border-l-4 border-r-4 border-[#eeff00]/40 z-0"></div>
        </>
      )}

      {/* Dark mode decorative elements */}
      {darkMode && (
        <>
          <div className="absolute top-0 right-1/4 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-10 left-1/4 w-40 h-20">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M0,50 A50,50 0 0,1 100,50" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,10 L90,90 M10,90 L90,10" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full border-3 border-white/20 z-0"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 rounded-full border-3 border-white/20 z-0"></div>
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 border-3 border-white/20 transform rotate-45 z-0"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-32 border-3 border-white/20 z-0"></div>
          <div className="absolute bottom-0 right-1/4 h-16 w-32">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path d="M0,15 Q25,0 50,15 Q75,30 100,15" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full border-3 border-white/20 z-0"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-8 rounded-t-full border-t-3 border-l-3 border-r-3 border-white/20 z-0"></div>
        </>
      )}

      {/* Portfolio Player Card - Translucent */}
      <div
        className={cn(
          "relative z-10 w-full max-w-md rounded-lg overflow-hidden shadow-lg backdrop-blur-sm",
          darkMode ? "bg-[#333333]/70" : "bg-[#d9d9d9]/70",
        )}
      >
        <div className="relative h-36 flex items-center px-4">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
            {/* Add picture light mode here */}
            {!darkMode && <img src="/placeholder.svg" alt="Astha Jha" className="w-full h-full object-cover" />}
            {/* Add picture dark mode here */}
            {darkMode && <img src="/placeholder.svg" alt="Astha Jha" className="w-full h-full object-cover" />}
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-medium">Portfolio</h1>
            <p className="text-sm opacity-70">Astha Jha</p>
          </div>
        </div>
        <div
          className={cn(
            "flex justify-center items-center py-3 space-x-4 backdrop-blur-sm",
            darkMode ? "bg-[#2c2c2c]/70" : "bg-[#dcdcdc]/70",
          )}
        >
          <button className="p-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className={cn("p-1 rounded-full text-white relative", darkMode ? "bg-[#333333]" : "bg-[#666666]")}
            onClick={handlePlayClick}
          >
            {/* Pulsing animation */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-75 bg-white/30"></span>
            {isPlaying ? <Pause className="w-5 h-5 relative z-10" /> : <Play className="w-5 h-5 relative z-10" />}
          </button>
          <button className="p-1">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

