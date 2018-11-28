import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const client = new ApolloClient({
    link: new HttpLink({
        fetch,
        uri: '/graphql',
    }),
});

export default client;
