
import React from 'react';

import HeaderPanel from './HeaderPanel/HeaderPanel.component';
import { Link } from 'react-router-dom';


import Box from '@mui/material/Box';

import ButtonLink from 'components/button/Button.component';
import Style from './Style.module.css';


function PanelManage() {


  return (
    <div >
      <Box >
        <div>
          <HeaderPanel />
        </div>
      </Box>
      <div>
        <Box sx={{
          display: 'flex',

        }} >
          <Link to="/TableProduct" className={Style.button0}>
            <ButtonLink link="محصولات"  />
          </Link>
          <Link to="/EditPrice" className={Style.button3}>
          <ButtonLink  link="موجودی و قیمت ها"  />
        </Link>
          <Link to="/ProductApproval" className={Style.button1}>
            <ButtonLink link="تایید سفارش" />
          </Link>
          <Link to="/AwaitingApproval" className={Style.button2}>
            <ButtonLink link="در انتظار تایید" />
          </Link>
        </Box>
      </div>

    </div>
  );
}

export default PanelManage;
