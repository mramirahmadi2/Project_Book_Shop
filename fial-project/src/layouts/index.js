import Menu from './main/component/menu/menu.component';
import Footer from './main/component/footer/Footer.component';
import React from 'react'

function MenuNow(props) {
 
  return (
    <div>
     <Menu/>
       {props.children}
     <Footer/>
    </div>
  )
}

export default MenuNow;