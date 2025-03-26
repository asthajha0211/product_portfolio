import React from "react"
import SocialIcons from "./social-icons"

interface AboutProps {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-auto">
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          hi, i'm astha jha! a 2024 engineering graduate with a major in information technology. i completed my undergrad from vit, vellore, india.
          i made my first website at 10 — a (rather lousy) replica of my school’s website — and decided i was going to change the world.
          when i entered university, i joined a tech chapter but somehow ended up handling marketing, content, and communication between tech, design, and management teams.
          i like to believe that's where my allegiance shifted from product development to product planning.
        </p>

        <p>
          i've interned at TVS Digital, Singapore, as a data analyst, Aditya Birla Group, Indonesia as an associate program manager, and Futures First, Bangalore as a quant analyst and application developer.
          aside from this, i co-founded a startup called Dimensions Technology, aiming to integrate xr into education!
        </p>

        <p>
          making an impact has always been my thing. it started with debates and muns in school (because i wanted people to hear me out) and evolved into building products that actually make a difference.
        </p>

        <p>
          i love dancing and reading books, and it's a goal of mine to write and publish a book someday (hopefully fiction).
          feel free to connect with me over <a href="https://x.com/assthajha"><u>x (formerly known as twitter)</u></a> or <a href="mailto:asthajha05@gmail.com"><u>email</u></a>!
        </p>

      </div>

      {/* Social Media Icons */}
      {/* <div className="flex justify-center space-x-4 mt-8">
        <SocialIcons />
      </div> */}
    </div>
  )
}

