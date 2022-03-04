import React from 'react';
import Menu from 'layouts/main/component/menu/menu.component';
import CardNovel from '../../../components/card/Novel/Card.Novel';
import StyleNovel from '../novel/StyleNovel.module.css';
import Pagination from '@mui/material/Pagination';
import Footer from 'layouts/main/component/footer/Footer.component';
function Entertain() {
    return ( <>
      <div>
      <div>
          <Menu />
      </div>
      <div className={StyleNovel.LineMe} >
          <span className={StyleNovel.title}>سرگرمی</span>
          <CardNovel />
      </div>
      <Pagination dir='ltr' count={10} variant="outlined" color="primary" sx={{
          mt:10,
          ml:30,
          mb:10
      }} />
  </div>
  <Footer/>
        </> );
}

export default Entertain;