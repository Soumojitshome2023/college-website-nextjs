"use client"
import React, { useEffect } from 'react';
import { CarouselCompo } from '@/components/Home/Carousel/Carousel'
import AboutCard from '@/components/About/AboutCard'
import NoticeLine from '@/components/Home/NoticeLine/NoticeLine'
import Accordion from '@/components/Home/Accordion/Accordion'
import EventCardSection from '@/components/EventCard/EventCardSection';
import HighlightsSection from '@/components/Highlights/HighlightsSection';
import DepartmentsSection from '@/components/Departments/DepartmentsSection';


// ==================== Home Page ==================== 
export default function page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  return (
    <div>
      <CarouselCompo />
      <NoticeLine />
      <AboutCard />
      <EventCardSection />
      <HighlightsSection />
      <DepartmentsSection />
      <Accordion />
    </div>
  )
}
