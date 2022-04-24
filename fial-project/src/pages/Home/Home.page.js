import React from 'react';
import stylehome from './stylehome.module.css';

import Menu from 'layouts/main/component/menu/menu.component';
import Box from '@mui/material/Box';
import Card from '../../components/card/Card.component';
import ImgHome from '../../assets/img/home page/unsplash_YLSwjSy7stw.jpg';
import Footer from 'layouts/main/component/footer/Footer.component';
import axios from "axios";
import getProducts from 'components/api/GetAxios';

import MinesButtons from 'components/button/Mines/ButtonMines';

import { Link } from 'react-router-dom';
import ButtonPlus from 'components/button/Plus/ButtonPlus';
import InputNumbers from 'components/button/inputNumber/InputNumber';
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../../redux/CounterSlice';



function HomePage() {

  const dispatch = useDispatch();

  let value = useSelector(state => state.counter.count);
  const [Get, setGet] = React.useState(null);

  console.log('ok');




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
      console.log('ok');
      counterNovel++;
      return (
        <div>
        <Link to={"/ProductDetail/" + Get.id} >
          <Card key={Get.id}>
           

              <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.title} />

              <h3>{Get.title}</h3>

              <p>نویسنده:{Get.writer}</p>
              <p>قیمت:{Get.price}تومان</p>
              { Get.number == 0 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>این کتاب به اتمام رسیده است</p>
            
            }
            { Get.number == 1 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 1 عدد از این کتاب موجود است</p>
            
            }
            { Get.number == 2 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 2 عدد از این کتاب موجود است</p>
            
            }
          </Card>
          </Link>
        </div>
      )
    }
  });
  // Educational filter
  let counterEducational = 0;
  const Educational = Get.map((Get) => {
    if (Get.group === 'Educational' && counterEducational <= 2) {

      counterEducational++;
      return (
        <div>
          <Link to={"/ProductDetail/" + Get.id} >
            <Card key={Get.id}>

              <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

              <h3>{Get.title}</h3>

              <p>نویسنده:{Get.writer}</p>
              <p>قیمت:{Get.price}تومان</p>
              { Get.number == 0 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>این کتاب به اتمام رسیده است</p>
            
            }
            { Get.number == 1 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 1 عدد از این کتاب موجود است</p>
            
            }
            { Get.number == 2 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 2 عدد از این کتاب موجود است</p>
            
            }

            </Card>
          </Link>
        </div>
      )
    }
  })
  //Entertainment filter
  let counterEntertainment = 0;
  const Entertainment = Get.map((Get) => {
    if (Get.group === 'Entertainment' && counterEntertainment <= 2) {

      counterEntertainment++;
      return (
        <div>
          <Link to={"/ProductDetail/" + Get.id} >
            <Card key={Get.id}>

              <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

              <h3>{Get.title}</h3>

              <p>نویسنده:{Get.writer}</p>
              <p>قیمت:{Get.price}تومان</p>
              { Get.number == 0 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>این کتاب به اتمام رسیده است</p>
            
            }
            { Get.number == 1 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 1 عدد از این کتاب موجود است</p>
            
            }
            { Get.number == 2 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 2 عدد از این کتاب موجود است</p>
            
            }

            

            </Card>
          </Link>
        </div>
      )
    }
  })
  // AcademicBook filter
  let counterAcademicBook = 0;
  const AcademicBook = Get.map((Get) => {
    if (Get.group === 'AcademicBook' && counterAcademicBook <= 2) {

      counterAcademicBook++;
      return (
        <div>
          <Link to={"/ProductDetail/" + Get.id} >
            <Card key={Get.id}>

              <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

              <h3>{Get.title}</h3>

              <p>نویسنده:{Get.writer}</p>
              <p>قیمت:{Get.price}تومان</p>

              <Box sx={{
                display: 'flex'
              }}>
              { Get.number == 0 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>این کتاب به اتمام رسیده است</p>
            
            }
            { Get.number == 1 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 1 عدد از این کتاب موجود است</p>
            
            }
            { Get.number == 2 && 
                <p style={{
                    color:'red',
                    fontSize:'10px'
                  }}>تنها 2 عدد از این کتاب موجود است</p>
            
            }
              </Box>

            </Card>
          </Link>
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
          <Box sx={{ mr: 10, fontSize: 25 }}> <Link to="/Novel"> <span >رمان</span></Link></Box>

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
          <Box sx={{ mr: 10, fontSize: 25 }}> <Link to="/Education"> <span >آموزشی و کنکوری</span></Link></Box>
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
          <Box sx={{ mr: 10, fontSize: 25 }}><Link to="/Entertain"><span >سرگرمی</span></Link></Box>
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
          <Box sx={{ mr: 10, fontSize: 25 }}><Link to="/Academic"><span >کتب دانشگاهی</span></Link></Box>
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


// <Link to="/Novel">
// <Button variant="contained" color="secondary">

//     <span className={StyleFooter.txt}> رمان</span>

// </Button>
// </Link>
// <Link to="/Education">
// <Button sx={{ mr: 3 }} variant="contained" color="secondary">

//     <span className={StyleFooter.txt}>  آموزشی</span>

// </Button></Link>
// <Link to="/Entertain">
// <Button sx={{ mr: 3 }} variant="contained" color="secondary">

//     <span className={StyleFooter.txt}>سرگرمی</span>

// </Button>    </Link>
// <Link to="/Academic">

// <Button sx={{ mr: 3 }} variant="contained" color="secondary">
//     <span className={StyleFooter.txt}> دانشگاهی</span>

// </Button>
// </Link>