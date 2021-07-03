import React from 'react';
import { Switch, Route } from 'react-router-dom';

// page import list

import Home from '../pages/home'
import NoMatch from '../pages/noMatch'
import Results from '../pages/results'

// ``````````````````````````````````````````````````````````````

const Switches = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/results' component={Results} />
                <Route component={NoMatch} />
            </Switch>
        </React.Fragment>
    )
}

export default Switches;