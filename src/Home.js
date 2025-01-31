import React, { useState } from 'react';
import { Box } from 'rebass';
import { useQuery } from '@apollo/react-hooks';

import { themes, ThemeContext } from './Themes';
import Pages from './pages';
import LoginPage from './pages/LoginPage';
import { AUTHENTICATED_QUERY, THEMED_QUERY } from './querys';

const Home = () => {
    const authQuery = useQuery(AUTHENTICATED_QUERY).data;
    const themeQuery = useQuery(THEMED_QUERY).data;
    const [theme, setTheme] = useState(themeQuery.theme);

    document.body.style.backgroundColor = themes[theme].defaultBackground;
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: setTheme }}>
            <Box>{authQuery.authenticated ? <Pages /> : <LoginPage />}</Box>
        </ThemeContext.Provider>
    );
};
export default Home;
