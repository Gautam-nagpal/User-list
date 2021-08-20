import React from 'react';
import { useSelector } from 'react-redux';
import CusDialog from './Dialog';
import UserForm from '../app/UserForm';


function CustomDialog(props) {
    const activeComponent = useSelector(state => state.users.activeComponent);

    switch (activeComponent) {
        case "UserForm":
            return <RenderModalWithComponent component={UserForm} {...props} />

        default:
            return <div />
    }

}

export default CustomDialog;



const RenderModalWithComponent = ({ component: Component, ...rest }) => {
    return (
        <React.Fragment>
            <CusDialog >
                <Component {...rest} />
            </CusDialog>
        </React.Fragment>
    )

}