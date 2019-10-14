import React, { useState } from 'react';
import { Box, Card, Image } from 'rebass';
import { userBlank } from '../utils/userBlank';
import { themes, ThemeContext } from './Themes';
import NavBar from './NavBar';

import testEpisodos from '../utils/testFileForEpisodes';
import NormalText from './singleComponents/NormalText';
import ThemedHeading from './singleComponents/ThemedHeading';

const Episodes = ({}) => {
    function creatingResponsiveCards(theme) {}

    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <>
                    <NavBar></NavBar>
                    <Box textAlign="center">
                        {testEpisodos.map(episod => {
                            return (
                                <Card
                                    key={episod.name}
                                    bg={themes[theme].cards.background}
                                    borderColor={
                                        themes[theme].cards.borderColor
                                    }
                                    m={4}
                                    className="episodes-card"
                                >
                                    <Image
                                        width={256}
                                        height={345}
                                        src={episod.src}
                                    />
                                    <ThemedHeading
                                        size={4}
                                        text={episod.name}
                                    />
                                    <NormalText text={episod.info} />
                                </Card>
                            );
                        })}
                    </Box>
                </>
            )}
        </ThemeContext.Consumer>
    );
};
export default Episodes;
