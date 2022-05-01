import React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import RTL from "RTL/Rtl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import PanelManage from 'pages/panel-order/PanelManage.component';
import Button from '@mui/material/Button';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

function Edit() {
  let { id } = useParams();
  
  const [post, setPost] = React.useState(null);
  const [Get, setGet] = React.useState(null);
  const [state, setState] = React.useState({
    title: "",
    writer: "",
    price: "",
    number: "",
    group: "",
    category: "",
    image:""
  });

  


  React.useEffect(() => {
        axios.get(`http://localhost:3002/products/${id}`).then(res => {
            console.log('res',res);
            setPost(res.data)
        }
        ).catch(err => {
            console.log(err);

        })
    }, []);
   

    
    
   
  React.useEffect(() => {
      axios.get(` http://localhost:3002/category/${id}`).then(res => {
          console.log('res',res);
          setGet(res.data)
      }
      ).catch(err => {
          console.log(err);

      })
  }, []);
 

  
  if (!Get) return null;
  if (!post) return null;
    
  
  console.log('post',post)
  console.log('Get',Get)
    
    const handleChange = (e) => {
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value
      });
    };
    

    const handleSubmit = () => {
      
      const productData = {
        title: state.title,
        writer: state.writer,
        price : state.price,
        number: state.number,
        category:state.category,
        image:post.image
      
  
      };
      if(productData.title === ""){
        productData.title = post.title
      }
      if(productData.writer === ""){
        productData.writer = post.writer
      }
      if(productData.price === ""){
        productData.price = post.price
      }
      if(productData.number === ""){
        productData.number = post.number
      }
      if(productData.category === ""){
        productData.category = post.category
      }
    

      axios.put(`http://localhost:3002/products/${id}`, productData).then((response) => {
        console.log(response.status);
        console.log(response.data);
        console.log('ok Products')
      });
      axios.put(`http://localhost:3002/category/${id}`, productData).then((response) => {
        console.log(response.status);
        console.log(response.data);
        console.log('ok Products')
      });
      console.log('yes')
  
    };
    
  return (
    <div>
    <PanelManage />
    <Box  sx={{
     
      mt:20,
      mr:15,
      
    }} >
    <img  src={`http://localhost:3002/files/${post.image}`} alt={post.title} style={{
      width:"250px",
      height:"220px"
    }} />
    </Box>
    <Box
      
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        mt:-20,
        mr:50,
        
      }}>
   

      <RTL>
        <div>
          <Box sx={{
            display:'flex'
          }}>
          <input type="file" name="file"  />
          <TextField
            id="NameProduct"
            label="نام کاالا"
            multiline
            maxRows={4}
            name="title"
           defaultValue={post.title}
            
            onChange={handleChange}
           
          />
          
          <TextField
            id="writer"
            label="نویسنده"
            placeholder="Placeholder"
            multiline
            name="writer"
            defaultValue={post.writer}
            
            onChange={handleChange}
          />
          <TextField
            id="price"
            label="قیمت"
            placeholder="Placeholder"
            multiline
            name="price"
            defaultValue={post.price}
            
            onChange={handleChange}
          
          />
          </Box>
          <Box sx={{
            display:'flex'
          }}>
          <TextField
            id="numbers"
            label="تعداد"
            placeholder="Placeholder"
            multiline
            name="number"
            defaultValue={post.number}
            
            onChange={handleChange}
          />
          <Box >
            <FormControl sx={{
              width: 200,
              mt:1
            }}>
              <InputLabel id="demo-simple-select-label">گروه</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="group"
               
                label="گروه"
                defaultValue={post.group}
            
            onChange={handleChange}
              >
                <MenuItem value={"Novel"}>رمان</MenuItem>
                <MenuItem value={"Educational"}>کتاب کنکوری</MenuItem>
                <MenuItem value={"Entertainment"}>سرگرمی</MenuItem>
                <MenuItem value={"AcademicBook"}>کتاب دانشگاهی</MenuItem>

              </Select>
            </FormControl>
          </Box>
          <FormControl sx={{
            width: 400,
          }}>
          <TextField
            id="Explanation"
            label="شرح کالا"
            multiline
            rows={4}
            name="category"
            defaultValue={Get.category}
            
            onChange={handleChange}
          />
          </FormControl>
          </Box>

        </div>
      </RTL>
      <Button onClick={ handleSubmit}
      variant="contained" sx={{
          mr: 100,
          mt: -25
      }} startIcon={<AddCircleOutlineSharpIcon sx={{
          ml: 2,

      }} />}>
      اظافه کردن
  </Button>
    </Box>
    </div>
  )
}

export default Edit;