import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './static/css/main.scss'; // All of our styles

const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Stats = lazy(() => import('./pages/Stats'));
const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));


const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>Loading... </div>}>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/stats" component={Stats} />
                <Route exact path="/about" component={About} />
                <Route exact path="/cv" component={Resume} />
                <Route exact path="/research" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} status={404} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default App;