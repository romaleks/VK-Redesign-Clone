import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user'

const SubmitBtn = ({ title }) => {
  const user = useSelector(selectUser)

  return (
    <Button
      loading={!!user.loading}
      type='ghost'
      htmlType='submit'
      size='large'
      className='bg-blue-800 text-white'
    >
      {title}
    </Button>
  )
}

export default SubmitBtn
