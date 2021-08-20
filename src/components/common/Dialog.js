import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import * as userActions from "../../redux/actions/users"

import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';


export default function CusDialog(props) {
    const { children, maxWidth, className = "" } = props;

    const dispatch = useDispatch();

    const [open, setModalOpen] = useState(true)


    function handleClose() {
        setModalOpen(false)
        dispatch(userActions.closeCustomModalDialog())
    }

    return (
        <div className="">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth={maxWidth}
                className={className}
                fullWidth
            >
                <DialogTitle className="modal-title">
                    <IconButton onClick={handleClose} className="close">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="dailogBox">
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}
