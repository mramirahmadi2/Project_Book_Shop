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

function Edit() {
  let { id } = useParams();
  
  const [post, setPost] = React.useState(null);
  const dataProduct= {
    title:"",

  }


  React.useEffect(() => {
        axios.put(`http://localhost:3002/products/${id}`,dataProduct).then(res => {
            console.log(res);
            setPost(res.data)
        }
        ).catch(err => {
            console.log(err);

        })
    }, []);


    if (!post) return null;

  return (
    <div><Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <RTL>
        <div>
          <TextField
            id="NameProduct"
            label="نام کاالا"
            multiline
            maxRows={4}
            name="title"
            
          />
          <TextField
            id="writer"
            label="نویسنده"
            placeholder="Placeholder"
            multiline
            name="writer"
           
          />
          <TextField
            id="price"
            label="قیمت"
            placeholder="Placeholder"
            multiline
            name="price"
          
          />
          <TextField
            id="numbers"
            label="تعداد"
            placeholder="Placeholder"
            multiline
            name="number"
           
          />
          <Box >
            <FormControl sx={{
              width: 200,
            }}>
              <InputLabel id="demo-simple-select-label">گروه</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="group"
               
                label="گروه"
               
              >
                <MenuItem value={"Novel"}>رمان</MenuItem>
                <MenuItem value={"Educational"}>کتاب کنکوری</MenuItem>
                <MenuItem value={"Entertainment"}>سرگرمی</MenuItem>
                <MenuItem value={"AcademicBook"}>کتاب دانشگاهی</MenuItem>

              </Select>
            </FormControl>
          </Box>
          <TextField
            id="Explanation"
            label="شرح کالا"
            multiline
            rows={4}
            name="category"
           
          />
        </div>
      </RTL>
    </Box>
    </div>
  )
}

export default Edit;