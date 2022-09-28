import { AppProps } from 'next/app';
import { ApolloClient, createHttpLink, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import '../styles/global.css'


export const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_APP_BASE_URL || 'https://sov-backend.herokuapp.com/graphql',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_APP_BASE_URL}`,
    credentials: 'same-origin',
  }),
  queryDeduplication: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
