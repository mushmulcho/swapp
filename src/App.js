import React, { useState, useRef, useCallback, Suspense, lazy } from 'react';
import { Box, Card, Button, Image, Heading, Text } from 'rebass';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import './App.css';
import { ThemeContext } from './components/Themes';
import { userBlank } from './components/userBlank';

const LoginPage = lazy(() => import('./components/Login'));

const App = () => {
    const [theme, setTheme] = useState('dark');
    const [userData, setUserData] = useState(userBlank());
    console.log(userData);
    return (
        <ThemeContext.Provider value={theme}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route
                            path="/login"
                            render={() => (
                                <LoginPage
                                    theme={theme}
                                    changeTheme={setTheme}
                                    getUserData={setUserData}
                                ></LoginPage>
                            )}
                        />
                        <Route
                            path="/"
                            render={props =>
                                false ? (
                                    <div>Home</div>
                                ) : (
                                    <Redirect
                                        to={{
                                            pathname: '/login',
                                            state: { from: props.location },
                                        }}
                                    />
                                )
                            }
                        />
                    </Switch>
                </Suspense>
            </Router>
        </ThemeContext.Provider>
    );
};

export default App;
