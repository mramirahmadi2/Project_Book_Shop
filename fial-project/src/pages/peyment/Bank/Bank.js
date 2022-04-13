import React from 'react';
import Form from './img/platinco_banksaman.png';
import './style.css';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';
function Bank() {

    let { userName } = useParams();

    const [Get, setGet] = React.useState(null);

    let daletName = { userName }
  let deleteUse =daletName.userName
    React.useEffect(() => {
        axios.get(`http://localhost:3002/category`).then(res => {
            console.log(res);
            setGet(res.data)
        }
        ).catch(err => {
            console.log(err);

        })
    }, []);


    if (!Get) return null;
    let User = { userName };
    const handelDelete = async (deleteUser) => {
        await axios.delete(`http://localhost:3002/orders/${deleteUser}`);
        window.location.reload();
    
      }

    return (
        <div className='Bank' >
            <div className='FormData'>
                <h4>{userName}</h4>
                <img src={Form} alt="BankImg" /> <br/>
               <Link to={"/PaymentResultSuccess/"+User.userName}> <Button variant="contained" color="success" sx={{
                    ml:5,
                }}>پرداخت</Button></Link>
                <Link to={"/PaymentResultFail/"+User.userName}> <Button variant="contained" onClick={()=>handelDelete(deleteUse)}  color="error">انصراف از خرید</Button></Link>
            </div>
            <Link to={"/PaymentResultFail/"+User.userName}> <Button variant="contained" color="error">بازگشت</Button></Link>
        </div>
    )
}

export default Bank
//