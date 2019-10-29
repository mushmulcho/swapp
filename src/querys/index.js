import gql from 'graphql-tag.macro';

export const AUTHENTICATED_QUERY = gql`
    query IsAuthenticated {
        authenticated @client
    }
`;
export const THEMED_QUERY = gql`
    query provideTheme {
        theme @client
    }
`;
export const LOG_IN = gql`
    mutation LogIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            token
        }
    }
`;
export const ALL_EPISODES_QUERY = gql`
    query AllEpisodesQuery($first: Int!, $after: String, $filter: EpisodeFilter){
        allEpisodes
    }
`
