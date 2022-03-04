import React from 'react';
import stylehome from './stylehome.module.css';

import Menu from 'layouts/main/component/menu/menu.component';
import Box from  '@mui/material/Box';
import Card from '../../components/card/Card.component';
import ImgHome from '../../assets/img/home page/unsplash_YLSwjSy7stw.jpg';
import Footer from 'layouts/main/component/footer/Footer.component';
function HomePage() {

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
         <img src={ImgHome} alt="Home-page" />
        <div>
          <span className={stylehome.new}>جدیدترین کتاب ها</span>
          <div className={stylehome.homeCards}><Card /></div>
        </div>
        <div className={stylehome.novels}>
        <Box sx={{mr:10 , fontSize:25}}><span >رمان</span></Box> 
          <div ><Card /></div>
        </div>
        <div className={stylehome.novels}>
        <Box sx={{mr:10 , fontSize:25}}><span >کنکوری</span></Box> 
          <div ><Card /></div>
        </div>
        <div className={stylehome.novels}>
        <Box sx={{mr:10 , fontSize:25}}><span >سرگرمی</span></Box> 
          <div ><Card /></div>
        </div>
        <div className={stylehome.novels}>
        <Box sx={{mr:10 , fontSize:25}}><span >کتب دانشگاهی</span></Box> 
          <div ><Card /></div>
        </div>
        <div className={stylehome.novels}>
        <Box sx={{mr:10 , fontSize:25}}><span >پرفروش ترین ها</span></Box> 
          <div ><Card /></div>
        </div>
      </div>
            <Footer/>
    </div>

  );
}

export default HomePage;


