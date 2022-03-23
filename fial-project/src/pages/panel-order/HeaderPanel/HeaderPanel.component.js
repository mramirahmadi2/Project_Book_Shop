import React from 'react';
import Box from '@mui/material/Box';
import Search from '../../../components/serch/serch.component';
import Style from './Style.module.css';
import { Link } from 'react-router-dom';

function HeaderPanel() {

  return (
    <div>

      <header className={Style.Zindex} >
        <Box
          sx={{
            position: 'fixed',
            width: '100%',
            height: 110,
            backgroundColor: '#33eaff',
            zIndex:200,







          }}
        >
          <Box sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            m: 4,

          }}>
            <span className={Style.manage} >مدیریت</span>
            <Box><Search /></Box>
            <span className={Style.manage} ><Link to='/'>بازگشت به سایت</Link></span>
          </Box>

        </Box>

      </header>
    </div>
  );
}

export default HeaderPanel;