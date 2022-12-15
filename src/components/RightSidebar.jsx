import React from 'react'
import ContentItem from './ui/ContentItem'
import ToggleButton from './ui/ToggleButton'
import logos from '../data/logos'

const RightSidebar = () => {
  return (
    <div className='sticky top-4 flex basis-60 flex-col gap-4'>
      <div className='overflow-hidden rounded-lg bg-gray-100'>
        <ContentItem title='Tesla Inc.' subtitle='2 new post' verified={true} />
        <ContentItem title='Apple' subtitle='1 new post' verified={true} />
        <ContentItem title='Amazon' verified={true} />
        <ContentItem title='BBC' verified={true} />
      </div>
      <ToggleButton title='By relevance' icon={logos.fire} />
    </div>
  )
}

export default RightSidebar
