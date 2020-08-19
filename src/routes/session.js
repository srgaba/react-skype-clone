import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export function Session({
    component: Component,
    isPrivate = false,
    ...rest
})
    {
        const { id: signed } =  JSON.parse(localStorage.getItem('user'));

        if(!signed && isPrivate)
        {
            return <Redirect to="/" />
        }

        if(signed && !isPrivate)
        {
            return <Redirect to="/home" />
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
