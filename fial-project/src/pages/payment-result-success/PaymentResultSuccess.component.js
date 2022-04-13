import axios from 'axios';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import MenuNow from 'layouts/index';
import Box from '@mui/material/Box';




function PaymentResultSuccess() {
    const paragraph = " پرداخت شما موفقت آمیز بود. ممنون از خریدتان";
    const { userName } =  useParams();
    const [Get, setGet] = React.useState(null);


    React.useEffect(() => {
      axios.get(`http://localhost:3002/orders`).then(res => {
        console.log(res);
        setGet(res.data)
      }
      ).catch(err => {
        console.log(err);
  
      })
    }, []);
  
    // "date": "2022-04-11T08:09:57.675Z",
    // "formOrder": "formOrder:محمدرضا امیراحمدی",
    // "createdAt": 1649319036471,
    if (!Get) return null;

    const User = {userName}
    console.log(User.userName)

    let codeOrder =  Get.map((Get)=>{
        if(Get.userName === User.userName){
            return(
                Get.createdAt
            )
        }
        console.log(`hi`);
    });
    
    const showCodeOrder = "کد سفارش :"



    return (
        <div>
            <MenuNow>
                <Box sx={{
                    mr:90,
                    pt:15
                    
                }}>

                    <svg width="393" height="393" viewBox="0 0 393 393" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M392.719 350.383C392.719 361.609 388.261 372.375 380.323 380.313C372.386 388.251 361.621 392.712 350.395 392.713H42.3242C31.0986 392.712 20.3333 388.251 12.3961 380.313C4.45895 372.375 -1.18716e-07 361.609 0 350.383L0 42.3242C0.00489436 31.1006 4.46561 20.3382 12.4019 12.4019C20.3382 4.46561 31.1006 0.00489436 42.3242 0L350.395 0C361.619 0.00326376 372.383 4.46346 380.319 12.4001C388.256 20.3367 392.716 31.1001 392.719 42.3242V350.383Z" fill="#37B34A" />
                        <path d="M331.619 87.0494C325.841 82.1147 318.34 79.6761 310.765 80.2694C303.19 80.8628 296.16 84.4396 291.221 90.2137L167.85 234.498L101.48 179.091C98.8521 176.831 95.8015 175.116 92.5052 174.045C89.2089 172.974 85.7327 172.569 82.2785 172.854C78.8244 173.138 75.4612 174.107 72.3845 175.702C69.3079 177.298 66.5791 179.489 64.3568 182.149C62.1346 184.809 60.4631 187.883 59.4397 191.195C58.4162 194.506 58.0612 197.988 58.3952 201.438C58.7292 204.887 59.7456 208.236 61.3852 211.29C63.0249 214.343 65.2552 217.04 67.9464 219.224L156.867 293.468C159.609 295.754 162.793 297.451 166.219 298.453C169.645 299.455 173.241 299.741 176.783 299.292C180.539 299.002 184.201 297.974 187.559 296.267C190.917 294.56 193.906 292.207 196.354 289.344L334.765 127.434C339.694 121.654 342.128 114.154 341.534 106.58C340.94 99.0064 337.365 91.9779 331.594 87.0371" fill="#F4F4F4" />
                    </svg>
                    <p style={{
                        
                        fontSize:'20px'
                    }}>{paragraph} <br/> <span>{showCodeOrder}{codeOrder}</span></p>
                </Box>

            </MenuNow>
        </div>
    )
};

export default PaymentResultSuccess;