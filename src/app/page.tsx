import React from 'react'
import Hero from '@/app/components/Home/Hero'
import WhyUs from '@/app/components/Home/WhyUs'
import AgriSection from '@/app/components/Home/AgriSection'
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
      <Hero />
      <WhyUs />
      <AgriSection />
      <Team />  
      <OurWork />
      <Founder />
      <ContactUs />
    </main>
  )
}
