import React from 'react';
import Logo from '../../../../assets/icons/icon-head/index';
import BoxHeader from './Header.module.css';
import Search from '../../../../components/serch/serch.component';
import Basket from 'assets/icons/basket-icon';


function Header() {
  return (
    <>

      <div className={BoxHeader.box}>
        <div className={BoxHeader.icon}>
         <a href='/'><h2 className={BoxHeader.nameCompony}>BOOSH</h2></a>
         <a href='/'> <Logo /></a>
        <div className={BoxHeader.paragraph}>
         <p>بزرگ ترین کتاب فروشی آنلاین ایران</p>
         </div>
        </div>
       
        
        <div className={BoxHeader.search}><Search/></div>
        <ul className={BoxHeader.menu}>
          <li><a href='/order' className={BoxHeader.basket}><Basket/></a>
          <a href='/order'>سبد خرید</a>
            
          </li>
        </ul>

      </div>




    </>

  );
}

export default Header;