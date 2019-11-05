import React from 'react';
import NavBar from '../components/NavBar';
import Billboard from '../components/Billboard';
import { Tiles } from '@rebass/layout';
import { ALL_EPISODES_QUERY } from '../querys';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/singleComponents/Loading';
import Error from '../components/singleComponents/Error';

const Episodes = () => {
    const { data, loading, error } = useQuery(ALL_EPISODES_QUERY, {
        variables: { first: 99 },
    });
    if (loading) return <Loading />;
    if (error) return <Error text="Failed to load Episodes" />;
    const {
        allEpisodes: { edges },
    } = data;

    return (
        <>
            <NavBar />
            <Tiles m={4} mx={5} columns={[1, 2, 3]}>
                {edges
                    .sort((a, b) => a.node.episodeId - b.node.episodeId)
                    .map(episode => {
                        return (
                            <Billboard
                                key={episode.node.id}
                                episode={episode.node}
                            />
                        );
                    })}
            </Tiles>
        </>
    );
};
export default Episodes;
