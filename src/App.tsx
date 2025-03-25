"use client"

import { useState, useEffect } from "react"
import PortfolioPlayer from "./components/PortfolioPlayer"
import WorkGrid from "./components/WorkGrid"
import About from "./components/About"
import SocialIcons from "./components/SocialIcons"
import { cn } from "./lib/utils"
import React from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [playPressed, setPlayPressed] = useState(false)

  // Set dark mode based on localStorage if available
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode) {
      setDarkMode(savedMode === "true")
    }
  }, [])

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString())
  }, [])

  const toggleLightMode = () => {
    setDarkMode(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(true)
  }

  const navigateTo = (page: string) => {
    setCurrentPage(page)
  }

  const handlePlayPress = () => {
    setPlayPressed(true)
    navigateTo("work")
  }

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        darkMode ? "bg-[#2c2c2c] text-white" : "bg-[#fff8f8] text-[#333333]",
      )}
    >
      {/* Header with mode toggle */}
      <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8">
        <div className="flex justify-end mb-4">
          {darkMode ? (
            <button onClick={toggleLightMode} className="text-xs uppercase tracking-wider">
              lumos
            </button>
          ) : (
            <button onClick={toggleDarkMode} className="text-xs uppercase tracking-wider">
              nox
            </button>
          )}
        </div>

        {/* Main Content */}
        {currentPage === "home" && (
          <div className="mb-16">
            <PortfolioPlayer darkMode={darkMode} onPlayPress={handlePlayPress} />
          </div>
        )}
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-16">
        {/* Navigation Header - Only shown on work and about pages */}
        {currentPage !== "home" && (
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2
                className="text-xl font-medium cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => navigateTo("home")}
              >
                Astha Jha
              </h2>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="/resume.pdf" target="_blank" className="hover:underline" rel="noreferrer">
                resume
              </a>
              {currentPage === "work" && (
                <button onClick={() => navigateTo("about")} className="hover:underline">
                  about me
                </button>
              )}
              {currentPage === "about" && (
                <button onClick={() => navigateTo("work")} className="hover:underline">
                  my work
                </button>
              )}
            </div>
          </div>
        )}

        {/* Page Content */}
        {currentPage === "work" && <WorkGrid darkMode={darkMode} />}

        {currentPage === "about" && <About darkMode={darkMode} />}

        {/* Social Media Icons - Only shown on work and about pages */}
        {/* {currentPage !== "home" && (
          <div className="flex justify-center space-x-4 mt-16">
            <SocialIcons />
          </div>
        )} */}
      </div>
    </div>
  )
}

export default App

