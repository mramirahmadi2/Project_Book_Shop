import React from 'react';
import StayleMenu from './style.module.css';
import  '../../../../index.css';

function Menu() {
    
   



    return (
        <div>
            <ul className={StayleMenu.menu}>
            <li><a className={StayleMenu.active} href="#home">خانه</a></li>
            <li ><a href="#news">پوشاک</a>
            </li>
            <li><a href="#contact">غذا و لبنیات</a></li>
            <li><a href="#about">لوازم آرایشی و بهداشتی</a></li>
            </ul>

        </div>
    );
}

export default Menu;
