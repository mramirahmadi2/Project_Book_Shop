import React from 'react';
import './styleLogin.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



function Login() {
  return (
    <div className='login-page'>
     
        <div >
          <form className='count-form'>
            <h2 className='title' >ورود به پنل مدیریت کتاب فروشی بووش</h2>
            <FormControl sx={{ mt: 1 }}>
              <InputLabel sx={{ mt: 1 }} htmlFor="my-input">نام کاربری</InputLabel>
              <Input sx={{ mt: 8 }} id="my-input" aria-describedby="my-helper-text" />



            </FormControl>
            <br />
            <FormControl sx={{ mt: 1 }}>

              <InputLabel sx={{ mt: 1 }} htmlFor="my-input">رمز عبور</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" type='password' />


            </FormControl>
            <br />
            <Button size='large' sx={{ mt: 5, width: 150 }} variant="contained">ورود</Button>
            <div>
              <Link className='back-home' to="/">بازگشت به سایت</Link>
            </div>



          </form>
        </div>
    
    </div>


  );
}

export default Login;