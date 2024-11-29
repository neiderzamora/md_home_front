import DoctorDashboard from '@/components/Dashboard/DoctorDashboard'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <DoctorDashboard/>
    </div>
  )
}
