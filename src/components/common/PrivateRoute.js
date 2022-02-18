import React from 'react';
import { Route, Redirect } from 'react-route-dom';

const PrivateRoute = ({component: Component, ...rest})
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('auth') ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );


export default PrivateRoute;