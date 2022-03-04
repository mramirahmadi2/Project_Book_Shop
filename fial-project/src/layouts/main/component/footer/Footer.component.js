import React from 'react';
import StyleFooter from './StyleFooter.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import  Instagram  from '../../../../assets/icons/icon-footer/instagram.svg';
import  Email  from '../../../../assets/icons/icon-footer/email.svg';
import  Telegram  from '../../../../assets/icons/icon-footer/telegram.svg';
import  Whatsapp  from '../../../../assets/icons/icon-footer/whatsapp.svg';

function Footer() {
    return (
        <div className={StyleFooter.footer}>
            <div className={StyleFooter.txtfooter}>
                <h4>بووش</h4>
                <p>با بوش می توانید کتابهای مختلف را جست و جو کنید و در سریع ترین زمان آن کتاب را تهیه کنید.
                    <br /> بووش سریع ترین راه برای رسیدن به کتاب است.</p>
            </div>
            <Box sx={{mt:15, mr:50 }}  >
                <Button variant="contained" href="/Novel" color="secondary">
                <span className={StyleFooter.txt}> رمان</span> 
                </Button>
                
                <Button sx={{mr:3}} variant="contained" href="/Education" color="secondary">
                <span className={StyleFooter.txt}>  آموزشی</span> 
                </Button>
                <Button sx={{mr:3}} variant="contained" href="/Entertainment" color="secondary">
                <span className={StyleFooter.txt}>سرگرمی</span> 
                </Button>
                <Button sx={{mr:3}} variant="contained" href="/Academic" color="secondary">
                <span className={StyleFooter.txt}> دانشگاهی</span> 
                </Button>
                
            </Box>
            <div className={StyleFooter.Us}>
              <span>با ما در ارتباط باشید</span>
              <img src={Instagram} alt='Instagram' className={StyleFooter.Communicate}/>
              <img src={Email} alt='Email' className={StyleFooter.Communicate}/>
              <img src={Telegram} alt='Telegram' className={StyleFooter.Communicate}/>
              <img src={Whatsapp} alt='Whatsapp' className={StyleFooter.Communicate}/>
              
              

            </div>
        </div>
    );
}

export default Footer;