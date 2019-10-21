import React, { useContext } from 'react';
import { Flex, Box } from 'rebass';
import { themes, ThemeContext } from './Themes';
import Logo from './singleComponents/Logo';
import ThemedLink from './singleComponents/ThemedLink';

const NavBar = () => {
    const { theme } = useContext(ThemeContext);
    const logoutStyle = {
        border: '1px',
        borderStyle: 'solid',
        borderColor: themes[theme].outlineButtons.borderColor,
        borderRadius: '5px',
        p: 1,
        bg: themes[theme].outlineButtons.background,
    };
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
            <ThemedLink path="/Episodes" text="Episodes" />
            <ThemedLink path="/Characters" text="Characters" />
            <ThemedLink
                path="/Login"
                className="glyphicon glyphicon-log-out"
                style={{ ...logoutStyle }}
            />
        </Flex>
    );
};
export default NavBar;
