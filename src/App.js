import React, { useState, useRef, Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Box } from 'rebass';
import './App.css';
import './fonts/SWFont.css';
import 'bootstrap/dist/css/bootstrap.css';
import { themes, ThemeContext } from './components/Themes';
import { userBlank } from './utils/userBlank';
import Utils from './Utils';
import { connect } from 'react-redux';

const LoginPage = lazy(() => import('./components/Login'));
const Episods = lazy(() => import('./components/Episodes'));
const Episod = lazy(() => import('./components/Episod'));
const Characters = lazy(() => import('./components/Characters'));
const Character = lazy(() => import('./components/Character'));
const Starships = lazy(() => import('./components/Starships'));

const App = ({ theme }) => {
    //const [theme, setTheme] = useState('dark');
    const [userData, setUserData] = useState(userBlank());
    console.log(userData);
    return (
        <ThemeContext.Provider value={{ theme: theme }}>
            <Box className="background" bg={themes[theme].defaultBackground}>
                {' '}
            </Box>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route
                            path="/login"
                            render={() => (
                                <LoginPage getUserData={setUserData} />
                            )}
                        />
                        <Route path="/episodes" render={() => <Episods />} />
                        <Route path="/episode" render={() => <Episod />} />
                        <Route path="/character" render={() => <Character />} />
                        <Route path="/starships" render={() => <Starships />} />
                        <Route
                            path="/characters"
                            render={() => <Characters />}
                        />
                        <Route
                            path="/"
                            render={props =>
                                false ? (
                                    <div>Home</div>
                                ) : (
                                    <Redirect
                                        to={{
                                            pathname: '/characters',
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

export default connect(Utils.mapStateToProps)(App);
