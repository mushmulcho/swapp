import React from 'react';
import { Flex, Box } from 'rebass';
import { themes, ThemeContext } from './Themes';
import Logo from './singleComponents/Logo';
import ThemedLink from './singleComponents/ThemedLink';
import LogoutButton from './singleComponents/LogoutButton';

const NavBar = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Flex
                    px={2}
                    py={2}
                    alignItems="center"
                    bg={themes[theme].appBar.background}
                    borderColor={themes[theme].appBar.borderColor}
                >
                    <Logo small={true} />
                    <Box mx="auto" />
                    <ThemedLink path="#!" text="Episodes" />
                    <ThemedLink path="#!" text="Characters" />
                    <LogoutButton />
                </Flex>
            )}
        </ThemeContext.Consumer>
    );
};
export default NavBar;
