import DropdownButton from './ui/DropdownBtn'
import ContentItem from './ui/ContentItem'
import SectionItem from './ui/SectionItem'
import avatar from '../assets/svgs/avatar.svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../redux/user'
import DropDownBtnLoad from './loading/DropDownBtnLoad'

const LeftSidebar = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  return (
    <div className='sticky top-4 flex basis-60 flex-col gap-4 overflow-y-auto'>
      {user.loading ? <DropDownBtnLoad /> : <DropdownButton image={avatar} />}
      <div className='overflow-hidden rounded-lg bg-gray-100'>
        <ContentItem
          title='John Lenon'
          subtitle='Hello, how are you?'
          image={avatar}
          isPerson={true}
        />
        <ContentItem
          title='John Lenon'
          subtitle='Hello, how are you?'
          image={avatar}
          isPerson={true}
        />
        <ContentItem
          title='John Lenon'
          subtitle='Hello, how are you?'
          image={avatar}
          isPerson={true}
        />
        <ContentItem
          title='John Lenon'
          subtitle='Hello, how are you?'
          image={avatar}
          isPerson={true}
        />
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

export default LeftSidebar
