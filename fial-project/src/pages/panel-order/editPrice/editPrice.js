import React, { useState } from "react";
import axios from "axios";
import PanelManage from "../PanelManage.component";
import "../TableProducts/Table.css";
import Style from "../TableProducts/Style.module.css";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPaginate from "react-paginate";
import Box from "@mui/material/Box";
// import {  useSnackbar } from 'notistack';

const PER_PAGE = 7;
function EditPrice() {
  const [currentPage, setCurrentPage] = useState(0);
  const [post, setPost] = React.useState([]);
  const [Get, setGet] = React.useState([]);
  const [state, setState] = React.useState({
    title: "",
    writer: "",
    price: "",
    number: "",
    category: "",
    image: "",
  });
  // const { enqueueSnackbar } = useSnackbar();

  const baseURL = "http://localhost:3002/products";

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3002/category`)
      .then((res) => {
        console.log(res);
        setGet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!Get) return null;
  if (!post) return null;

  function handelPageClick({ selected: selectedPage }) {
    console.log("selected", selectedPage);
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;

  // function handleClickVarian(variant){
  //   // variant could be success, error, warning, info, or default
  //   enqueueSnackbar('This is a success message!', { variant });
  // };


  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (id) => {
    let title = "";
    let group = "";
    let writer = "";
    let priceFirst = "";
    let numberFirst = "";
    let image = "";
    let  category="";
    post.map((post) => {
      if (post.id == id) {
        title = post.title;
        group = post.group;
        writer = post.writer;
        priceFirst = post.price;
        numberFirst = post.number;
        image = post.image;
        
      }
    });

    Get.map((Get)=>{
      if(Get.id==id){
        category = Get.category 
      }
    })

    const productData = {
      title,
      writer,
      price : state.price,
      number: state.number,
      image,
      group

    };
    const categoryData = {
      title,
      writer,
      price : state.price,
      number: state.number,
      category,
      image,
      group
    }

    if(productData.price === ""){
      productData.price =  priceFirst
    }
    if(productData.number === ""){
      productData.number = numberFirst
    }

    axios.put(`http://localhost:3002/products/${id}`, productData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      console.log('ok Products');
      alert('تغییرات با موفقیت انجام شد');
    });
    axios.put(`http://localhost:3002/category/${id}`, categoryData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      console.log('ok Products');
      
    });
    console.log('yes')

  };

  const tbData = post.slice(offset, offset + PER_PAGE).map((post) => {
    return (
      <tr key={post.id}>
        <td>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {" "}
            <span>
              {" "}
              <img
                className={Style.imageTitle}
                src={`http://localhost:3002/files/${post.image}`}
                alt={post.group}
              />
            </span>{" "}
            <Box
              sx={{
                mt: 2,
                mr: 2,
              }}
            >
              {" "}
              <span> {post.title}</span>
            </Box>
          </Box>{" "}
        </td>
        <td>
          {" "}
          <input
            type="text"
            name="price"
            style={{ width: "30px" }}
            defaultValue={post.price}
            onChange={handleChange}
          />{" "}
          تومان
        </td>
        <td>
          <input
            type="text"
            name="number"
            style={{ width: "30px" }}
            defaultValue={post.number}
            onChange={handleChange}
          />
          
        </td>
        <td>
          <Button
            variant="outlined"
            color="success"
            onClick={()=>handleSubmit(post.id)}
            sx={{
              mr: 5,
            }}
            startIcon={
              <CheckCircleIcon
                sx={{
                  ml: 2,
                }}
              />
            }
          >
            تایید
          </Button>
        </td>
      </tr>
    );
  });

  const pageCount = Math.ceil(post.length / PER_PAGE);

  return (
    <div>
      <PanelManage />
      <Box
        sx={{
          mt: 0,
          mr: 25,
        }}
      >
        <table>
          <tr>
            <th>اطلاعات محصول</th>
            <th> ویرایش قیمت</th>
            <th>ویرایش تعداد کالا</th>
            <th> تایید اطلاعات</th>
          </tr>

          <tbody>{tbData}</tbody>
        </table>
      </Box>

      <Box
        sx={{
          mt: 30,
          mr: 65,
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
    </div>
  );
}

export default EditPrice;
