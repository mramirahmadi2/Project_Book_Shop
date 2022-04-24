import React, { useState } from "react";
import MenuNow from "layouts";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RTL from "RTL/Rtl";

import { Link, useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import axios from "axios";
import Category from "../../components/api/GetCategory";
import { useFormik } from "formik";

import * as Yup from "yup";

export default function Checkout() {
  let { sum } = useParams();
  let dateNow = new Date();
  let navigation = useNavigate();

  const [value, setValue] = useState();
  let userName = ``;

  const formik = useFormik({
    initialValues: {
      firstName: "",

      familyName: "",

      addres: "",

      number: "",

      date: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()

        .min(3, "نام باید بیشتر از 3 کارکتر باشد")

        .required("لطفا نام خود را وارد کنید"),

      familyName: Yup.string()

        .min(3, "فامیلی باید بیشتر از 3 کارکتر باشد")

        .required("لطفا فامیلی خود را وارد کنید"),
      addres: Yup.string()

        .min(10, "آدرس خود را کامل وارد کنید")

        .required("لطفا آدرس را وارد کنید"),
      number: Yup.string()
        .max(12, `تعداد ارقام وارد شده برای تلفن صحیح نمی باشد`)
        .min(11, "شماره تلفن صحیح نمی باشد")

        .required("تلفن خود را وارد نمایید"),
    }),

    onSubmit: (values) => {
      const userData = {
        firstName: values.firstName,
        familyName: values.familyName,
        addres: values.addres,
        number: values.number,
        sum,
        date: values.value,
        dateNow,
        userName: `${values.firstName} ${values.familyName}`,
      };
      userName = `${values.firstName} ${values.familyName}`;
      axios
        .post(`http://localhost:3002/orders`, userData)
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
          console.log(`ok`);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("ok");

      navigation("/Checkout/Bank/" + userName);
    },
  });

  console.log("setValue", setValue);

  // const handelDate = (e)=>{
  //   const value = e.target.value;
  //   setDateForm({
  //     ...dateForm,
  //     [e.target.name]:value
  //   })
  // }

  return (
    <div>
      <MenuNow>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              "& .MuiTextField-root": { width: "30ch", mr: 5, mt: 3, ml: 3 },
              pt: 20,

              mr: 40,
            }}
          >
            <Box>
              <span> جمع کل مبلغ خرید {sum}</span>
            </Box>
            <RTL>
              <div>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div
                        style={{
                          fontSize: "15px",
                          color: "red",
                        }}
                      >
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                    <TextField
                      id="firstName"
                      label="نام"
                      multiline
                      maxRows={4}
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </Box>
                  <Box>
                    {formik.touched.familyName && formik.errors.familyName ? (
                      <div
                        style={{
                          fontSize: "15px",
                          color: "red",
                        }}
                      >
                        {formik.errors.familyName}
                      </div>
                    ) : null}
                    <TextField
                      id="familyName"
                      name="familyName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.familyName}
                      label="نام خانوادگی"
                      placeholder="نام خانوادگی"
                      multiline
                    />
                  </Box>
                  <Box>
                    {formik.touched.addres && formik.errors.addres ? (
                      <div
                        style={{
                          fontSize: "15px",
                          color: "red",
                        }}
                      >
                        {formik.errors.addres}
                      </div>
                    ) : null}
                    <TextField
                      id="addres"
                      name="addres"
                      label="آدرس"
                      multiline
                      rows={4}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.addres}
                    />
                  </Box>
                </Box>
              </div>

              <Box>
                <div>
                  {formik.touched.number && formik.errors.number ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.number}
                    </div>
                  ) : null}
                  <TextField
                    id="phoneNumber"
                    label="تلفن همراه"
                    multiline
                    maxRows={4}
                    type="tel"
                    name="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                  />

                  <label
                    id="Calender"
                    style={{
                      position: "relative",
                      top: "-30px",
                      right: "20px",
                    }}
                  >
                    <span>تاریخ تحویل</span>
                  </label>
                  <div
                    style={{
                      direction: "trl",

                      marginRight: "370px",
                      marginTop: "-65px",
                    }}
                  >
                    <DatePicker
                      id="Calender"
                      calendar={persian}
                      name="date"
                      onChange={setValue}
                      onBlur={formik.handleBlur}
                      value={formik.values.date}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      style={{
                        width: "250px",
                        height: "50px",
                        backgroundColor: "none",
                      }}
                    />
                  </div>
                </div>
              </Box>
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  type="submit"
                  color="success"
                  sx={{
                    ml: 90,
                    mt: -7,
                    width: 150,
                    height: 50,
                    fontSize: 30,
                  }}
                >
                  پرداخت
                </Button>
              </Stack>
            </RTL>
          </Box>
        </form>
      </MenuNow>
    </div>
  );
}
//
