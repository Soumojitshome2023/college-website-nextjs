"use client"
import React from 'react'
import { CarouselCompo } from '@/components/Home/Carousel/Carousel'
import AboutCard from '@/components/Home/About/AboutCard'
import EventCard from '@/components/Home/EventCard/EventCard'


// ==================== Home Page ==================== 
export default function page() {
  return (
    <div>

      <CarouselCompo />
      <AboutCard />
      <EventCard />
    </div>
  )
}
