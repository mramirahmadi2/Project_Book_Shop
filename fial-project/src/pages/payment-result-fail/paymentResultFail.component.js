import React from 'react'
import MenuNow from 'layouts';
import Box from '@mui/material/Box';
function paymentResultFail() {
    const paragraph = "پرداخت شما ناموفق بود. دوباره تلاش کنید."
    return (
        <div>
            <MenuNow>
                <Box  sx={{
                    mr:90,
                    pt:15
                    
                }}>
                    <svg width="436" height="436" viewBox="0 0 436 436" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M436 0H0V436H436V0ZM322.785 120.627C324.38 118.803 325.595 116.68 326.357 114.38C327.119 112.081 327.413 109.652 327.223 107.238C327.033 104.823 326.361 102.47 325.248 100.319C324.135 98.1671 322.603 96.2598 320.742 94.709C318.882 93.1583 316.729 91.9953 314.412 91.2886C312.095 90.582 309.66 90.3458 307.251 90.594C304.841 90.8423 302.505 91.5699 300.381 92.7342C298.257 93.8984 296.387 95.4757 294.881 97.3733L218 189.624L141.128 97.3733C139.613 95.5029 137.742 93.9522 135.622 92.8111C133.503 91.6701 131.178 90.9616 128.783 90.7267C126.388 90.4918 123.969 90.7352 121.669 91.4429C119.369 92.1505 117.232 93.3082 115.382 94.8487C113.533 96.3893 112.008 98.2819 110.897 100.417C109.785 102.552 109.109 104.886 108.907 107.284C108.706 109.683 108.983 112.097 109.722 114.388C110.461 116.678 111.649 118.799 113.215 120.627L194.356 218L113.215 315.373C111.62 317.196 110.405 319.32 109.643 321.62C108.881 323.919 108.587 326.348 108.777 328.762C108.967 331.177 109.639 333.53 110.752 335.681C111.865 337.833 113.397 339.74 115.258 341.291C117.118 342.842 119.271 344.005 121.588 344.711C123.905 345.418 126.34 345.654 128.749 345.406C131.159 345.158 133.495 344.43 135.619 343.266C137.743 342.102 139.613 340.524 141.119 338.627L218 246.376L294.881 338.627C296.387 340.524 298.257 342.102 300.381 343.266C302.505 344.43 304.841 345.158 307.251 345.406C309.66 345.654 312.095 345.418 314.412 344.711C316.729 344.005 318.882 342.842 320.742 341.291C322.603 339.74 324.135 337.833 325.248 335.681C326.361 333.53 327.033 331.177 327.223 328.762C327.413 326.348 327.119 323.919 326.357 321.62C325.595 319.32 324.38 317.196 322.785 315.373L241.644 218L322.785 120.627Z" fill="#F24E1E" />
                    </svg>
                    <p>{paragraph}</p>
                </Box>
            </MenuNow>
        </div>
    )
}

export default paymentResultFail;