import Navbar from '@/components/navbar/navbar'
import ServiceHistory from '@/components/service-history/serviceHistory'
import ServiceHistoryDetail from '@/components/service-history/serviceHistoryDetail'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <ServiceHistory/>
      {/* <ServiceHistoryDetail/> */}
    </div>
  )
}
