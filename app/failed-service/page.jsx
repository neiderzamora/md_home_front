import FailedService from '@/components/failed-service/FailedService'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

export default function home() {
  return (
    <div>
      <Navbar/>
      <FailedService/>
    </div>
  )
}
