import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ButtonLink = (props)=>{
    return(
        <div>
           <Box>
             <Button  variant="contained" color="secondary">
               {props.link}
             </Button>
           </Box>
        </div>
    )
} 
 

export default ButtonLink;