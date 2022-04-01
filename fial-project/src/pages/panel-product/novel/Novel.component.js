
import React from 'react';
import Menu from 'layouts/main/component/menu/menu.component';
import Box from '@mui/material/Box';

import StyleNovel from './StyleNovel.module.css';
import Pagination from '@mui/material/Pagination';
import Footer from 'layouts/main/component/footer/Footer.component';
import axios from "axios";
import getProducts from 'components/api/GetAxios';
import Card from '../../../components/card/Card.component';
import Style from '../styleGlobaleProduct.module.css';

import MinesButtons from 'components/button/Mines/ButtonMines';
import { Link } from 'react-router-dom';

function Novel() {
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

    const Novel = Get.map((Get) => {
        if (Get.group === 'Novel') {


            return (
                <div>
                    <Card key={Get.id}>
                    <Link to={"/ProductDetail/" + Get.id} >
                        <img className={Style.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.title} />

                        <h3>{Get.title}</h3>

                        <p>نویسنده:{Get.writer}</p>
                        <p>قیمت:{Get.price}تومان</p>
                        <Box sx={{
                            display: 'flex'
                          }}>
                            
                            <MinesButtons />
                          </Box>
                        </Link>
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
            <div className={StyleNovel.LineMe} >
                <span className={StyleNovel.title}>رمان</span>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 4,
                    m: 4,


                    mt: 5,
                    borderRadius: 1,
                }}>
                    {Novel}
                </Box>
            </div>
            <Pagination dir='ltr' count={10} variant="outlined" color="primary" sx={{
                mt:10,
                ml:30,
                mb:10
            }} />
            <Footer/>
        </div>
    );
}

export default Novel;