import gql from 'graphql-tag.macro';

export const EPISODE_FRAGMENT = gql`
    fragment EpisodeFragment on Episode {
        id
        title
        episodeId
        openingCrawl
        image
        director
        releaseDate
    }
`;
export const PLANET_FRAGMENT = gql`
    fragment PlanetFragment on Planet {
        id
        name
        diameter
        population
    }
`;
export const SPECIES_FRAGMENT = gql`
    fragment SpeciesFragment on Species {
        id
        name
        classification
        averageHeight
        averageLifespan
    }
`;
export const PERSON_FRAGMENT = gql`
    fragment PersonFragment on Person {
        id
        name
        birthYear
        height
        mass
        image
        homeworld {
            ...PlanetFragment
        }
        species {
            ...SpeciesFragment
        }
    }
    ${PLANET_FRAGMENT}
    ${SPECIES_FRAGMENT}
`;
export const STARSHIP_FRAGMENT = gql`
    fragment StarshipFragment on Starship {
        id
        name
        model
        image
        starshipClass
        cost
        maxAtmosphericSpeed
        maxMLPerHour
        hyperdriveRating
        crew
    }
`;
export const PEOPLE_CONNECTION_FRAGMENT = gql`
    fragment PeopleConnectionFragment on PeopleConnection {
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
    ${PERSON_FRAGMENT}
`;

export const STARSHIPS_CONNECTION_FRAGMENT = gql`
    fragment StarshipsConnectionFragment on StarshipsConnection {
        edges {
            node {
                ...StarshipFragment
            }
            cursor
        }
        pageInfo {
            hasNextPage
            endCursor
        }
        totalCount
    }
    ${STARSHIP_FRAGMENT}
`;
