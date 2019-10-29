import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '../components/singleComponents/Loading';

const Episodes = lazy(() => import('./Episodes'));
const Episod = lazy(() => import('./Episod'));
const Characters = lazy(() => import('./Characters'));
const Character = lazy(() => import('./Character'));
const Starships = lazy(() => import('./Starships'));

const Pages = () => {
    console.log('inPages');//TODO : DELETE
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/episodes" component={Episodes} exact />
                <Route path="/episode" component={Episod} />
                <Route path="/character" component={Character} />
                <Route path="/starships" component={Starships} />
                <Route path="/characters" component={Characters} />
                <Redirect from="*" to="/episodes" />
            </Switch>
        </Suspense>
    );
};
export default Pages;
