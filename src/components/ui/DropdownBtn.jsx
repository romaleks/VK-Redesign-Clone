import React from 'react'
import { Dropdown } from 'antd'
import icons from '../../data/icons'
const items = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        <span className='text-base font-semibold'>Profile</span>
      </a>
    ),
    icon: <img src={icons.profile} alt='profile' className='h-8' />,
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        <span className='text-base font-semibold'>Settings</span>
      </a>
    ),
    icon: <img src={icons.settings} alt='profile' className='h-8' />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        <span className='text-base font-semibold'>Info</span>
      </a>
    ),
    icon: <img src={icons.info} alt='profile' className='h-8' />,
    disabled: true,
  },
]

const DropdownButton = ({ image, firstName, lastName }) => (
  <Dropdown
    menu={{
      items,
    }}
    trigger='click'
    className='flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 px-4 py-2 duration-75 hover:bg-gray-200'
  >
    <a onClick={e => e.preventDefault()}>
      <div className='flex items-center gap-2'>
        <img
          src={image}
          alt='avatar'
          className='h-10 w-10 rounded-full bg-gray-300'
        />
        <span className='font-bold leading-5'>
          {firstName} {lastName}
        </span>
      </div>
      <img src={icons.arrow} alt='open' className='h-5' />
    </a>
  </Dropdown>
)
export default DropdownButton
