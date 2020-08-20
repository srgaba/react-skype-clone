import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import api from '../util/api';


export function Session({
    component: Component,
    isPrivate = false,
    ...rest
})
    {
        try{
            const { token } =  JSON.parse(localStorage.getItem('user'));

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            if(!isPrivate)
            {
                return <Redirect to="/home" />
            };
            
        }catch(err)
        {   
            if(isPrivate)
            {
                return <Redirect to="/" />
            };
        };

        return (
            <Route
                {...rest}
                render={props => (
                    <Component {...props} />
                )}
            />
        );
}


Session.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

Session.defaultProps = {
    isPrivate: false
}
