import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddBoxIcon from '@mui/icons-material/AddBox';

const ButtonPlus = (props) => {
    return (
        <div>
            <Stack direction="row" spacing={1} onClick={props.onClick}>
                <IconButton color="success" aria-label="add to shopping cart">
                    <AddBoxIcon />
                </IconButton>
            </Stack>
        </div>
    )
}

export default ButtonPlus