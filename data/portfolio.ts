export interface PortfolioItem {
  title: string
  description: string
  image: string
  link: string
  type: string
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "Fable Teardown",
    description: "A teardown of one of my favourite application, Fable!",
    image: "/fable-header.png?height=300&width=400",
    link: "https://drive.google.com/file/d/1vIqfrgg729frHQHLj86q20Jm1V0n4fki/view?usp=drive_link",
    type: "business",
  },
  {
    title: "Glassmorphism",
    description: "First attempt at a glass like effect on elements.",
    image: "/glassmorphism-header.png?height=300&width=400",
    link: "https://dribbble.com/shots/25640208-Glassmorphism",
    type: "design",
  },
  {
    title: "Beyond 4K",
    description: "Evolution of cinema and how technology fits in it.",
    image: "/beyond-four-k-header.png?height=300&width=400",
    link: "https://medium.com/@asthajha05/beyond-4k-ce319d753392",
    type: "blog",
  },
  {
    title: "Portfolio - Design",
    description: "My design file for this website!",
    image: "/p-website-header.png?height=300&width=400",
    link: "https://www.figma.com/design/tVEpfGBNq4GdV9hjKEPMvS/Product?node-id=138-1906&t=B3185enTo9q1Vz3Q-1",
    type: "design",
  },
  {
    title: "Tap Bonds - Teardown",
    description: "Teardown of a FinTech Startup",
    image: "/tap-bonds-teardown-header.png?height=300&width=400",
    link: "https://drive.google.com/file/d/16wLKbjddqxL3J7eUrWxN6nT4QVlNATb4/view?usp=sharing",
    type: "business",
  },
]

