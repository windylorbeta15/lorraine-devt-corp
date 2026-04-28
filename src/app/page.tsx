import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import AgriSection from '@/app/components/Home/AgriSection'
import Team from '@/app/components/Home/Team'
import Founder from '@/app/components/Home/Founder'
import Gallery from '@/app/components/Home/Gallery'
import ContactUs from '@/app/components/Home/ContactUs'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Lorraine Devt Corp.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AgriSection />
      <Team />  
      <Gallery />
      <Founder />
      <ContactUs />
    </main>
  )
}
