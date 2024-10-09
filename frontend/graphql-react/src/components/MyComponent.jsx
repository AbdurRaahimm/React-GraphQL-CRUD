
import { useQuery, gql } from '@apollo/client';

const GET_HELLO = gql`
  query {
    hello,
    name
  }
`;

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <>
    <h1>{data.hello}</h1>
    <h2>{data.name}</h2>
    
  </>;
};

export default MyComponent;