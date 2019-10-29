import React, { useContext } from 'react';
import { Flex, Box } from 'rebass';
import { themes, ThemeContext } from '../Themes';
import Logo from './singleComponents/Logo';
import ThemedLink from './singleComponents/ThemedLink';

import LogoutButton from './singleComponents/LogoutButton';

const NavBar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Flex
            px={2}
            py={2}
            alignItems="center"
            bg={themes[theme].appBar.background}
            sx={{ borderColor: themes[theme].appBar.borderColor }}
        >
            <Logo small />
            <Box mx="auto" />
            <ThemedLink path="/episodes" text="Episodes" />
            <ThemedLink path="/characters" text="Characters" />
            <LogoutButton path="/login" />
        </Flex>
    );
};
export default NavBar;
