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
                <Button variant="contained" color="secondary">
                    <Link to="/Novel">
                        <span className={StyleFooter.txt}> رمان</span>
                    </Link>
                </Button>

                <Button sx={{ mr: 3 }} variant="contained" color="secondary">
                    <Link to="/Academic">
                        <span className={StyleFooter.txt}>  آموزشی</span>
                    </Link>
                </Button>
                <Button sx={{ mr: 3 }} variant="contained" color="secondary">
                    <Link to="/Entertain">
                        <span className={StyleFooter.txt}>سرگرمی</span>
                    </Link>
                </Button>
                <Button sx={{ mr: 3 }} variant="contained" color="secondary">
                    <Link to="/Education">
                        <span className={StyleFooter.txt}> دانشگاهی</span>
                    </Link>
                </Button>

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