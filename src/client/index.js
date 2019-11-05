import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import authLink from './auth';
import { typeDefs } from './local';
import { toggledThemes } from '../constants/theme.constants';
import { uris } from '../constants/uri.constants';

const httpLink = createHttpLink({
    uri: uris.GRAPHQL_SERVER,
});
const cache = new InMemoryCache();
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    typeDefs,
});

const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    if (user.token) return true;

    return false;
};
cache.writeData({
    data: {
        authenticated: getToken(),
        theme: localStorage.getItem('theme') || toggledThemes.DARK,
    },
});
export default client;
