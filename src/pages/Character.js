import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text } from 'rebass';
import NavBar from '../components/NavBar';
import ThemedHeading from '../components/singleComponents/ThemedHeading';
import { Tiles } from '@rebass/layout';
import { PERSON_QUERY } from '../querys';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/singleComponents/Loading';
import Error from '../components/singleComponents/Error';
import { themes, ThemeContext } from '../Themes';
import PersonCard from '../components/CharacterComponents/PersonCard';
import SmallImageCard from '../components/SmallImageCard';

const Character = () => {
    const { theme } = useContext(ThemeContext);
    const { personId } = useParams();
    const { data, loading, error } = useQuery(PERSON_QUERY, {
        variables: { id: personId, first: 5 },
    });
    if (loading) return <Loading />;
    if (error) return <Error text={`Failed to load ${personId}`} />;
    const {
        person: { name, starships },
    } = data;

    return (
        <>
            <NavBar />
            <Box
                textAlign="center"
                m={4}
                mx={[3, 5, 6]}
                sx={{ gridGap: 4, width: 'auto' }}
            >
                <ThemedHeading style={{ fontSize: 6 }} text={name} />
                <hr style={{ border: '1px solid black' }} />
                <Tiles columns={[1, 2]} sx={{ gridGap: 5 }}>
                    <PersonCard person={data.person} />
                    <Box>
                        <Box>
                            <Text
                                color={themes[theme].secondDefaultFontColor}
                                sx={{ fontSize: [5], fontWeight: 800 }}
                            >
                                Piloted Starships
                            </Text>
                            <hr
                                style={{
                                    border: '1px solid silver',
                                    borderRadius: '5px',
                                    width: '100%',
                                }}
                            />
                        </Box>
                        <Tiles columns={1} sx={{ gridGap: 4 }}>
                            {starships.edges.map(starships => {
                                return (
                                    <SmallImageCard
                                        key={starships.node.id}
                                        to={`/starships/${starships.node.id}`}
                                        body={starships.node}
                                    />
                                );
                            })}
                        </Tiles>
                    </Box>
                </Tiles>
            </Box>
        </>
    );
};

export default Character;
