"use client"

import React, { useState, useEffect } from "react"
import PortfolioPlayer from "../components/portfolio-player"
import WorkGrid from "../components/work-grid"
import About from "../components/about"
import SocialIcons from "../components/social-icons"
import { cn } from "../lib/utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null) // Initially set as null
  const [currentPage, setCurrentPage] = useState("home")
  const [playPressed, setPlayPressed] = useState(false)

  // Set dark mode based on localStorage if available
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode) {
      setDarkMode(savedMode === "true")
    } else {
      setDarkMode(false)  // Default to light mode if not found
    }
  }, [])

  // Save dark mode preference to localStorage when it changes
  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("darkMode", darkMode.toString())
    }
  }, [darkMode])

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

  // Wait for the component to mount and avoid rendering until darkMode is set
  if (darkMode === null) {
    return <div>Loading...</div> // You can show a loading indicator while waiting for darkMode
  }

  return (
    <div
      style={{
        backgroundImage: currentPage === "home" ? (darkMode ? "url('./landing-page-shapes-dark.svg')" : "url('./landing-page-shapes-light.svg')") : "none",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: currentPage === "home" ? "100%" : "auto",
        width: "100%",
      }}
      className={cn(
        "min-h-screen flex flex-col transition-colors duration-300",
        darkMode ? "bg-[#2c2c2c] text-white" : "bg-[#fff8f8] text-[#333333]"
      )}
    >
      {/* Header with mode toggle */}
      <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8">
        <div className="flex justify-end mb-4">
          {darkMode ? (
            <button
              onClick={toggleLightMode}
              className="text-xs tracking-wider font-light flex items-center"
            >
              {/* Material Icon for sun with smaller size */}
              <span className="material-symbols-outlined text-sm mr-2" style={{ fontSize: '1rem', marginRight:3 }}>light_mode</span>
              lumos
            </button>
          ) : (
            <button
              onClick={toggleDarkMode}
              className="text-xs tracking-wider font-light flex items-center"
            >
              <span className="material-symbols-outlined text-sm mr-2" style={{ fontSize: '1rem', marginRight:1 }}>dark_mode</span>
              nox
            </button>
          )}
        </div>
      </div>




      {/* Main content wrapper - centers PortfolioPlayer */}
      <div className="flex-1 flex justify-center items-center w-full h-full p-4 md:p-6 lg:p-8">
        {currentPage === "home" && <PortfolioPlayer darkMode={darkMode} onPlayPress={handlePlayPress} />}
      </div>


      {currentPage !== "home" && (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-16">
          {/* Navigation Header - Only shown on work and about pages */}

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
              <a href="https://drive.google.com/file/d/1y_D1lYQKlblb8ykRAIpQSbH6vnkWbH7Y/view?usp=sharing" target="_blank" className="hover:underline" rel="noreferrer">
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


          {/* Page Content */}
          {currentPage === "work" && <WorkGrid darkMode={darkMode} />}

          {currentPage === "about" && <About darkMode={darkMode} />}

          {/* Social Media Icons - Only shown on work and about pages */}
          {currentPage !== "home" && (
            <div className="flex justify-center space-x-4 mt-16">
              <SocialIcons />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
