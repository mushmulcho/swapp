import React from 'react';
import { Box } from 'rebass';
import NavBar from '../components/NavBar';
import SolidButtons from '../components/singleComponents/SolidButton';
import EpisodCard from '../components/EpisodComponents/EpisodCard';
import EpisodTextBox from '../components/EpisodComponents/EpisodTextBox';
import EpisodCharacterBox from '../components/EpisodComponents/EpisodCharacterBox';

import testEpisodos from '../utils/testFileForEpisodes';

const Episod = ({}) => {
    const loadMoreCharacters = () => {
        //we need to fetch another 5 characters and push it co EpisodCharacterBox
    };
    return (
        <>
            <NavBar />
            <Box textAlign="center" mx={[1, 3, 5]} width={'auto'}>
                <EpisodCard body={testEpisodos[0]} />
                <EpisodTextBox body={testEpisodos[0]} />
                <EpisodCharacterBox />
                <SolidButtons onClick={loadMoreCharacters} text="Load More" />
            </Box>
        </>
    );
};
export default Episod;
