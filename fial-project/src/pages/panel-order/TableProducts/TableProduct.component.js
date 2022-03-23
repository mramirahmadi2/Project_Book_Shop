import React from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PanelManage from '../PanelManage.component';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import './Table.css';
import Box from '@mui/material/Box';
import Style from './Style.module.css';


function TableProduct() {

   
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



    let tbData = post.map((post) => {
        return (
            <tr key={post.id}>
                <td><Box sx={{
                    display: 'flex',

                }}> <span > <img className={Style.imageTitle} src={`http://localhost:3002/files/${post.image}`} alt={post.group} /></span> <Box sx={{
                           mt:2,
                           mr:2
                }}> <span> {post.title}</span></Box></Box> </td>
                <td>{post.number}</td>

                <td>
                    <Button variant="outlined" sx={{
                        mr: 5
                    }} startIcon={<DeleteIcon sx={{
                        ml: 2,
                    }} />}>
                        حذف
                    </Button>
                    <Button variant="outlined" sx={{
                        mr: 10
                    }} startIcon={<ModeEditIcon sx={{
                        ml: 2,

                    }} />}>
                        ویرایش
                    </Button>
                </td>

            </tr>
        )
    })
    return (
        <div>
            <PanelManage />
            <div>
                <Button variant="outlined" sx={{
                    mr: 100,
                    mt: 20
                }} startIcon={<AddCircleOutlineSharpIcon sx={{
                    ml: 2,

                }} />}>
                    اظافه کردن
                </Button>
            </div>
            <Box sx={{
                mt: -20,
                mr: 25,
            }}>
                <table  >
                    <tr>
                        <th >اطلاعات محصول</th>
                        <th>تعداد کالا</th>
                        <th>ویرایش</th>
                    </tr>

                    <tbody>
                        {tbData}
                    </tbody>



                </table>
            </Box>
        </div>
    );
}

export default TableProduct;