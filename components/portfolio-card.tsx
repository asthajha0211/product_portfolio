// import Image from "next/image"
// import Link from "next/link"
// import { cn } from "../lib/utils"
// import React from "react"

// interface PortfolioCardProps {
//   title: string
//   description: string
//   image: string
//   link: string
//   type: string
//   darkMode: boolean
// }

// export default function PortfolioCard({ title, description, image, link, type, darkMode }: PortfolioCardProps) {
//   return (
//     <Link href={link} className="block group">
//       <div
//         className={cn("aspect-[4/3] rounded-sm overflow-hidden relative", darkMode ? "bg-[#333333]" : "bg-[#d9d9d9]")}
//       >
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           fill
//           className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         />

//         <div className="absolute inset-0 p-3 flex flex-col justify-end group-hover:bg-black/50 transition-colors">
//           <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
//             <h3 className="font-medium text-sm text-white">{title}</h3>
//             <p className="text-xs text-white/80">{description}</p>
//             <span className="text-xs text-white/60 mt-1 inline-block">{type}</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// import Image from "next/image";
// import Link from "next/link";
// import { cn } from "../lib/utils";
// import React from "react";

// interface PortfolioCardProps {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   type: string;
//   darkMode: boolean;
// }

// export default function PortfolioCard({
//   title,
//   description,
//   image,
//   link,
//   type,
//   darkMode,
// }: PortfolioCardProps) {
//   return (
//     <Link href={link} className="block group">
//       <div
//         className={cn(
//           "aspect-[4/3] rounded-sm overflow-hidden relative",
//           darkMode ? "bg-[#333333]" : "bg-[#d9d9d9]"
//         )}
//       >
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           fill
//           className="object-cover"
//         />

//         {/* Overlay that remains visible */}
//         <div className="absolute inset-0 p-3 flex flex-col justify-end bg-black/50 transition-colors">
//           <div>
//             <h3 className="font-medium text-sm text-white">{title}</h3>
//             <p className="text-xs text-white/80">{description}</p>
//             <span className="text-xs text-white/60 mt-1 inline-block">{type}</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  type: string;
  darkMode: boolean;
}

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  type,
  darkMode,
}: PortfolioCardProps) {
  return (
    <Link href={link} target='_blank' className="block group">
      <div
        className={cn(
          "aspect-[4/3] rounded-sm overflow-hidden relative",
          darkMode ? "bg-[#333333]" : "bg-[#d9d9d9]"
        )}
      >
        {/* Always visible image */}
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />

        {/* Overlay that appears only on hover */}
        <div className="absolute inset-0 p-3 flex flex-col justify-end bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-medium text-sm text-white">{title}</h3>
          <p className="text-xs text-white/80">{description}</p>
          <span className="text-xs text-white/60 mt-1 inline-block">{type}</span>
        </div>
      </div>
    </Link>
  );
}
