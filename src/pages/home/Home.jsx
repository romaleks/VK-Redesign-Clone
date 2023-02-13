import Header from '../../components/Header'
import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'
import PostForm from './PostForm'
import Post from './Post'
import { useEffect } from 'react'
import { selectUser, saveData } from '../../redux/user'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import PostFormLoad from '../../components/loading/PostFormLoad'
import PostLoad from '../../components/loading/PostLoad'
import { getNews, selectNews } from '../../redux/news'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const news = useSelector(selectNews)
  let posts = [...news.posts]

  useEffect(() => {
    onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        const { email, uid } = userAuth
        dispatch(saveData({ email, uid }))
      }
    })

    dispatch(getNews('Tesla'))
    dispatch(getNews('Apple'))
    dispatch(getNews('Amazon'))
    dispatch(getNews('BBC'))
  }, [])

  return (
    <>
      <Header />
      <div className='m-auto flex max-w-7xl items-start gap-4 py-6 px-4'>
        <>
          <LeftSidebar />
          <div className='flex flex-1 flex-col gap-4'>
            {user.loading ? <PostFormLoad /> : <PostForm />}
            {news.loading ? (
              <>
                <PostLoad />
                <PostLoad />
              </>
            ) : (
              <>
                {posts
                  .sort(
                    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
                  )
                  .map((post, index) => (
                    <Post
                      key={index}
                      source={post.source.name}
                      title={post.title}
                      description={post.description}
                      logo={post.keyWord}
                      timeAgo={post.publishedAt}
                      image={post.urlToImage}
                      articleSrc={post.url}
                      verified={post.verified}
                    />
                  ))}
              </>
            )}
          </div>
          <RightSidebar />
        </>
      </div>
    </>
  )
}

export default Home
