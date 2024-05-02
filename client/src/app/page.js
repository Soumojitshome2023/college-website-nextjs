"use client"
import React, { useEffect } from 'react';
import { CarouselCompo } from '@/components/Home/Carousel/Carousel'
import AboutCard from '@/components/Home/About/AboutCard'
import NoticeLine from '@/components/Home/NoticeLine/NoticeLine'
import Accordion from '@/components/Home/Accordion/Accordion'
import EventCardSection from '@/components/Home/EventCard/EventCardSection';
import HighlightsSection from '@/components/Home/Highlights/HighlightsSection';


// ==================== Home Page ==================== 
export default function page() {

  return (
    <div>
      <CarouselCompo />
      <NoticeLine />
      <AboutCard />
      <EventCardSection />
      <HighlightsSection />
      <Accordion />
    </div>
  )
}
