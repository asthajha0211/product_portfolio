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
    <div className="flex items-center justify-center min-h-screen overflow-hidden"> {/*"flex items-center justify-center min-h-screen relative flex justify-center">*/}
          {!darkMode && (
        <>
          <div className="absolute top-0 left-1/3 w-40 h-40 rounded-full border-4 border-[#d11414]/40  z-0"></div> {/* top inner colorless circle */}
          <div className="absolute top-1/3 right-1/5 w-40 h-20 bg-[#d11414]/40 rounded-b-full z-0"></div> {/* semi-circle */}
          <div className ="absolute top-1/3 left-1/4 w-40 h-40 z-0"> {/* green triangle */}
          <svg width="100" height="150" viewBox="0 0 250 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 343V0L250 343H0Z" fill="#0B3815" fillOpacity="0.84"/>
            </svg>
          </div>
          <div className="absolute -bottom-10 right-1/3 w-40 h-40 z-0" > {/*className="absolute" style={{ top: '400px', left: '600px' }} ///// rotated semi circle purple*/}
        <svg width="150" height="210" viewBox="0 0 340 284" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.9631e-05 67.322C52.4865 -8.51888 164.984 -21.5913 251.27 38.1238C337.556 97.8389 364.956 207.729 312.469 283.569C156.235 175.446 242.521 235.161 156.235 175.446C69.9487 115.731 156.235 175.446 6.9631e-05 67.322Z" fill="#990B97" fillOpacity="0.9"/>
        </svg>
      </div>
          {/* <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full bg-[#d11414]/70 z-0"></div> */}
          <div className="absolute -bottom-10 right-1/4 w-24 h-24 rounded-full bg-[#d11414]/70 z-0"></div> {/*green rectangle*/}
          <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-[#eeff00]/70  z-0"></div> {/* top inner yellow circle */}
          <div className="absolute -bottom-6 left-1/3 w-20 h-20 rounded-full border-4 border-[#d11414]/40 z-0"></div> {/* red inner colorless circle with square*/}
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 bg-[#990b97]/70 transform rotate-45 z-0"></div> {/*purple square*/}
          <div className="absolute -top-8 left-1/2 w-16 h-32 z-0">  {/*green rectangle*/}
          <svg width="150" height="90" viewBox="0 0 381 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="381" height="86" fill="#7BBF2D" fill-opacity="0.72"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-1/4 h-16 w-32"> {/*squiggly line */}
            {/* <svg viewBox="0 0 100 30" className="w-full h-full">
              <path d="M0,15 Q25,0 50,15 Q75,30 100,15" stroke="#0b3bfb" fill="none" strokeWidth="2" />
            </svg> */}
            <svg width="400" height="201" viewBox="0 0 454 255" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M470.143 6.21122C382.895 -7.33925 362.709 23.6118 363.522 40.7811C363.522 40.7811 360.779 73.127 323.013 100.996C285.246 128.864 259.31 95.981 235.474 108.606C211.639 121.232 197.973 150.377 156.953 172.105C115.934 193.832 102.438 179.074 66.9618 197.866C31.4855 216.657 2.29882 254.024 2.29882 254.024" stroke="#0B3BFB" strokeWidth="5"/>
            </svg>
          </div> 
          <div className="absolute bottom-1/2 right-1/3 w-16 h-8 rounded-t-full border-t-4 border-l-4 border-r-4 border-[#eeff00]/40 z-0"></div> {/*yellow semi circle arc */}
        </>
      )}
      {/* Dark mode decorative elements */}
      {darkMode && (
        <>
          <div className="absolute top-0 right-1/4 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,10 L90,90 M10,90 L90,10" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full border border-white/20 z-0"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full border border-white/20 z-0"></div>
          <div className="absolute top-1/3 left-1/3 w-40 h-40 z-0"> {/*rotated semi circle */}
            <svg width="150" height="210" viewBox="0 0 340 284" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.696427 67.1958C53.114 -8.00634 165.031 -20.9505 250.985 38.5349C336.939 98.0204 364.255 207.322 312.342 282.873L156.519 175.035L0.696427 67.1958Z" stroke="#666666"/>
            </svg>

          </div>
          <div className="absolute bottom-0 left-1/3 w-16 h-16 rounded-full border border-white/20 z-0"></div>
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 border border-white/20 transform rotate-45 z-0"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-32 border border-white/20 z-0"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-32 border border-white/20 z-0"></div>
          <div className="absolute bottom-0 right-1/4 h-16 w-32">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path d="M0,15 Q25,0 50,15 Q75,30 100,15" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 z-0"> {/*triangle */}
            <svg width="100" height="150" viewBox="0 0 251 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" x2="0.5" y2="340.32" stroke="#666666"/>
            <line y1="-0.5" x2="250.014" y2="-0.5" transform="matrix(0.999941 -0.0108691 0.00811088 0.999967 0 343)" stroke="#666666"/>
            <line y1="-0.5" x2="414.824" y2="-0.5" transform="matrix(0.594295 0.804247 -0.71056 0.703637 3.47217 9.37891)" stroke="#666666"/>
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full border border-white/20 z-0"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-8 rounded-t-full border-t border-l border-r border-white/20 z-0"></div>
        </>
      )}

      
      {/* Portfolio Player Card - Translucent */}
      <div
        className={cn(
          "relative z-10 w-full max-w-md rounded-lg overflow-hidden shadow-lg backdrop-blur-lg",
          darkMode ? "bg-[#333333]/70" : "bg-[#d9d9d9]/70",
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
            darkMode ? "bg-[#2c2c2c]/70" : "bg-[#dcdcdc]/70",
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

