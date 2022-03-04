import React from 'react';
import StyleMenu from './style.module.css';
import Header from 'layouts/main/component/Header/Header.component';
import Login from '../../../../assets/icons/login/index';
import Footer from '../footer/Footer.component';

function Menu() {





    return (
        <div>
            <Header />
            <ul className={StyleMenu.menu}>
                <li ><a className={StyleMenu.active} href="/">خانه</a></li>
                <li  ><a className={StyleMenu.Hover} href="/Novel">رمان</a>
                </li>
                <li><a className={StyleMenu.Hover} href="/Academic">آموزشی و کنکوری </a></li>
                <li><a className={StyleMenu.Hover} href="/Entertain"> سرگرمی </a></li>

                <li><a className={StyleMenu.Hover} href="/Education">دانشگاهی</a></li>

                <li><a className={StyleMenu.Hover} href="/">پرفروش ترین کتاب ها</a></li>

                <li className={StyleMenu.PanleModirit}><a href='/login'>  ورود به پنل مدیریت <Login className={StyleMenu.loginLogo} /></a></li>

            </ul>
            
        </div>
    );
}

export default Menu;
