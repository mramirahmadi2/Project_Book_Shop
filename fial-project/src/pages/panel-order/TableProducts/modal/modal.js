
import axios from "axios";
import React, { useState } from "react";
import styles from "./Style.module.css";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import RTL from "RTL/Rtl";

import Category from "components/api/GetCategory";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from 'react-router-dom';


const Modal = ({ setIsOpen }) => {
  const AddProduct = "اضافه کردن کالا";
  const Add = "اضافه کردن";
  const Cancel = "بیخیال";
  let navigate = useNavigate()


 

  const [state, setState] = useState({
    title: "",
    writer: "",
    price: "",
    number: "",
    group: "",
    category: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      title: state.title,
      writer: state.writer,
      price: state.price,
      number: state.number,
      group: state.group,

    };
    const categoryData = {
      title: state.title,
      writer: state.writer,
      price: state.price,
      number: state.number,
      group: state.group,
      category: state.category
    }
    axios.post("http://localhost:3002/products", productData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      console.log('ok Products')
    });
    axios.post(Category, categoryData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      console.log('ok Category')
    });
    
    navigate('/TableProduct');
    window.location.reload();

  };


  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{AddProduct}</h5>
          </div>
          <Link to="/TableProduct">
            {" "}
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
          </Link>
          <div className={styles.modalContent}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
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
                    value={state.title}
                    onChange={handleChange}
                  />
                  <TextField
                    id="writer"
                    label="نویسنده"
                    placeholder="Placeholder"
                    multiline
                    name="writer"
                    value={state.writer}
                    onChange={handleChange}
                  />
                  <TextField
                    id="price"
                    label="قیمت"
                    placeholder="Placeholder"
                    multiline
                    name="price"
                    value={state.price}
                    onChange={handleChange}
                  />
                  <TextField
                    id="numbers"
                    label="تعداد"
                    placeholder="Placeholder"
                    multiline
                    name="number"
                    value={state.number}
                    onChange={handleChange}
                  />
                  <Box>
                    <FormControl
                      sx={{
                        width: 200,
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        گروه
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="group"
                        value={state.group}
                        label="گروه"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Novel"}>رمان</MenuItem>
                        <MenuItem value={"Educational"}>کتاب کنکوری</MenuItem>
                        <MenuItem value={"Entertainment"}>سرگرمی</MenuItem>
                        <MenuItem value={"AcademicBook"}>
                          کتاب دانشگاهی
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <TextField
                    id="Explanation"
                    label="شرح کالا"
                    multiline
                    rows={4}
                    name="category"
                    value={state.category}
                    onChange={handleChange}
                  />
                </div>
              </RTL>
            </Box>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={handleSubmit}>
                {Add}
              </button>
              <Link to="/TableProduct">
                {" "}
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  {Cancel}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;