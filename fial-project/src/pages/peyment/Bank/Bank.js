import React from 'react';
import Form from './img/photo_2022-04-30_04-35-34.jpg';
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
                <h4 className='userName'>{userName}</h4>
                <img src={Form} alt="BankImg" className="BankImg" /> <br/>
               <Link to={"/PaymentResultSuccess/"+User.userName}> <Button variant="contained" color="success" 
                sx={{
                    position:'absolute',
                    left:400,
                    top:350

                }}>پرداخت</Button></Link>
                <Link to={"/PaymentResultFail/"+User.userName}> <Button variant="contained" sx={{
                    position:'absolute',
                    mt:-8,
                    ml:20

                }} onClick={()=>handelDelete(deleteUse)}  color="error">انصراف از خرید</Button></Link>
            </div>

        </div>
    )
}

export default Bank
//