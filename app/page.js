import Navbar from '@/components/navbar/navbar'
import HomeDoctorService from '@/components/service-doctor/serviceDoc'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <HomeDoctorService/>
    </div>
  )
}
