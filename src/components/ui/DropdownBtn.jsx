import React from 'react'
import { Dropdown } from 'antd'
import arrow from '../../assets/svgs/arrow.svg'
import profile from '../../assets/svgs/profile.svg'
import settings from '../../assets/svgs/settings.svg'
import info from '../../assets/svgs/info.svg'
const items = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        <span className='text-base font-semibold'>Profile</span>
      </a>
    ),
    icon: <img src={profile} alt='profile' className='h-8' />,
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        <span className='text-base font-semibold'>Settings</span>
      </a>
    ),
    icon: <img src={settings} alt='profile' className='h-8' />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        <span className='text-base font-semibold'>Info</span>
      </a>
    ),
    icon: <img src={info} alt='profile' className='h-8' />,
    disabled: true,
  },
]

const DropdownButton = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger='click'
    className='flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 px-4 py-2 font-semibold duration-75 hover:bg-gray-200'
  >
    <a onClick={e => e.preventDefault()}>
      <div className='flex items-center gap-2'>
        <img
          src=''
          alt='avatar'
          className='h-10 w-10 rounded-full bg-gray-300'
        />
        IDDna
      </div>
      <img src={arrow} alt='open' className='h-5' />
    </a>
  </Dropdown>
)
export default DropdownButton
