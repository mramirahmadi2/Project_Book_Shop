import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Category from 'components/api/GetCategory';
import Menu from 'layouts/main/component/menu/menu.component';
import Box from '@mui/material/Box';
import Footer from 'layouts/main/component/footer/Footer.component';
import Style from './Style.module.css';

import MinesButtons from 'components/button/Mines/ButtonMines';
import ButtonPlus from 'components/button/Plus/ButtonPlus';
import InputNumbers from 'components/button/inputNumber/InputNumber';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { increment, decrement } from '../../../redux/Main.reducer';
import PostOrder from 'components/api/PostOreder';

function ProductDetail() {
    const dispatch = useDispatch();
    let value = useSelector(state => state.counter.value);
    const [state, setState] = useState({
        name: "",
        img: "",
        writer: "",
        price: "",
        category: ""
    });




    const [Get, setGet] = React.useState(null);
    let { id } = useParams();
    React.useEffect(() => {
        axios.get(Category).then(res => {
            console.log(res);
            setGet(res.data)
        }
        ).catch(err => {
            console.log(err);

        })
    }, []);


    if (!Get) return null;

    let idProduct = { id }
    const order = "order";
    const Orders = Get.map( (Get)=>
    {   if(Get.id == idProduct.id){
           return(
               {
               "name": Get.title,
               "img": Get.image,
               "id":Get.id,
               "writer":Get.writer,
               "price": Get.price,
               "Order":order 
              
           }
           )
       }}
   );


    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setState({
    //         ...state,
    //         [e.target.name]: value
    //     });
    // };
    const handleClick = (e) => {

        e.preventDefault();
        const orderData = Orders;
        // const orderData =` http://localhost:3000/ProductDetail/${idProduct.id}`
        // const userData = {
        //     name: "",
        //     img: "",
        //     writer: "",
        //     price: "",
        //     category: "",
        //     email: data.email,
        //     password: data.password
        // };
        axios.post(PostOrder, orderData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
        }).catch(err => {
            console.log(err);

        });
        console.log('ok');
    };


    return (
        <div>
            <Menu />
            <div>
                <Box sx={{

                    pt: 15,
                    pr: 40,
                }}>
                    {
                        Get.map((Get) => {
                            if (Get.id == idProduct.id) {

                                return (
                                    <Box>
                                        <h1 >کتاب {Get.title}</h1>
                                        <Box sx={{
                                            display: 'flex',
                                        }}>
                                            <img className={Style.image} src={`http://localhost:3002/files/${Get.image}`} alt={Get.title} />
                                            <Box>

                                                <p className={Style.category}>{(Get.category !== undefined) ? ` ${Get.category}` : `اطلاعاتی برای نمایش وجود ندارد`}</p>
                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: 25,
                                                    mt: 3,
                                                    ml: 4,
                                                }}>
                                                    <span>نویسنده: {Get.writer}</span>
                                                    <span>قیمت: {Get.price}تومان</span>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            width: 15,
                                            height: 40
                                        }}>
                                            <ButtonPlus onClick={() => dispatch(increment())} />
                                            <InputNumbers values={value} />
                                            <MinesButtons onClick={() => dispatch(decrement())} />
                                        </Box>
                                        <Button variant="contained" color="primary" onClick={handleClick}>
                                            اضافه کردن به سبد خرید
                                        </Button>
                                    </Box>
                                )
                            }
                        })
                    }
                </Box>
            </div>
            <Footer />

        </div>

    )
}
export default ProductDetail;