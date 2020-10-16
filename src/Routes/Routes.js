import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from '../App';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={App} />
        </Switch>
    )
}

export default Routes