const posts = [
    { 
      id: '1',
      title: 'title 1',
      content: 'content 1'
    },
    { 
      id: '2',
      title: 'title 2',
      content: 'content 2'
    },
    
  ];
  
  const resolvers = {
    Query: {
      posts: () => posts,
      post: (_, { id }) => posts.find(post => post.id === id), 
    },

    Mutation: {
      createPost: (_, { ...post}) => {
        const newPost = { id: String(posts.length + 1), ...post }; // Spread 'post' to include its properties
        posts.push(newPost);
        return newPost;
      },
      updatePost: (_, { id, ...post }) => {
        const postIndex = posts.findIndex((post) => post.id === id);
        if (postIndex === -1) throw new Error('post not found');
    
        // Update the post with the new properties
        const updatedPost = { ...posts[postIndex], ...post }; // Spread the existing post data and update with the new post data
        posts[postIndex] = updatedPost;
        return updatedPost;
      },
      deletePost: (_, { id }) => {
        const postIndex = posts.findIndex((post) => post.id === id);
        if (postIndex === -1) throw new Error('post not found');
    
        const deletedPost = posts[postIndex];
        posts.splice(postIndex, 1); // Remove the post from the array
        return deletedPost;
      },
    },
    

  };
  
  module.exports = resolvers;
  