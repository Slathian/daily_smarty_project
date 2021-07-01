import React from 'react';
import { Switch, Route } from 'react-router-dom';

// page import list

import Home from '../pages/home'

// ``````````````````````````````````````````````````````````````

const Switches = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home}/>
                {/* <Route component={noMatch} /> */}
            </Switch>
        </React.Fragment>
    )
}

export default Switches;