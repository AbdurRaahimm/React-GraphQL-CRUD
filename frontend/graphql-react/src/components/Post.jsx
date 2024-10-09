import { gql, useMutation } from "@apollo/client";

const DELETE_POST = gql`
    mutation DeletePost($id: ID!) {
        deletePost(id: $id) {
            id
        }
    }`;


export default function Post({ post, refetch }) {
    const [deletePost] = useMutation(DELETE_POST);

    const handleDeletePost = async (postId) => {
        try {
           const confirmation = window.confirm('Are you sure you want to delete this post?');
            if (confirmation) {
                await deletePost({ variables: { id: postId } });
                console.log('Post deleted successfully');
            }
            // Refresh posts after mutation
            await refetch();
        } catch (error) {
            console.error('Error deleting post', error);
        }
    }
    return (
        <article className='shadow-md p-5 px-10 space-y-3'>
            <h2 className='text-2xl font-bold capitalize'>{post.title}</h2>
            <p>{post.content}</p>
            <div className="flex space-x-2">
                <button className='bg-green-600 text-white px-4 py-1 rounded-md capitalize'>edit</button>
                <button onClick={() => handleDeletePost(post.id)} className='bg-red-600 text-white px-4 py-1 rounded-md capitalize'>Delete</button>
            </div>
        </article>
    )
}
