
import React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import StyleCard from './StyleCard.module.css';
import NovelImg1 from '../../assets/img/products/Novel/unsplash_Ub8wXvCZqq8.png';
function Card() {
    const baseURL = "http://localhost:3002/category";
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
    return (
        <div >
            <Box sx={{ display: 'flex',
            m: 4,
            p: 4,
        
        }}>
                {
                    post.map((post) => {
                        if (post.id <= 3) {
                            return <li key={post.id} className={StyleCard.basic}>
                               <img src={NovelImg1} alt='novel-img'  className={StyleCard.img}/>
                                 <h3>{post.title}</h3>
                                <p>قیمت: {post.price} تومان </p>
                            </li>
                        }
                    })
                }
            </Box>
        </div>

    );
}

export default Card;