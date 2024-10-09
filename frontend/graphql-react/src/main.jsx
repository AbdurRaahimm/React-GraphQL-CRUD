import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.jsx'
import './index.css'


const client = new ApolloClient({
  uri: 'http://localhost:4000', // Replace with your actual server URL
  cache: new InMemoryCache(),  // For caching data if needed  
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
