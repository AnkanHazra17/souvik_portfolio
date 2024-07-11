import Grid from '@/components/Grid'
import SectionHeader from '@/components/SectionHeader'
import SectionSeconderyHeader from '@/components/SectionSeconderyHeader'

import React from 'react'

const Page = () => {
  return (
    <div className='py-8'>
      <SectionHeader text1='About myself' text2='Overview.'></SectionHeader>
      <div className='mt-10'>
        <Grid></Grid>
      </div>

      <div className='mt-20'>
        <SectionSeconderyHeader text1='My' text2='Approach'></SectionSeconderyHeader>
      </div>
    </div>
  )
}

export default Page