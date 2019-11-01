import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'rebass';
import NavBar from '../components/NavBar';
import SolidButtons from '../components/singleComponents/SolidButton';
import EpisodeCard from '../components/EpisodeComponents/EpisodeCard';
import EpisodeTextBox from '../components/EpisodeComponents/EpisodeTextBox';
import SmallImageCard from '../components/SmallImageCard';
import { EPISOD_QUERY } from '../querys';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/singleComponents/Loading';
import Error from '../components/singleComponents/Error';
import { Tiles } from '@rebass/layout';

const Episodе = () => {
    const { filmId } = useParams();
    const { data, loading, error, fetchMore } = useQuery(EPISOD_QUERY, {
        variables: { id: filmId, first: 5 },
    });
    if (loading) return <Loading />;
    if (error) return <Error text="Failed to load Episodes" />;
    const { episode } = data;

    const loadMoreCharacters = () => {
        fetchMore({
            variables: {
                id: filmId,
                first: 5,
                after: episode.people.pageInfo.endCursor,
            },
            updateQuery: (
                prev,
                {
                    fetchMoreResult: {
                        episode: { people },
                    },
                },
            ) => {
                if (!people.edges.length) return prev;
                return {
                    episode: {
                        ...prev.episode,
                        people: {
                            ...people,
                            edges: [
                                ...prev.episode.people.edges,
                                ...people.edges,
                            ],
                        },
                    },
                };
            },
        });
    };
    return (
        <>
            <NavBar />
            <Box textAlign="center">
                <Tiles m={4} mx={(2, 4, 6)} sx={{ gridGap: 4, width: 'auto' }}>
                    <EpisodeCard episode={episode} />
                    <EpisodeTextBox episode={episode} />
                    <Tiles columns={[1, 2, 3]}>
                        {episode.people.edges.map(character => {
                            return (
                                <SmallImageCard
                                    key={character.node.id}
                                    to={`/characters/${character.node.id}`}
                                    body={character.node}
                                />
                            );
                        })}
                    </Tiles>
                </Tiles>
                {episode.people.pageInfo.hasNextPage && (
                    <SolidButtons
                        onClick={loadMoreCharacters}
                        text="Load More"
                    />
                )}
            </Box>
        </>
    );
};
export default Episodе;
