"use client"
import React from 'react'
import { CarouselCompo } from '@/components/Home/Carousel/Carousel'
import AboutCard from '@/components/Home/About/AboutCard'
import EventCard from '@/components/Home/EventCard/EventCard'
import NoticeLine from '@/components/Home/NoticeLine/NoticeLine'


// ==================== Home Page ==================== 
export default function page() {

  const notices = [
    { text: 'Notice 1', link: '/notice1' },
    { text: 'Notice 2', link: '/notice2' },
    { text: 'Notice 3', link: '/notice3' },
    { text: 'Notice 4', link: '/notice4' },
    // Add more notices as needed
  ];

  return (
    <div>

      <CarouselCompo />
      <NoticeLine notices={notices} />
      <AboutCard />
      <EventCard />
    </div>
  )
}
