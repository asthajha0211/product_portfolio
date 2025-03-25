import React from "react"
import SocialIcons from "./SocialIcons"

interface AboutProps {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Hi! I am Astha Jha! A 2024 engineering graduate with a major in information technology! I completed my
          undergrad from VIT, Vellore in India. I made my first website at the age of 15, a rather lowsy displaysite of
          my school's website and decided I was going to change people's lives, when I entered university, I joined a
          technical chapter where I mainly handled marketing, content and communications between tech, design and
          management teams. I like to believe this is where my allegiance shifted from product development to product
          planning.
        </p>
        <p>
          I have interned at TVS Digital Singapore as a Data Analyst, Adeva Tech Group as Associate Program Manager, and
          Fintech First as a Quant Analyst and Application Developer. Apart from this, I co-founded a startup called
          Dimensions Technology, with the aim to integrate VR into the education sector!
        </p>
        <p>
          I have always wanted to make an impact in the lives of people around me, it started as taking part in debates
          and MUNs at school so that people would hear me out and eventually changed to helping build products that
          create a positive impact!
        </p>
        <p>
          I love to dance and read books! It is a life goal of mine to write and publish a book (hopefully fiction)
          someday! feel free to connect with me over X(formerly known as Twitter) or email!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-8">
        <SocialIcons />
      </div>
    </div>
  )
}

