import React from 'react';
import stylehome from './stylehome.module.css';

import Menu from 'layouts/main/component/menu/menu.component';
import Box from '@mui/material/Box';
import Card from '../../components/card/Card.component';
import ImgHome from '../../assets/img/home page/unsplash_YLSwjSy7stw.jpg';
import Footer from 'layouts/main/component/footer/Footer.component';
import axios from "axios";
import getProducts from 'components/api/GetAxios';


function HomePage() {

  const [Get, setGet] = React.useState(null);
    
  
  
    React.useEffect(() => {
        axios.get(getProducts).then(res => {
            console.log(res);
            setGet(res.data)
        }
        ).catch(err => {
            console.log(err);
  
        })
    }, []);
  
  
    if (!Get) return null;

// Novel filter
  let counterNovel = 0;
  const Novel = Get.map((Get) => {
    if (Get.group === 'Novel' && counterNovel <= 2) {

     counterNovel++;
      return (
        <div>
          <Card key={Get.id}>
            <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

            <h3>{Get.title}</h3>

            <p>نویسنده:{Get.writer}</p>
            <p>قیمت:{Get.price}تومان</p>

          </Card>
        </div>
      )
    }
  });
// Educational filter
  let counterEducational = 0;
  const Educational = Get.map((Get) => {
    if (Get.group === 'Educational' && counterEducational<= 2) {

      counterEducational++;
      return (
        <div>
          <Card key={Get.id}>
            <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

            <h3>{Get.title}</h3>

            <p>نویسنده:{Get.writer}</p>
            <p>قیمت:{Get.price}تومان</p>

          </Card>
        </div>
      )
    }
  })
//Entertainment filter
let counterEntertainment = 0;
  const Entertainment = Get.map((Get) => {
    if (Get.group === 'Entertainment' && counterEntertainment<= 2) {

      counterEntertainment++;
      return (
        <div>
          <Card key={Get.id}>
            <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

            <h3>{Get.title}</h3>

            <p>نویسنده:{Get.writer}</p>
            <p>قیمت:{Get.price}تومان</p>

          </Card>
        </div>
      )
    }
  })
//AcademicBook filter
let counterAcademicBook = 0;
  const AcademicBook= Get.map((Get) => {
    if (Get.group === 'AcademicBook' && counterAcademicBook<= 2) {

      counterAcademicBook++;
      return (
        <div>
          <Card key={Get.id}>
            <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

            <h3>{Get.title}</h3>

            <p>نویسنده:{Get.writer}</p>
            <p>قیمت:{Get.price}تومان</p>

          </Card>
        </div>
      )
    }
  })

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <img src={ImgHome} alt="Home-page" />

        
        <div className={stylehome.novels}>
          <Box sx={{ mr: 10, fontSize: 25 }}><span >رمان</span></Box>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 2,
            m: 2,


            mt: 5,
            borderRadius: 1,
          }}>
            {Novel}
          </Box>


        </div>
        <div className={stylehome.novels}>
          <Box sx={{ mr: 10, fontSize: 25 }}><span >کنکوری</span></Box>
          <div >
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              p: 2,
              m: 2,


              mt: 5,
              borderRadius: 1,
            }}>
              {Educational}
            </Box>

          </div>
        </div>
        <div className={stylehome.novels}>
          <Box sx={{ mr: 10, fontSize: 25 }}><span >سرگرمی</span></Box>
          <div >
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 2,
            m: 2,


            mt: 5,
            borderRadius: 1,
          }}>
            {Entertainment}
          </Box>
          
          </div>
        </div>
        <div className={stylehome.novels}>
          <Box sx={{ mr: 10, fontSize: 25 }}><span >کتب دانشگاهی</span></Box>
          <div >
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 2,
            m: 2,


            mt: 5,
            borderRadius: 1,
          }}>
            {AcademicBook}
          </Box>
          
          </div>
        </div>
       
      </div>
      <Footer />
    </div>

  );
}


export default HomePage;


