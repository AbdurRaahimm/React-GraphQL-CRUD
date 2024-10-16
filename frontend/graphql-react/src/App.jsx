import { useQuery } from "@apollo/client";
import Layout from "./components/Layout";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import { GET_POSTS } from "./mutation/mutation";


function App() {
  const { data, loading, error, refetch } = useQuery(GET_POSTS);
  const posts = data?.posts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <Layout>
      <div className="flex justify-between items-center py-4 px-5 border-b-2">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button popovertarget="AddPostModal" className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">
          Add Post
        </button>
      </div>
      <div className="flex gap-4 flex-wrap justify-center py-5">
        {posts.length === 0 && (
          <div className="text-center">
            <p>No posts found.</p>
            <p>Add a post to get started.</p>
          </div>
        )}
        {
          posts.map(post => (
            <Post key={post.id} post={post} refetch={refetch} />
          ))
        }
      </div>

      <div id="AddPostModal" className="border-2 border-[#f6009c] rounded w-full sm:w-5/12 mx-auto" popover="true" >
        <AddPost refetch={refetch} />
      </div>

    </Layout>
  )
}

export default App
