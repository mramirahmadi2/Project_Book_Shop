
import React from 'react';

import Box from '@mui/material/Box';
import StyleCard from './StyleCard.module.css';

// function Card(props) {


//     return (
//         <div >
//             <Box sx={{ display: 'flex',
//             m: 4,
//             p: 4,

//         }}>

//               <div className={StyleCard.basic}>
//               <span className={StyleCard.img}>{props.image}</span>
//                    <Box className={StyleCard.title}>{props.title}</Box>



//               </div>





//             </Box>
//         </div>

//     );
// }
const Card = (props) => {
    return (
        <div >
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }} >
                <div className={StyleCard.basic}>

                    {props.children}



                </div>






            </Box>
        </div>
    )
}

export default Card;