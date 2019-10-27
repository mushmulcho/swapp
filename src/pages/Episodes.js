import React from 'react';
import NavBar from '../components/NavBar';
import Billboard from '../components/Billboard';
import {Tiles} from '@rebass/layout';
import testEpisodos from '../utils/testFileForEpisodes';

const Episodes = () => {
    return (
        <>
            <NavBar />
            <Tiles columns={[1,2,3]}>
                {testEpisodos.map(episod => {
                    return <Billboard key={episod.name} episod={episod} />;
                })}
            </Tiles>
        </>
    );
};
export default Episodes;
