import { useQuery, gql } from "@apollo/client";
import Layout from "./components/Layout";
import Post from "./components/Post";

const GET_POSTS = gql`
   query{
    posts {
      id
      title
      content
    }
  }
`;



function App() {
  const { data, loading, error, } = useQuery(GET_POSTS);
  const posts = data?.posts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <Layout>
      <div className="flex justify-between items-center py-4 px-5 border-b-2">
      <h1 className="text-2xl font-bold">Posts</h1>
      <button className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">Add Post </button>
      </div>
     <div className="flex gap-4 flex-wrap justify-center py-5">
     {
        posts.map(post => (
         <Post key={post.id} post={post} />
        ))
      }
     </div>
    </Layout>
  )
}

export default App
