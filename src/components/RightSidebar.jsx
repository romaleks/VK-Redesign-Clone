import React from 'react'
import ContentItem from './ui/ContentItem'
import ToggleButton from './ui/ToggleButton'
import icons from '../data/icons'
import { useSelector } from 'react-redux'
import { selectNews } from '../redux/news'

const RightSidebar = () => {
  const news = useSelector(selectNews)

  return (
    <div className='sticky top-4 flex basis-60 flex-col gap-4'>
      <div className='overflow-hidden rounded-lg bg-gray-100'>
        <ContentItem
          title='Tesla'
          subtitle={`${news.numOfPosts.Tesla} new posts`}
          verified={true}
        />
        <ContentItem
          title='Apple'
          subtitle={`${news.numOfPosts.Apple} new posts`}
          verified={true}
        />
        <ContentItem
          title='Amazon'
          subtitle={`${news.numOfPosts.Amazon} new posts`}
          verified={true}
        />
        <ContentItem
          title='BBC'
          subtitle={`${news.numOfPosts.BBC} new posts`}
          verified={true}
        />
      </div>
      <ToggleButton title='By relevance' icon={icons.fire} />
    </div>
  )
}

export default RightSidebar
