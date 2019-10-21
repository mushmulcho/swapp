import React, { useContext } from 'react';
import { Box } from 'rebass';
import { themes, ThemeContext } from './Themes';
import NavBar from './NavBar';
import CardBlank from './singleComponents/CardBlank';
import SolidButtons from './singleComponents/SolidButton';
import EpisodCharacterBox from './EpisodComponents/EpisodCharacterBox';

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
