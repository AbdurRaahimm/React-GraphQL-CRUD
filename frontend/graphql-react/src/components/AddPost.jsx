import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
export default function AddPost({ refetch }) {
    const [createPost] = useMutation(CREATE_POST);

    const handleAddPost = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        try {
          await createPost({ variables: { title, content } });
          // refresh posts
          await refetch();
          e.target.reset();
        } catch (error) {
          console.error('Error creating post', error);
        }
      }
    return (
        <>
            <div className="flex justify-between items-center py-4 px-5 border-b-2">
                <h2 className="text-2xl font-bold">Add Post</h2>
                <button popovertarget="AddPostModal" className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">&times; </button>
            </div>
            <form onSubmit={handleAddPost} className="p-5">
                <label htmlFor="title">
                    Title :
                    <input type="text" className=" w-full border-2 border-gray-500 focus:ring-1 focus:ring-[#f6009c] px-2 py-1 rounded-md" name="title" id="title" />
                </label>
                <label htmlFor="content">
                    Content :
                    <textarea className=" w-full border-2 border-gray-500 focus:ring-1 focus:ring-[#f6009c] px-2 py-1 rounded-md" name="content" id="content" />
                </label>
                <button type="submit" className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">Add Post</button>
            </form>
        </>
    )
}
