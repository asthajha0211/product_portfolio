import React from "react"
import { cn } from "../lib/utils"

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  link: string
  type: string
  darkMode: boolean
}

export default function PortfolioCard({ title, description, image, link, type, darkMode }: PortfolioCardProps) {
  return (
    <a href={link} className="block group">
      <div
        className={cn("aspect-[4/3] rounded-sm overflow-hidden relative", darkMode ? "bg-[#333333]" : "bg-[#d9d9d9]")}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="absolute inset-0 p-3 flex flex-col justify-end group-hover:bg-black/50 transition-colors">
          <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="font-medium text-sm text-white">{title}</h3>
            <p className="text-xs text-white/80">{description}</p>
            <span className="text-xs text-white/60 mt-1 inline-block">{type}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

