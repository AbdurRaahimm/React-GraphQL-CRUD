import {  useMutation } from "@apollo/client";
import { useState } from "react";
import EditPost from "./EditPost";
import { DELETE_POST } from "../mutation/mutation";

export default function Post({ post, refetch }) {
    const [editPost, setEditPost] = useState(null);
    const [deletePost] = useMutation(DELETE_POST);

    const handleDeletePost = async (postId) => {
        try {
            const confirmation = window.confirm('Are you sure you want to delete this post?');
            if (confirmation) {
                await deletePost({ variables: { id: postId } });
                alert('Post deleted successfully');
                // Refresh posts after mutation
                await refetch();
            }
        } catch (error) {
            console.error('Error deleting post', error);
        }
    };
    return (
        <>
            <article className='shadow-md p-5 px-10 space-y-3'>
                <h2 className='text-2xl font-bold capitalize'>{post.title}</h2>
                <p>{post.content}</p>
                <div className="flex space-x-2">
                    <button onClick={() => setEditPost(post)} popovertarget="EditPostModal" className='bg-green-600 text-white px-4 py-1 rounded-md capitalize'>Edit</button>
                    <button onClick={() => handleDeletePost(post.id)} className='bg-red-600 text-white px-4 py-1 rounded-md capitalize'>Delete</button>
                </div>
            </article>

            {/* Only show the EditPostModal if editPost is set */}
            {editPost && (
                <div id="EditPostModal" className="border-2 border-[#f6009c] rounded w-full sm:w-5/12 mx-auto" popover="true" >
                   <EditPost editPost={editPost} setEditPost={setEditPost} refetch={refetch} />
                </div>
            )}
        </>
    );
}
