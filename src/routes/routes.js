import { Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CustomDialog, Homepage, Users } from "../components"

export default function Routes() {

    return (
        <Switch>
            <PublicRoute exact path="/" component={Homepage} />
            <PublicRoute path="/users" component={Users} />
        </Switch>
    )
};

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <React.Fragment >
            <Route
                {...rest}
                render={
                    props => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 250);
                        return (
                            <Grid container component="main" className="main_container" >
                                <CustomDialog {...props} />
                                <Component {...props} />
                            </Grid>
                        )
                    }
                }
            />
        </React.Fragment>
    )
};