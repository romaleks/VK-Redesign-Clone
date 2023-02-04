import { Skeleton } from 'antd'

const DropDownBtnLoad = () => {
  return (
    <Skeleton
      avatar={{ size: 50, shape: 'circle' }}
      title={{ width: 150 }}
      paragraph={false}
      active
    ></Skeleton>
  )
}

export default DropDownBtnLoad
