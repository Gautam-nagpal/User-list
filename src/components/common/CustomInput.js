import React from "react"
import { TextField } from '@material-ui/core';



export default function CustomInput(props) {
    const { onChange, value, error = '', type = 'text', placeholder = '', id = '', className = '', label, ...rest } = props

    return (
        <React.Fragment>
            <TextField
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                label={label}
                variant="outlined"
                className={className}
                placeholder={placeholder}
                {...rest}
            />
            {error && <p className="error">{error}</p>}
        </React.Fragment>
    )
}