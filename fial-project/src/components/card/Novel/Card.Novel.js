import React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import StyleCard from '../StyleCard.module.css';
import NovelImg1 from '../../../assets/img/products/Novel/unsplash_Ub8wXvCZqq8.png';
function CardNovel() {

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
                    post.map((post) =>{
                        
                        
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