import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export function Session({
    component: Component,
    isPrivate = false,
    ...rest
})
    {
        try{
            const { id: signed } =  JSON.parse(localStorage.getItem('user'));

            if(!isPrivate)
            {
                return <Redirect to="/" />
            }
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
