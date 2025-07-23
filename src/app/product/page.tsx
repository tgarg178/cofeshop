import React from 'react'
import Services from '@/components/Services'



export const metadata = {
  title: "Coffee Processing Equipment & Plant Systems | Engineered for Performance",
  description:
    "Browse our high-performance equipment: extraction units, evaporators, dryers, and automation tools. Every product is custom-designed for quality, hygiene, and operational excellence in coffee production.",
  keywords:
    "Browse our high-performance equipment: extraction units, evaporators, dryers, and automation tools. Every product is custom-designed for quality, hygiene, and operational excellence in coffee production.",
  openGraph: {
    title: "Coffee Processing Equipment & Plant Systems | Engineered for Performance",
    description:
      "Browse our high-performance equipment: extraction units, evaporators, dryers, and automation tools. Every product is custom-designed for quality, hygiene, and operational excellence in coffee production.",
    url: "https://qualityindustries.global/product",
    images: [
      {
        url: "https://qualityindustries.global/img/logo.png",
        width: 800,
        height: 600,
        alt: "Coffee Processing Equipment & Plant Systems | Engineered for Performance",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://qualityindustries.global/product",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Processing Equipment & Plant Systems | Engineered for Performance",
    description: "Browse our high-performance equipment: extraction units, evaporators, dryers, and automation tools. Every product is custom-designed for quality, hygiene, and operational excellence in coffee production.",
    images: ["https://qualityindustries.global/img/logo.png"],
  },
};
const page = () => {
  return (
    <div>
      <Services/>
    </div>
  )
}

export default page
