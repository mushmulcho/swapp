import React from 'react';
import { Box } from 'rebass';
import NavBar from '../components/NavBar';
import SolidButtons from '../components/singleComponents/SolidButton';
import SmallImageCard from '../components/SmallImageCard';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/singleComponents/Loading';
import Error from '../components/singleComponents/Error';
import { ALL_PEOPLE_QUERY } from '../querys';
import { Tiles } from '@rebass/layout';

const Characters = () => {

    const { data, loading, error, fetchMore } = useQuery(ALL_PEOPLE_QUERY, {
        variables: { first: 12 },
    });
    if (loading) return <Loading />;
    if (error) return <Error text="Failed to load Characters" />;

    const {
        allPeople: { edges, pageInfo },
    } = data;

    const loadMoreCharacters = () => {
        fetchMore({
            variables: { first: 12, after: pageInfo.endCursor },
            updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
                if (!allPeople.edges.length) return prev;
                return {
                    allPeople: {
                        ...allPeople,
                        edges: [...prev.allPeople.edges, ...allPeople.edges],
                    },
                };
            },
        });
    };
    return (
        <>
            <NavBar />
            <Tiles padding={4} columns={[1, 2, 3]}>
                {edges.map(character => {
                    return (
                        <SmallImageCard
                            key={character.node.id}
                            body={character.node}
                            to={`/characters/${character.node.id}`}
                        />
                    );
                })}
            </Tiles>
            {pageInfo.hasNextPage && (
                <Box sx={{ textAlign: 'center' }}>
                    <SolidButtons
                        style={{}}
                        onClick={loadMoreCharacters}
                        text="Load More"
                    />
                </Box>
            )}
        </>
    );
};
export default Characters;
