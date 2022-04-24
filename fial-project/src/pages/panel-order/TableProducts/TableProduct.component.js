import React, { useState } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PanelManage from '../PanelManage.component';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import ModalEdite from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Style from './Style.module.css';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Table.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const PER_PAGE = 7;
function TableProduct() {

    const [currentPage, setCurrentPage] = useState(0);
     const [open, setOpen] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const baseURL = "http://localhost:3002/products";
    const [post, setPost] = React.useState([]);

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
   
    const handelDelete = async (id) => {

        await axios.delete(`http://localhost:3002/products/${id}`);
        await axios.delete(`http://localhost:3002/category/${id}`);
        window.location.reload();

    }

    function handelPageClick ({selected: selectedPage}){
      console.log("selected",selectedPage)
      setCurrentPage(selectedPage)

    } 
    let Id = 0;

    const handelEdit = (id)=>{
      console.log('id',id)
      Id= id;
      setOpen(true)

    }
    const handleClose = () => setOpen(false);

   
   
    const offset = currentPage * PER_PAGE;
  
    const tbData  = post.slice(offset,offset + PER_PAGE).map((post) => {
        return (
            <tr key={post.id}>
                <td><Box sx={{
                    display: 'flex',

                }}> <span > <img className={Style.imageTitle} src={`http://localhost:3002/files/${post.image}`} alt={post.group} /></span> <Box sx={{
                    mt: 2,
                    mr: 2
                }}> <span> {post.title}</span></Box></Box> </td>
                <td>{post.number}</td>

                <td>
                    <Button variant="outlined" color="error" onClick={() => handelDelete(post.id)} sx={{
                        mr: 5
                    }} startIcon={<DeleteIcon sx={{
                        ml: 2,
                    }} />}>
                        حذف
                    </Button>
                    <Link to={'/TableProduct/Edit/'+post.id }><Button variant="outlined" onClick={() => handelEdit(post.id)} sx={{
                        mr: 10
                    }} color='inherit' startIcon={<ModeEditIcon sx={{
                        ml: 2,

                    }} />}>
                        ویرایش
                    </Button></Link>
                </td>

            </tr>
        )
    })

    const pageCount = Math.ceil(post.length/PER_PAGE)


   
    return (
        <div  >

            <PanelManage />
            <div>
             <Link to='/TableProduct/modalAdd' >  <Button
                    onClick={() => setIsOpen(true)} variant="outlined" sx={{
                        mr: 100,
                        mt: 20
                    }} startIcon={<AddCircleOutlineSharpIcon sx={{
                        ml: 2,

                    }} />}>
                    اظافه کردن
                </Button></Link>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}

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
                        {tbData }
                    </tbody>

                  

                </table>
            
            </Box>
            <ModalEdite
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal{Id}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </ModalEdite>
            <Box sx={{
                mt: 30,
                mr: 65,
                mb:10
            }} >
            <ReactPaginate
            previousLabel={"< قبلی"}
            nextLabel={"بعدی >"}
           pageCount = {pageCount}
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
        </div>
    );
}

export default TableProduct;