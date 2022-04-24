import React, { useState }  from 'react';
import Menu from 'layouts/main/component/menu/menu.component';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Footer from 'layouts/main/component/footer/Footer.component';
import axios from "axios";
import getProducts from 'components/api/GetAxios';
import Card from '../../../components/card/Card.component';
import Style from '../styleGlobaleProduct.module.css';
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';

const PER_PAGE = 6;
function Academic() {
    const [currentPage, setCurrentPage] = useState(0);
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

    const filterProducts = Get.filter(Get => Get.group === 'AcademicBook');

    function handelPageClick({ selected: selectedPage }) {
        console.log("selected", selectedPage);
        setCurrentPage(selectedPage);
      }
      const offset = currentPage * PER_PAGE;

    const Academic = filterProducts.slice(offset, offset + PER_PAGE).map((Get) => {
        if (Get.group === 'AcademicBook') {


            return (
                <div>
                <Link to={"/ProductDetail/" + Get.id} >
                    <Card key={Get.id}>
                   
                        <img className={Style.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.title} />

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

    let Length = 0;
    Get.map((Get)=>{
        if(Get.group === "AcademicBook"){
             Length += 1
        }
    })
    console.log(Length)
    const pageCount = Math.ceil(Length/ PER_PAGE);

    return (

        <div>
            <div>
                <Menu />
            </div>
            <div className={Style.LineMe} >
                <span className={Style.title}>کتب دانشگاهی</span>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 4,
                    m: 4,
        
        
                    mt: 5,
                    borderRadius: 1,
                }}>
                    {Academic}
                </Box>
            </div>
            <Box
            sx={{
              mt: 20,
              mr: 90,
              mb: 10,
            }}
          >
            <ReactPaginate
            previousLabel={"< قبلی"}
            nextLabel={"بعدی >"}
              pageCount={pageCount}
              onPageChange={handelPageClick}
              breakLabel="..."
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__Link"}
              nextLinkClassName={"pagination__Link"}
              disabledClassName={"pagination__Link--disabled"}
              activeClassName={"pagination__Link--active"}
              pageRangeDisplayed={5}
              renderOnZeroPageCount={null}
             
            />
          </Box>
            <Footer/>
        </div>

    );
}

export default Academic;