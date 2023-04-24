import '@/styles/globals.css';
// import Home from './index'
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client" ;
import React from 'react';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        {/* <Home /> */}
        <Component {...pageProps} />
    </ApolloProvider>
  ) 
}
