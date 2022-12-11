import DropdownButton from './ui/DropdownBtn'
import ContentItem from './ui/ContentItem'
import SectionItem from './ui/SectionItem'

const Sidebar = () => {
  return (
    <div className='flex w-60 flex-col gap-4'>
      <DropdownButton />
      <div className='overflow-hidden rounded-lg bg-gray-100'>
        <ContentItem title='John Lenon' subtitle='Hello, how are you?' />
        <ContentItem title='John Lenon' subtitle='Hello, how are you?' />
        <ContentItem title='John Lenon' subtitle='Hello, how are you?' />
        <ContentItem title='John Lenon' subtitle='Hello, how are you?' />
        <div className='h-px w-full bg-gray-300'></div>
        <SectionItem title='Messages' />
      </div>
      <div className='overflow-hidden rounded-lg bg-gray-100'>
        <SectionItem title='Profile' />
        <SectionItem title='Friends' />
        <SectionItem title='News' />
        <SectionItem title='Communities' />
        <SectionItem title='Music' />
        <SectionItem title='Videos' />
        <SectionItem title='Photos' />
      </div>
    </div>
  )
}

export default Sidebar
