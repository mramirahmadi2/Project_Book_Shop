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

import { incrementAction, decrementAction, Zero } from '../../../redux/CounterSlice';


function ProductDetail() {
    const dispatch = useDispatch();
    let value = useSelector(state => state.counter.value);







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
    let title = '';
    let group = '';
    let writer = '';
    let price = '';
    let number = '';
    let image = '';
    let counter = 0;
    
    Get.map((Get) => {
        if (Get.id == idProduct.id) {

            title = Get.title
            group = Get.group
            writer = Get.writer
            price = Get.price
            number = Get.number
            image = Get.image
        


        }
    });





    let orderId = 0

    const handleClick = () => {


        if (value > number) {
            alert(`تعداد سفارشات شما بیشتر از موجدی این کتاب در انبار است`)
        }else if(number== 0){
            alert(`این کالا به اتمام رسیده است`)
        }else if(value == 0){
           
               
           
            alert(`مقداری مشخص نشده است`)


         
        } else {
            
                orderId = orderId + 1
                const order = {
                    title,
                    group,
                    writer,
                    price,
                    number,
                    image,
                    counter : value

                };

                axios.post(`http://localhost:3002/basket`, order).then((response) => {
                    console.log(response.status);
                    console.log(response.data.token);
                }).catch(err => {
                    console.log(err);

                });
                console.log('ok');
            
            alert(`تعداد ${value} کتاب ${title} در سبد خرید شما قرار گرفت`)


            dispatch(Zero())
        }

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
                                        <h1 > {Get.title}</h1>
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
                                                    <span >نویسده:{Get.writer}</span>
                                                    <span >{Get.price}تومان</span>
                                                   

                                                  
                                                    
                                                    
                                                </Box>
                                            </Box>
                                        </Box>
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
                                        <Box sx={{
                                            display: 'flex',
                                            width: 15,
                                            height: 40
                                        }}>
                                       
                                            <ButtonPlus onClick={() => dispatch(incrementAction())} />
                                            <InputNumbers values={value} />
                                            <MinesButtons onClick={() => dispatch(decrementAction())} />
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