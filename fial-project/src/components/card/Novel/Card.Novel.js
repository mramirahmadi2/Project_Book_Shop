import React, { useState } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import StyleCard from '../StyleCard.module.css';
import ReactPaginate from "react-paginate";

const PER_PAGE = 7;
function CardNovel() {

    const [currentPage, setCurrentPage] = useState(0);
    const baseURL = "http://localhost:3002/products";
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then(res => {
            console.log(res);
            setPost(res.data)
        }
        ).catch(err => {
            console.log(err);

        })
    }, []);

    if (!post) return null;
    let i = 0;
    const offset = currentPage * PER_PAGE;

    const pageCount = Math.ceil(post.length / PER_PAGE);


    return (
        <div >
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                p: 4,
                m: 4,
                
                 
                mt:10,
                borderRadius: 1,

            }}>
                {
                    post.slice(offset, offset + PER_PAGE).map((post) =>{
                        
                        
                            if (post.group === "Novel" ) {

                                i ++;

                                return <li key={post.id} className={StyleCard.basic}>
                                    <img className={StyleCard.img} src={`http://localhost:3002/files/${post.image}`} alt={post.group} />

                                    <h3>{post.title}</h3>
                                    
                                    <p>نویسنده:{post.writer}</p>
                                    <p>قیمت:{post.price}تومان</p>
                                   
                                </li>

                            }
                        
                          
                            console.log(i);
                        
                    }




                     
                   )
                }
            </Box>
        </div>


    );


}

export default CardNovel;