"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { portfolioData } from "../data/portfolio"
import PortfolioCard from "./portfolio-card"
import React from "react"

interface WorkGridProps {
  darkMode: boolean
}

export default function WorkGrid({ darkMode }: WorkGridProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [types, setTypes] = useState<string[]>([])

  // Extract unique types from portfolio data
  useEffect(() => {
    const uniqueTypes = Array.from(new Set(portfolioData.map((item) => item.type)))
    setTypes(uniqueTypes)
  }, [])

  // Filter portfolio items based on active tab
  const filteredItems = activeTab === "all" ? portfolioData : portfolioData.filter((item) => item.type === activeTab)

  return (
    <div>
      {/* Navigation Tabs */}
      <div className="border-b border-gray-300 mb-8">
        <nav className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab("all")}
            className={cn("pb-2 px-2 text-sm", activeTab === "all" ? "border-b-2 border-current" : "opacity-70")}
          >
            all
          </button>

          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={cn("pb-2 px-2 text-sm", activeTab === type ? "border-b-2 border-current" : "opacity-70")}
            >
              {type}
            </button>
          ))}
        </nav>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 overflow-auto">
        {filteredItems.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            type={item.type}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  )
}

