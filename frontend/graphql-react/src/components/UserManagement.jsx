import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
const UserManagement = () => {
    const { loading, error, data, refetch } = useQuery(GET_USERS);
    const [createUser] = useMutation(CREATE_USER);
    const [updateUser] = useMutation(UPDATE_USER);
    const [deleteUser] = useMutation(DELETE_USER);
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const handleCreateUser = async (e) => {
      e.preventDefault();
  
      try {
        await createUser({ variables: { name, email } });
  
        // Clear form fields
        setName('');
        setEmail('');
  
        // Refetch users after mutation
        await refetch();
      } catch (error) {
        console.error('Error creating user', error);
      }
    };
  
    const handleUpdateUser = async (e, id) => {
      e.preventDefault();
  
      try {
        await updateUser({ variables: { id, name, email } });
  
        // Clear form fields
        setName('');
        setEmail('');
  
        // Refetch users after mutation
        await refetch();
      } catch (error) {
        console.error('Error updating user', error);
      }
    };
  
    const handleDeleteUser = async (id) => {
      try {
        await deleteUser({ variables: { id } });
  
        // Refetch users after mutation
        await refetch();
      } catch (error) {
        console.error('Error deleting user', error);
      }
    };
  
    return (
      <div>
        <h2>Create User</h2>
        <form onSubmit={handleCreateUser}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
  
        <h2>User List</h2>
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
              <form onSubmit={(e) => handleUpdateUser(e, user.id)}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Update</button>
              </form>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserManagement;
  