import React from 'react';
import StyleFooter from './StyleFooter.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Instagram from '../../../../assets/icons/icon-footer/instagram.svg';
import Email from '../../../../assets/icons/icon-footer/email.svg';
import Telegram from '../../../../assets/icons/icon-footer/telegram.svg';
import Whatsapp from '../../../../assets/icons/icon-footer/whatsapp.svg';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className={StyleFooter.footer}>
            <div className={StyleFooter.txtfooter}>
                <h4>بووش</h4>
                <p>با بوش می توانید کتابهای مختلف را جست و جو کنید و در سریع ترین زمان آن کتاب را تهیه کنید.
                    <br /> بووش سریع ترین راه برای رسیدن به کتاب است.</p>
            </div>
            <Box sx={{ mt: 15, mr: 50 }}  >
                <Link to="/Novel">
                    <Button variant="contained" color="secondary">

                        <span className={StyleFooter.txt}> رمان</span>

                    </Button>
                </Link>
                <Link to="/Education">
                    <Button sx={{ mr: 3 }} variant="contained" color="secondary">

                        <span className={StyleFooter.txt}>  آموزشی</span>

                    </Button></Link>
                <Link to="/Entertain">
                    <Button sx={{ mr: 3 }} variant="contained" color="secondary">

                        <span className={StyleFooter.txt}>سرگرمی</span>

                    </Button>    </Link>
                <Link to="/Academic">

                    <Button sx={{ mr: 3 }} variant="contained" color="secondary">
                        <span className={StyleFooter.txt}> دانشگاهی</span>

                    </Button>
                </Link>

            </Box>
            <div className={StyleFooter.Us}>
                <span>با ما در ارتباط باشید</span>
                <img src={Instagram} alt='Instagram' className={StyleFooter.Communicate} />
                <img src={Email} alt='Email' className={StyleFooter.Communicate} />
                <img src={Telegram} alt='Telegram' className={StyleFooter.Communicate} />
                <img src={Whatsapp} alt='Whatsapp' className={StyleFooter.Communicate} />



            </div>
        </div>
    );
}

export default Footer;