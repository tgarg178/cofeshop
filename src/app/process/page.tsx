import React from 'react'
import Process from '@/components/Process'

export const metadata = {
  title: "Our Coffee Processing Solutions | From Extraction to Packaging",
  description:
    "Explore our complete coffee process solutions: aroma-optimized extraction, advanced evaporation, spray-drying, automation, and end-to-end system integration tailored for premium instant and soluble coffee.",
  keywords:
    "Explore our complete coffee process solutions: aroma-optimized extraction, advanced evaporation, spray-drying, automation, and end-to-end system integration tailored for premium instant and soluble coffee.",
  openGraph: {
    title: "Our Coffee Processing Solutions | From Extraction to Packaging",
    description:
      "Explore our complete coffee process solutions: aroma-optimized extraction, advanced evaporation, spray-drying, automation, and end-to-end system integration tailored for premium instant and soluble coffee.",
    url: "https://qualityindustries.global/process",
    images: [
      {
        url: "https://qualityindustries.global/img/logo.png",
        width: 800,
        height: 600,
        alt: "Our Coffee Processing Solutions | From Extraction to Packaging",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://qualityindustries.global/process",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Coffee Processing Solutions | From Extraction to Packaging",
    description: "Explore our complete coffee process solutions: aroma-optimized extraction, advanced evaporation, spray-drying, automation, and end-to-end system integration tailored for premium instant and soluble coffee.",
    images: ["https://qualityindustries.global/img/logo.png"],
  },
};

const page = () => {
  return (
   <>
   <Process/>
   </>
  )
}

export default page
