import { Button, Grid, Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import * as userAction from "../../redux/actions/users"

export default function Users(props) {
    const dispatch = useDispatch();

    const { userList = [] } = useSelector((state) => state.users);

    const onEdit = (e, index) => {
        let editData = userList[index]

        dispatch(userAction.openCustomModalDialog({ data: editData, index }, "UserForm"))
    }

    const onDelete = (e, index) => {
        let updatedUserList = [...userList]
        updatedUserList.splice(index, 1)
        dispatch(userAction.updateUserList(updatedUserList))
    }

    const addUser = () => {
        dispatch(userAction.openCustomModalDialog({}, "UserForm"))
    }

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item={12}>
                    <Typography>User List</Typography>
                    <Button variant="contained" color="primary"  onClick={() => { addUser() }}>Add User</Button>
                </Grid>

                <Grid item xs={12}>
                    <BasicTable rows={userList} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            </Grid>
        </Grid>
    )
}




function BasicTable(props) {
    const { rows = [], onDelete, onEdit } = props

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Movie</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.length ? rows.map((row, index) => {
                        const { movie = [] } = row
                        return (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email || ""}</TableCell>
                                <TableCell align="right">{row.address || ""}</TableCell>
                                <TableCell align="right">{movie && movie.map(item => item.title)}</TableCell>
                                <TableCell align="right">
                                    <EditIcon onClick={(e) => { onEdit(e, index) }} />
                                    <DeleteIcon onClick={(e) => { onDelete(e, index) }} />
                                </TableCell>
                            </TableRow>
                        )
                    }
                    )
                        :
                        <TableRow key={0}>
                            <TableCell component="th" scope="row">
                                No User List Found
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}