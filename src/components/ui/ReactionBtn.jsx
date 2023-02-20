import { useEffect, useState } from 'react'
import { database } from '../../firebase/firebase'
import { get, ref } from 'firebase/database'
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
  const [likeStatus, setLikeStatus] = useState(null)

  useEffect(() => {
    const getLikeStatus = async () => {
      const snapshot = await get(ref(database, `postsLikes/${postId}/${uid}`))
      setLikeStatus(snapshot.val())
    }
    getLikeStatus()
  }, [])

  const handleClick = async () => {
    if (likeStatus) {
      dislikePost()
      setCurCount(prev => prev - 1)
      setLikeStatus(false)
    } else {
      likePost()
      setCurCount(prev => prev + 1)
      setLikeStatus(true)
    }
  }

  return (
    <div
      onClick={type === 'like' ? handleClick : null}
      className={
        'flex w-16 cursor-pointer items-center justify-center gap-1.5 rounded-xl py-2 ' +
        (likeStatus ? 'bg-red-300' : 'bg-gray-200 hover:bg-gray-300')
      }
    >
      <img
        src={likeStatus ? icons['active_like'] : icons[icon]}
        className='h-6'
      />
      <span className='text-lg font-bold'>
        {count !== undefined ? curCount : '—'}
      </span>
    </div>
  )
}

export default ReactionBtn
