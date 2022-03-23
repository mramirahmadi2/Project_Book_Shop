import React from 'react';
import StyleMenu from './style.module.css';
import Header from 'layouts/main/component/Header/Header.component';
import Login from '../../../../assets/icons/login/index';
import { Link } from 'react-router-dom';

function Menu() {





    return (
        <div>
            <Header />
            <ul className={StyleMenu.menu}>
                <li className={StyleMenu.active}> <Link className={StyleMenu.Hover} to="/">خانه</Link></li>
                <li ><Link className={StyleMenu.Hover} to="/Novel">رمان</Link>
                </li>
                <li><Link className={StyleMenu.Hover} to="/Academic">آموزشی و کنکوری </Link></li>
                <li><Link className={StyleMenu.Hover} to="/Entertain"> سرگرمی </Link></li>

                <li><Link className={StyleMenu.Hover} to="/Education">دانشگاهی</Link></li>

                <li><Link className={StyleMenu.Hover} to="/">پرفروش ترین کتاب ها</Link></li>

                <li className={StyleMenu.PanleModirit}><Link className={StyleMenu.loginLogo}  to='/login'>  ورود به پنل مدیریت <div className={StyleMenu.Logo}> <Login  /></div> </Link></li>

            </ul>
            
        </div>
    );
}

export default Menu;
