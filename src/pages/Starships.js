import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text } from 'rebass';
import NavBar from '../components/NavBar';
import { STARSHIP_QUERY } from '../querys';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/singleComponents/Loading';
import Error from '../components/singleComponents/Error';
import StarshipCard from '../components/StarshipComponents/StarshipCard';
import ThemedHeading from '../components/singleComponents/ThemedHeading';
import { Tiles } from '@rebass/layout';
import { themes, ThemeContext } from '../Themes';
import StarshipRadar from '../components/StarshipComponents/StarshipRadar';

const StarShips = () => {
    const { starshipId } = useParams();
    const { theme } = useContext(ThemeContext);
    const { data, loading, error } = useQuery(STARSHIP_QUERY, {
        variables: { id: starshipId },
    });
    if (loading) return <Loading />;
    if (error) return <Error text="Failed to load Episodes" />;
    const { starship } = data;

    return (
        <>
            <NavBar />
            <Box
                textAlign="center"
                m={4}
                mx={[3, 5, 6]}
                sx={{ gridGap: 4, width: 'auto' }}
            >
                <ThemedHeading style={{ fontSize: 6 }} text={starship.name} />
                <Text
                    color={themes[theme].secondDefaultFontColor}
                    sx={{ fontSize: [5], fontWeight: 800 }}
                >
                    ({starship.model})
                </Text>
                <hr style={{ border: '1px solid black' }} />
                <Tiles columns={[1, 2]} sx={{ gridGap: 5 }}>
                    <StarshipCard starship={starship} />

                    <Box>
                        <Box mb={[4, 3, 5]}>
                            <Text
                                color={themes[theme].secondDefaultFontColor}
                                sx={{ fontSize: [3], fontWeight: 800 }}
                            >
                                Compared to Starship Class Max
                            </Text>
                        </Box>
                        <StarshipRadar starship={starship} />
                    </Box>
                </Tiles>
            </Box>
        </>
    );
};

export default StarShips;
