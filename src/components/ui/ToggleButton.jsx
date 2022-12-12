import { Switch } from 'antd'
import { useState } from 'react'

const ToggleButton = ({ title, icon }) => {
  const [checked, setChecked] = useState(true)

  return (
    <div
      onClick={() => {
        setChecked(!checked)
      }}
      className='flex cursor-pointer items-center gap-1 overflow-hidden rounded-lg bg-gray-100
      p-3 duration-75 hover:bg-gray-200'
    >
      <img src={icon} alt='relevance' className='h-7' />
      <span className='flex-1 font-bold'>{title}</span>
      <Switch checked={checked} className='ring-1 ring-gray-300' />
    </div>
  )
}
export default ToggleButton
