import React, { useContext } from 'react';
import { Box } from 'rebass';
import { themes, ThemeContext } from '../components/Themes';
import NavBar from '../components/NavBar';
import CardBlank from '../components/singleComponents/CardBlank';
import SolidButtons from '../components/singleComponents/SolidButton';
import EpisodCharacterBox from '../components/EpisodComponents/EpisodCharacterBox';

const Characters = ({}) => {
    const { theme } = useContext(ThemeContext);
    const loadMoreCharacters = () => {};
    return (
        <>
            <NavBar />
            <Box mx={1}>
                <EpisodCharacterBox />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <SolidButtons
                    style={{}}
                    onClick={loadMoreCharacters}
                    text="Load More"
                />
            </Box>
        </>
    );
};
export default Characters;
