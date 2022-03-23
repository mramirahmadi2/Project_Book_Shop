import React from 'react';
import Logo from '../../../../assets/icons/icon-head/index';
import BoxHeader from './Header.module.css';
import Search from '../../../../components/serch/serch.component';
import Basket from 'assets/icons/basket-icon';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

      <div className={BoxHeader.box}>
        <div className={BoxHeader.icon}>
         <Link to='/' className={BoxHeader.LinkHead}><h2 className={BoxHeader.nameCompony}>BOOSH</h2></Link>
         <Link to='/' className={BoxHeader.LinkHead}> <Logo /></Link>
        <div className={BoxHeader.paragraph}>
         <p>بزرگ ترین کتاب فروشی آنلاین ایران</p>
         </div>
        </div>
       
        
        <div className={BoxHeader.search}><Search/></div>
        <ul className={BoxHeader.menu}>
          <li><Link to='/Basket' className={BoxHeader.basket}><Basket/></Link>
          <Link to='/Basket'>سبد خرید</Link>
            
          </li>
        </ul>

      </div>




    </>

  );
}

export default Header;