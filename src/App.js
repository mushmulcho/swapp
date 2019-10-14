import React, { useState, useRef, Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Box } from 'rebass';
import './App.css';
import { themes, ThemeContext } from './components/Themes';
import { userBlank } from './utils/userBlank';

const LoginPage = lazy(() => import('./components/Login'));
const Episods = lazy(() => import('./components/Episodes'));

const App = () => {
    const [theme, setTheme] = useState('dark');
    const [userData, setUserData] = useState(userBlank());
    console.log(userData);
    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: setTheme }}>
            <Box className="background" bg={themes[theme].defaultBackground}>
                {' '}
            </Box>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route
                            path="/login"
                            render={() => (
                                <LoginPage
                                    getUserData={setUserData}
                                ></LoginPage>
                            )}
                        />
                        <Route
                            path="/episodes"
                            render={() => <Episods></Episods>}
                        />
                        <Route
                            path="/"
                            render={props =>
                                false ? (
                                    <div>Home</div>
                                ) : (
                                    <Redirect
                                        to={{
                                            pathname: '/episodes',
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
