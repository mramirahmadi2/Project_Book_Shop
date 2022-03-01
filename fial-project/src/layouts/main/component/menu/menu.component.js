import React from 'react';
import StyleMenu from './style.module.css';

import Login from '../../../../assets/icons/login/index';

function Menu() {
    
   



    return (
        <div>
            <ul className={StyleMenu.menu}>
            <li><a className={StyleMenu.active} href="#home">خانه</a></li>
            <li ><a href="#news">رمان</a>
            </li>
            <li><a href="#contact">آموزشی و کنکوری </a></li>
            <li><a href="#about"> سرگرمی </a></li>
            
            <li><a href="#about">دانشگاهی</a></li>
            
            <li><a href="#about">لیست پرفروش ترین کتاب های هفته</a></li>

            </ul>
           
             <div className={StyleMenu.PanleModirit}><a href='/login'>  ورود به پنل مدیریت <Login className={StyleMenu.loginLogo}/></a></div>
        </div>
    );
}

export default Menu;
