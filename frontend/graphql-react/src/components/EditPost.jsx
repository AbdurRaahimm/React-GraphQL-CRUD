import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../mutation/mutation";

export default function EditPost({ editPost, setEditPost, refetch }) {
    const [updatePost] = useMutation(UPDATE_POST);

    const handleFormSubmit = async (e, postId) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;

        if (!title || !content) {
            alert('Please fill in all fields');
            return;
        }

        try {
            await updatePost({ variables: { id: postId, title, content } });
            alert('Post updated successfully');
            setEditPost(null); // Close the edit modal
            await refetch(); // Refresh posts after update
        } catch (error) {
            console.error('Error updating post', error);
        }
    };
    return (
        <>
            <div className="flex justify-between items-center py-4 px-5 border-b-2">
                <h2 className="text-2xl font-bold">Edit Post</h2>
                <button onClick={() => setEditPost(null)} className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">&times;</button>
            </div>
            <form onSubmit={(e) => handleFormSubmit(e, editPost.id)} className="p-5">
                <label htmlFor="title">
                    Title:
                    <input
                        type="text"
                        defaultValue={editPost.title}
                        className=" w-full border-2 border-gray-500 focus:ring-1 focus:ring-[#f6009c] px-2 py-1 rounded-md"
                        name="title" />
                </label>
                <label htmlFor="content">
                    Content:
                    <textarea
                        defaultValue={editPost.content}
                        className=" w-full border-2 border-gray-500 focus:ring-1 focus:ring-[#f6009c] px-2 py-1 rounded-md"
                        name="content"
                    />
                </label>
                <button type="submit" className="bg-[#f6009c] text-white px-4 py-1 rounded-md font-semibold">
                    Update
                </button>
            </form>
        </>
    )
}
