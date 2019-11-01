import gql from 'graphql-tag.macro';
import {
    EPISODE_FRAGMENT,
    PEOPLE_CONNECTION_FRAGMENT,
    PERSON_FRAGMENT,
    STARSHIPS_CONNECTION_FRAGMENT,
    PLANET_FRAGMENT,
    STARSHIP_FRAGMENT,
    SPECIES_FRAGMENT,
} from './fragments';

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
    query AllEpisodesQuery(
        $first: Int!
        $after: String
        $filter: EpisodeFilter
    ) {
        allEpisodes(first: $first, after: $after, filter: $filter) {
            edges {
                node {
                    ...EpisodeFragment
                }
                cursor
            }
            pageInfo {
                hasNextPage
            }
            totalCount
        }
    }
    ${EPISODE_FRAGMENT}
`;
export const EPISOD_QUERY = gql`
    query EpisodQuery($id: ID!, $first: Int, $after: String) {
        episode(id: $id) {
            ...EpisodeFragment
            people(first: $first, after: $after) {
                ...PeopleConnectionFragment
            }
        }
    }
    ${EPISODE_FRAGMENT}
    ${PEOPLE_CONNECTION_FRAGMENT}
`;
export const ALL_PEOPLE_QUERY = gql`
    query AllPeopleQuery($first: Int!, $after: String, $filter: PersonFilter) {
        allPeople(first: $first, after: $after, filter: $filter) {
            edges {
                node {
                    ...PersonFragment
                }
                cursor
            }
            pageInfo {
                hasNextPage
                endCursor
            }
            totalCount
        }
    }
    ${PERSON_FRAGMENT}
`;
export const STARSHIP_QUERY = gql`
    query StarshipQuery($id: ID!) {
        starship(id: $id) {
            ...StarshipFragment
        }
    }
    ${STARSHIP_FRAGMENT}
`;
export const SPECIES_QUERY = gql`
    query SpeciesQuery($id: ID!) {
        species(id: $id) {
            ...SpeciesFragment
        }
    }
    ${SPECIES_FRAGMENT}
`;
export const PLANET_QUERY = gql`
    query PlanetQuery($id: ID!) {
        planet(id: $id) {
            ...PlanetFragment
        }
    }
    ${PLANET_FRAGMENT}
`;
export const PERSON_QUERY = gql`
    query PersonQuery($id: ID!, $first: Int, $after: String) {
        person(id: $id) {
            ...PersonFragment
            starships(first: $first, after: $after) {
                ...StarshipsConnectionFragment
            }
        }
    }

    ${PERSON_FRAGMENT}
    ${STARSHIPS_CONNECTION_FRAGMENT}
`;
