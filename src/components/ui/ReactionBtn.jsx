import { useState } from 'react'
import { get, ref } from 'firebase/database'
import { database } from '../../firebase/firebase'
import icons from '../../data/icons'

const ReactionBtn = ({
  type,
  icon,
  count,
  likePost,
  dislikePost,
  uid,
  postId,
}) => {
  const [curCount, setCurCount] = useState(count)

  const handleClick = async () => {
    const snapshot = await get(ref(database, `postsLikes/${postId}/${uid}`))
    const isLiked = snapshot.val()

    if (isLiked) {
      dislikePost()
      setCurCount(prev => prev - 1)
    } else {
      likePost()
      setCurCount(prev => prev + 1)
    }
  }

  return (
    <div
      onClick={type === 'like' ? handleClick : null}
      className='flex cursor-pointer items-center gap-1.5 rounded-xl bg-gray-200 py-2 px-3 hover:bg-gray-300'
    >
      <img src={icons[icon]} className='h-6' />
      <span className='text-lg font-bold'>
        {count !== undefined ? curCount : '—'}
      </span>
    </div>
  )
}

export default ReactionBtn
