import React from 'react';
import { Switch } from 'react-router-dom';

import { Session } from './session';

import login from '../pages/login';
import register from '../pages/register';
import home from '../pages/home';

export default function ()
{
    return(
        <Switch>
            <Session path="/" exact component={login} />
            <Session path="/register" exact component={register} />
            <Session path="/home" exact component={home} isPrivate/>
        </Switch>
    );
}