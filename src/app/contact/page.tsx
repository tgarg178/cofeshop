import React from 'react'
import Contact from '@/components/Contact'



export const metadata = {
  title: "Contact Us | Start Your Coffee Plant Project Today",
  description:
    "Connect with our team for expert consultation, project planning, or support. We're ready to build coffee solutions that grow with your business—globally and sustainably.",
  keywords:
    "Connect with our team for expert consultation, project planning, or support. We're ready to build coffee solutions that grow with your business—globally and sustainably.",
  openGraph: {
    title: "Contact Us | Start Your Coffee Plant Project Today",
    description:
      "Connect with our team for expert consultation, project planning, or support. We're ready to build coffee solutions that grow with your business—globally and sustainably.",
    url: "https://qualityindustries.global/contact",
    images: [
      {
        url: "https://qualityindustries.global/img/logo.png",
        width: 800,
        height: 600,
        alt: "Contact Us | Start Your Coffee Plant Project Today",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://qualityindustries.global/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Start Your Coffee Plant Project Today",
    description: "Connect with our team for expert consultation, project planning, or support. We're ready to build coffee solutions that grow with your business—globally and sustainably.",
    images: ["https://qualityindustries.global/img/logo.png"],
  },
};
const page = () => {
  return (
    <>
    <Contact />
    </>
  )
}

export default page
