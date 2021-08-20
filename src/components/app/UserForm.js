import { Button, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import CustomInput from "../common/CustomInput";

import * as userAction from "../../redux/actions/users"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash"
import { validateUser } from "../../utilities/validations";

let initialState = {
    name: "",
    email: "",
    address: "",
    movie: []
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 }
];

export default function UserForm(props) {
    const dispatch = useDispatch();
    const history = useHistory()

    const { modalData = {}, userList = [] } = useSelector(state => state.users)

    const isEdit = _.isEmpty(modalData)

    const [data, setData] = useState(!isEdit ? { ...modalData.data } : { ...initialState })
    const [error, setErrors] = useState({})


    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedObj = { ...data }

        updatedObj = {
            ...updatedObj,
            [name]: value
        }
        let updatedError = { ...error }

        updatedError = {
            ...updatedError,
            [name]: ""
        }

        setData(updatedObj)
        setErrors(updatedError)
    }
    const handleChangeAutoComplete = (e, newVal) => {
        let updatedObj = { ...data }

        updatedObj = {
            ...updatedObj,
            movie: newVal
        }

        let updatedError = { ...error }

        updatedError = {
            ...updatedError,
            movie: ""
        }
        setData(updatedObj);
        setErrors(updatedError)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { isValid, errors } = validateUser(data);
        if (!isValid) {
            setErrors(errors)
            return
        }

        if (!isEdit) {
            let updatedList = [...userList]
            updatedList[modalData.index] = data;

            dispatch(userAction.updateUserList(updatedList))
        } else {
            dispatch(userAction.addUser(data))
            history.push("/users")

        }

        dispatch(userAction.closeCustomModalDialog())
    }

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className="d-flex jc-center"> {!isEdit ? "Edit" : "Add"} User</Typography>
                </Grid>
                <Grid item xs={12}>
                    <CustomInput
                        name="name"
                        label="Name"
                        value={data.name || ""}
                        onChange={(e) => { handleChange(e) }}
                        fullWidth
                        margin="normal"
                        error={error && error.name || ""}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomInput
                        name="email"
                        label="Email"
                        fullWidth
                        value={data.email || ""}
                        margin="normal"
                        onChange={(e) => { handleChange(e) }}
                        error={error && error.email || ""}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomInput
                        fullWidth
                        name="address"
                        label="Address"
                        value={data.address || ""}
                        onChange={(e) => { handleChange(e) }}
                        margin="normal"
                        error={error && error.address || ""}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={top100Films}
                        getOptionLabel={(option) => option && option.title || ""}
                        value={data.movie || []}
                        filterSelectedOptions
                        onChange={(e, newVal) => { handleChangeAutoComplete(e, newVal) }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Favroite Movie"
                                placeholder="movie"
                                name="movie"
                            />
                        )}
                    />
                    {error && error.movie && <p className="error">{error.movie}</p>}
                </Grid>
                <Grid item xs={12} className="d-flex jc-center">
                    <Button fullWidth variant="contained" color="primary" onClick={(e) => { handleSubmit(e) }}>{!isEdit ? "Update" : "Save"}</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}



