import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { Box, Card, Button, Image, Heading, Text } from 'rebass';
import {} from '@rebass/forms';
import './App.css';
import LoginPage from './components/Login';
import { themes } from './components/Themes';

const App = () => {
    const [theme, setTheme] = useState('dark');

    return (
        <div className="App">
            <LoginPage theme={theme} changeTheme={setTheme}></LoginPage>
        </div>
    );
};

export default App;
