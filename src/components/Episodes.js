import React from 'react';
import { Box } from 'rebass';
import NavBar from './NavBar';
import Billboard from './Billboard';

import testEpisodos from '../utils/testFileForEpisodes';

const Episodes = () => {
    return (
        <>
            <NavBar />
            <Box textAlign="center">
                {testEpisodos.map(episod => {
                    return <Billboard key={episod.name} episod={episod} />;
                })}
            </Box>
        </>
    );
};
export default Episodes;
