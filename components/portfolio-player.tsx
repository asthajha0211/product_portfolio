"use client"

import React from "react"
import { useState } from 'react';
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { cn } from "../lib/utils"


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
    <div className="flex justify-center items-center w-full">
      <div
        className={cn(
          "mb-16 relative align-center max-h-screen z-10 w-full max-w-md rounded-lg overflow-hidden shadow-lg backdrop-blur-lg",
          darkMode ? "bg-[#333333]/70" : "bg-[#d9d9d9]/70"
        )}
      >
        <div className="relative h-36 flex items-center px-4">
          <div className="w-30 h-30 rounded-lg overflow-hidden mr-4">
            {/* Add picture light mode here */}
            {!darkMode && (
              <Image
                src="/self-image-light.jpg?height=80&width=80"
                alt="Astha Jha"
                width={80}
                height={80}
                className="object-cover"
              />
            )}
            {/* Add picture dark mode here */}
            {darkMode && (
              <Image
                src="/self-image-dark.jpeg?height=80&width=80"
                alt="Astha Jha"
                width={80}
                height={80}
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-medium">Portfolio</h1>
            <p className="text-sm opacity-70">Astha Jha</p>
            <div className="mt-2 w-full h-1 bg-gray-400/30 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gray-400"></div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex justify-center items-center py-3 space-x-4 backdrop-blur-sm",
            darkMode ? "bg-[#2c2c2c]/70" : "bg-[#dcdcdc]/70"
          )}
        >
          <button className="p-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className={cn("p-1 rounded-full text-white", darkMode ? "bg-[#333333]" : "bg-[#666666]")}
            onClick={handlePlayClick}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button className="p-1">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>



  )
}

