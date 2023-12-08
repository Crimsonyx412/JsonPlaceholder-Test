import axios from 'axios'
import Loading from 'components/Loading'
import Post from 'components/Post'
import SearchInput from 'components/SearchInput'
import { useEffect, useState } from 'react'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>()
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(API_ENDPOINT)
      setPosts(response.data)
      setFilteredPosts(response.data)
    } catch (err) {
      setError('Error fetching data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSearch = () => {
    if (searchTerm) {
      const filtered = posts?.filter(
        (post) =>
          post.title.includes(searchTerm) || post.body.includes(searchTerm),
      )
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(posts)
    }
  }

  return (
    <main className="p-3 sm:p-10">
      {isLoading && <Loading />}
      {error && <span className="mb-5 text-lg text-red-500">{error}</span>}
      <SearchInput
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
        onSearch={handleSearch}
      />
      <div className="flex flex-col gap-3">
        {filteredPosts?.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
        {!filteredPosts?.length && <p className="text-xl">No posts</p>}
      </div>
    </main>
  )
}

export default Home
