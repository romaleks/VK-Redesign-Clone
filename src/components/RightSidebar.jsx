import React from 'react'
import ContentItem from './ui/ContentItem'
import tick from '../assets/svgs/tick.svg'
import ToggleButton from './ui/ToggleButton'
import fire from '../assets/svgs/fire.svg'

const RightSidebar = () => {
  return (
    <div className='flex basis-60 flex-col gap-4'>
      <div className='overflow-hidden rounded-lg bg-gray-100'>
        <ContentItem title='Tesla Inc.' subtitle='2 new post' tick={tick} />
        <ContentItem title='Apple' subtitle='1 new post' tick={tick} />
        <ContentItem title='Amazon' tick={tick} />
        <ContentItem title='BBC' tick={tick} />
      </div>
      <ToggleButton title='By relevance' icon={fire} />
    </div>
  )
}

export default RightSidebar
