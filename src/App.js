import React, { useState, useRef, Suspense, lazy } from 'react';
import {
    Router,
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
import {history} from './history';

import PrivateRoute from './components/PrivateRoute';
const LoginPage = lazy(() => import('./pages/Login'));
const Episodes = lazy(() => import('./pages/Episodes'));
const Episod = lazy(() => import('./pages/Episod'));
const Characters = lazy(() => import('./pages/Characters'));
const Character = lazy(() => import('./pages/Character'));
const Starships = lazy(() => import('./pages/Starships'));

const App = ({ theme }) => {
    //const [theme, setTheme] = useState('dark');
    const [userData, setUserData] = useState(userBlank());
    console.log(userData);
    return (
        <ThemeContext.Provider value={{ theme: theme }}>
            <Box className="background" bg={themes[theme].defaultBackground}>
                {' '}
            </Box>
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <PrivateRoute exact path='/episodes' component={<Episodes />}/>
                        <Route
                            path="/login"
                            render={() => (
                                <LoginPage getUserData={setUserData} />
                            )}
                        />
                        <Route path="/episode" component={Episod} />
                        <Route path="/character" component={Character} />
                        <Route path="/starships" component={Starships} />
                        <Route path="/characters" component={Characters} />
                        <Redirect from="*" to="/episodes" />
                    </Switch>
                </Suspense>
            </Router>
        </ThemeContext.Provider>
    );
};

export default connect(Utils.mapStateToProps)(App);
