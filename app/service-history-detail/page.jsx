import Navbar from '@/components/navbar/navbar'
import ServiceHistoryDetail from '@/components/service-history/serviceHistoryDetail'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <ServiceHistoryDetail/>
    </div>
  )
}
