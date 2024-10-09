import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../mutation/mutation";

export default function AddPost({ refetch }) {
  const [createPost] = useMutation(CREATE_POST);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (!title || !content) {
      alert("Title and Content are required.");
      return; // Prevent the mutation from executing if fields are empty
    }

    try {
      await createPost({ variables: { title, content } });
      alert('Post created successfully!');
      await refetch();
      e.target.reset();
    } catch (error) {
      console.error('Error creating post', error);
    }
  }

  return (
    <>
      <div className="flex justify-between items-center py-4 px-5 border-b-2">
        <h2 className="text-2xl font-bold">
          Add Post
        </h2>
        <button popovertarget="AddPostModal" className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">&times; </button>
      </div>
      <form onSubmit={handleFormSubmit} className="p-5">
        <label htmlFor="title">
          Title :
          <input
            type="text"
            className=" w-full border-2 border-gray-500 focus:ring-1 focus:ring-[#f6009c] px-2 py-1 rounded-md"
            name="title" />
        </label>
        <label htmlFor="content">
          Content :
          <textarea
            className=" w-full border-2 border-gray-500 focus:ring-1 focus:ring-[#f6009c] px-2 py-1 rounded-md"
            name="content"
          />
        </label>
        <button type="submit" className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">
          Submit
        </button>
      </form>
    </>
  )
}
