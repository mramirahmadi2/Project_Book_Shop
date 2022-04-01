import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Stack from '@mui/material/Stack';




export default function ButtonOrder(props) {
    

    
    return (
        <div>
         
          
            <Stack direction="row" spacing={1} onClick={props.onClick}>
                <IconButton color="error" aria-label="add to shopping cart">
                    <IndeterminateCheckBoxIcon />
                </IconButton>
            </Stack>
           
            
            
            
        </div>
    );
}

