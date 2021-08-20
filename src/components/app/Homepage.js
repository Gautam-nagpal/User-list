import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "./UserForm";

import * as userActions from "../../redux/actions/users"
import { useHistory } from "react-router-dom";


export default function Homepage(props) {
    const dispatch = useDispatch();
    const history = useHistory()

    const { userList = [] } = useSelector(state => state.users)

    const addUser = () => {
        dispatch(userActions.openCustomModalDialog({}, "UserForm"))
    }

    const changeRoute = () => {
        history.push("/users")
    }

    return (
        <Grid item xs={12}>
            <Grid container className="d-block">
                <Grid item={12} onClick={() => { changeRoute() }}>
                    GO to USer List
                </Grid>
                <Grid item={12}>
                    <Typography variant="h5">Welcome</Typography>
                    {/* <UserForm /> */}
                </Grid>
                <Grid item={12}>
                    <Button variant="contained" color="primary" onClick={() => { addUser() }}> Add a User</Button>
                </Grid>
                <Typography>{userList.length || 0} Users are there.</Typography>
            </Grid>
        </Grid>
    )
}