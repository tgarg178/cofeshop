import React from 'react'
import Aboutus from '@/components/Aboutus'


export const metadata = {
  title: "About Us | Experts in Coffee Plant Engineering & Process Solutions",
  description:
    "With decades of experience, we deliver complete turnkey systems for the coffee industry. Learn how our innovative approach, global expertise, and long-term partnerships define who we are.",
  keywords:
    "With decades of experience, we deliver complete turnkey systems for the coffee industry. Learn how our innovative approach, global expertise, and long-term partnerships define who we are.",
  openGraph: {
    title: "About Us | Experts in Coffee Plant Engineering & Process Solutions",
    description:
      "With decades of experience, we deliver complete turnkey systems for the coffee industry. Learn how our innovative approach, global expertise, and long-term partnerships define who we are.",
    url: "https://qualityindustries.global/about",
    images: [
      {
        url: "https://qualityindustries.global/img/logo.png",
        width: 800,
        height: 600,
        alt: "About Us | Experts in Coffee Plant Engineering & Process Solutions",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://qualityindustries.global/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Experts in Coffee Plant Engineering & Process Solutions",
    description: "With decades of experience, we deliver complete turnkey systems for the coffee industry. Learn how our innovative approach, global expertise, and long-term partnerships define who we are.",
    images: ["https://qualityindustries.global/img/logo.png"],
  },
};
const page = () => {
  return (
   <>
   <Aboutus/>
   </>
  )
}

export default page
