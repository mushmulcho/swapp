import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '../components/singleComponents/Loading';

const Episodes = lazy(() => import('./Episodes'));
const Episode = lazy(() => import('./Episode'));
const Characters = lazy(() => import('./Characters'));
const Character = lazy(() => import('./Character'));
const Starships = lazy(() => import('./Starships'));

const Pages = () => {
    console.log('inPages'); //TODO : DELETE
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/episodes" component={Episodes} exact />
                <Route path="/episodes/:filmId" component={Episode} />
                <Route path="/characters/:personId" component={Character} />
                <Route path="/starships/:starshipId" component={Starships} />
                <Route path="/characters" component={Characters} />
                <Redirect from="*" to="/episodes" />
            </Switch>
        </Suspense>
    );
};
export default Pages;
