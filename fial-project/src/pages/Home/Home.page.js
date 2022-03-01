import React from 'react';
import stylehome from './stylehome.module.css';
import Header from 'layouts/main/component/Header/Header.component';
import Menu from 'layouts/main/component/menu/menu.component';
import Get from 'components/get/GetAxios';
function HomePage() {
  return (
    <div>
    <Header />
    <Menu />
      <div>
        <div className={stylehome.homeCards}><Get/>1</div>
      </div>
      
    </div>

  );
}

export default HomePage;