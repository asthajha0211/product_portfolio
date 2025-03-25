import { Twitter, Linkedin, Mail, Dribbble } from "lucide-react"
import Medium from "./medium-icon"
import React from "react"

export default function SocialIcons() {
  return (
    <>
      <a href="https://x.com/assthajha" target="_blank" className="opacity-80 hover:opacity-100 group relative">
        <Twitter className="w-5 h-5" />
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Twitter
        </span>
      </a>
      <a href="https://www.linkedin.com/in/astha-jha-495b221b6/" target="_blank" className="opacity-80 hover:opacity-100 group relative">
        <Linkedin className="w-5 h-5" />
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          LinkedIn
        </span>
      </a>
      <a href="https://dribbble.com/assthajha" target="_blank" className="opacity-80 hover:opacity-100 group relative">
        <Dribbble className="w-5 h-5" />
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Dribbble
        </span>
      </a>
      <a href="https://medium.com/@asthajha05" target="_blank" className="opacity-80 hover:opacity-100 group relative">
        <Medium className="w-5 h-5" />
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Medium
        </span>
      </a>
      <a href="mailto:asthajha05@gmail.com" className="opacity-80 hover:opacity-100 group relative">
        <Mail className="w-5 h-5" />
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Email
        </span>
      </a>
    </>
  )
}

