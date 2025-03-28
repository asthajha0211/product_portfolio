"use client"

import React from "react"
import { useState } from 'react';
import Image from "next/image"
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
    <div className="flex justify-center items-center w-full m-8">
      <div
        className={cn(
          "mb-16 relative align-center max-h-screen z-10 w-full max-w-md rounded-lg overflow-hidden shadow-lg backdrop-blur-lg",
          darkMode ? "bg-[#333333]/70" : "bg-[#d9d9d9]/70"
        )}
      >
        <div className="relative h-32 flex items-center px-4">
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
            <p className="text-xs opacity-70">Press play to see my work!</p>
            <div className="w-full h-1 bg-gray-400/30 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gray-400"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {/* Left Chevron Button */}
          <button className="bg-gray-300 p-0">
            <span className="material-symbols-outlined text-xl">
              chevron_left
            </span>
          </button>

          {/* Play/Pause Button */}
          <span className="relative flex items-center">
            {/* Ping Animation */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75">
              <button
                style={{
                  backgroundColor: darkMode ? "#ffffff" : "#666666",
                  width: "27px",
                  height: "27px",
                  padding: "0",
                }}
                className={cn("p-0 rounded-full", darkMode ? "bg-[#ffffff] text-gray-800" : "bg-[#666666] text-white")}
              >
                {/* No content for ping animation */}
              </button>
            </span>
            {/* Play/Pause Icon */}
            <span className="relative inline-flex rounded-full">
              <button
                style={{
                  backgroundColor: "none",
                  padding: "0",
                }}
                className="p-0 rounded-full"
                onClick={handlePlayClick}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2rem', padding: 0 }}>
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
            </span>
          </span>

          {/* Right Chevron Button */}
          <button className="bg-gray-300 p-0">
            <span className="material-symbols-outlined text-xl">
              chevron_right
            </span>
          </button>
        </div>


      </div>
    </div>



  )
}

