import React from 'react';
import stylehome from './stylehome.module.css';
import Header from 'layouts/main/component/Header/Header.component';
import Menu from 'layouts/main/component/menu/menu.component';
function HomePage() {
  return (
    <div>
    <Header />
    <Menu />
      <div>
        <h1 className={stylehome.homeCards}>HomePage</h1>
      </div>
      
    </div>

  );
}

export default HomePage;