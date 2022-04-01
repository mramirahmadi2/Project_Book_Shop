import React from 'react';
import Box from '@mui/material/Box';
import Style from './Style.module.css';


function InputNumbers(props) {
  return (
    <div>

      <Box>
        <input type='text' className={Style.type}  value={props.values} />
      </Box>
    </div>
  );
}

export default InputNumbers;