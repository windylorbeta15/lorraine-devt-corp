import React from 'react'
import HomeBanner from '@/app/components/Home/HomeBanner'
import WhyUs from '@/app/components/Home/WhyUs'
import AboutUs from '@/app/components/Home/AboutUs'
import Team from '@/app/components/Home/Team'
import Founder from '@/app/components/Home/Founder'
import OurWork from '@/app/components/Home/OurWork'
import ContactUs from '@/app/components/Home/ContactUs'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Lorraine Devt Corp.',
}

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <WhyUs />
      <AboutUs />
      <Team />  
      <OurWork />
      <Founder />
      <ContactUs />
    </main>
  )
}
