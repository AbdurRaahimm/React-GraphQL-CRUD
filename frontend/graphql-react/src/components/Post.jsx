

export default function Post({ post }) {

    return (
        <article className='shadow-md p-5 px-10 space-y-3'>
            <h2 className='text-2xl font-bold capitalize'>{post.title}</h2>
            <p>{post.content}</p>
            <div className="flex space-x-2">
                <button className='bg-green-600 text-white px-4 py-1 rounded-md capitalize'>edit</button>
                <button className='bg-red-600 text-white px-4 py-1 rounded-md capitalize'>Delete</button>
            </div>
        </article>
    )
}
