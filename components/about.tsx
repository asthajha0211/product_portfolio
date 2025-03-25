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
          hi, i am astha jha! a 2024 engineering graduate with a major in information technology! I completed my undergrad from VIT, 
          Vellore in India. i made my first website at the age of 10, a (rather lousy) duplicate of my school’s website and decided i was going to 
          change people’s lives. when i entered university, i joined a technical chapter where i mainly handled marketing, content and communication 
          between tech, design and management teams. i like to believe this is where my allegiance shifted from product development to product planning. 
        </p>
        <p>
          i have interned at TVS Digital Singapore as a Data Analyst, Aditya Birla Group as a Associate Program Manager, and Futures First as a Quant Analyst 
          and Application Developer. apart from this, i co-founded a startup called Dimensions Technology, with the aim to integrate XR into the education sector! 
        </p>
        <p>
          i have always wanted to make an impact in the lives of people around me. it started as taking part in debates and MUNs at school so that people would hear me 
          out and eventually changed to helping build products that create a positive impact! 
        </p>
        <p>
        i love to dance and read books! it is a life goal of mine to write and publish a book (hopefully fiction) someday! 
        feel free to connect with me over X(formerly known as Twitter) or email!
        </p>
      </div>

      {/* Social Media Icons */}
      {/* <div className="flex justify-center space-x-4 mt-8">
        <SocialIcons />
      </div> */}
    </div>
  )
}

