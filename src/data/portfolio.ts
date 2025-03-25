export interface PortfolioItem {
  title: string
  description: string
  image: string
  link: string
  type: string
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "E-commerce Redesign",
    description: "A complete redesign of an e-commerce platform",
    image: "/placeholder.svg",
    link: "#",
    type: "design",
  },
  {
    title: "Brand Identity",
    description: "Creating a sustainable brand identity",
    image: "/placeholder.svg",
    link: "#",
    type: "design",
  },
  {
    title: "UX Research",
    description: "User research for a mobile application",
    image: "/placeholder.svg",
    link: "#",
    type: "design",
  },
  {
    title: "Business Strategy",
    description: "Strategies for tech startups",
    image: "/placeholder.svg",
    link: "#",
    type: "business",
  },
  {
    title: "Market Analysis",
    description: "Analysis of AI market trends",
    image: "/placeholder.svg",
    link: "#",
    type: "business",
  },
  {
    title: "Remote Work",
    description: "The future of remote work",
    image: "/placeholder.svg",
    link: "#",
    type: "blog",
  },
]

