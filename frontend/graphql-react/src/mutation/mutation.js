import gql from "graphql-tag";

export const GET_POSTS = gql`
   query{
    posts {
      id
      title
      content
    }
  }
`;

export const CREATE_POST = gql`
mutation CreatePost($title: String!, $content: String!) {
  createPost(title: $title, content: $content) {
    id
    title
    content
  }
}
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $title: String!, $content: String!) {
        updatePost(id: $id, title: $title, content: $content) {
            id
            title
            content
        }
    }`;

export const DELETE_POST = gql`
mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
        id
    }
}`;