import React from "react";
import Style from "./Style.module.css";
import MenuNow from "layouts";
import axios from "axios";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Table.css";
import { Link } from "react-router-dom";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';


function Basket() {
  console.log("ok");
  const [isActive, setActive] = React.useState("false");
  const [Get, setGet] = React.useState(null);
  

  


  React.useEffect(() => {
    axios
      .get(`http://localhost:3002/basket`)
      .then((res) => {
        console.log(res);
        setGet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!Get) return null;

  let sum = 0;

  Get.map((Get) => {
    let Mult = 0;
    Mult = Get.price * Get.counter;
    sum = sum + Mult;
  });

  let Sum = `تومان${sum}`;

  async function Delete(id) {
    await axios.delete(`http://localhost:3002/basket/${id}`);
    window.location.reload();
  }

 const handleToggle = async(id) => {
  setActive(!isActive);
  await axios.delete(`http://localhost:3002/basket/${id}`);
  // window.location.reload();
};

let counter = 0;

  const handelPlus = (id) => {
    
    let title = "";
    let group = "";
    let writer = "";
    let price = "";
    let number = "";
    let image = "";
    Get.map((Get) => {
      if (Get.id == id) {
        title = Get.title;
        group = Get.group;
        writer = Get.writer;
        price = Get.price;
        number = Get.number;
        image = Get.image;
        counter = Get.counter;
      }
    });

    if (counter < number) {
     
    
      Delete(id);
      counter = counter + 1;
      const order = {
        title,
        group,
        writer,
        price,
        number,
        image,
        counter,
      };
      axios
        .post(`http://localhost:3002/basket`, order)
        .then((response) => {
          console.log(response.status);
          console.log(response.data.token);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("ok");
      window.location.reload();
    }
  };

  const deleteByByOne = (id) => {
    
    let title = "";
    let group = "";
    let writer = "";
    let price = "";
    let number = "";
    let image = "";
    Get.map((Get) => {
      if (Get.id == id) {
        title = Get.title;
        group = Get.group;
        writer = Get.writer;
        price = Get.price;
        number = Get.number;
        image = Get.image;
        counter = Get.counter;
      }
    });
    Delete(id);
    if (counter > 1) {
      counter = counter - 1;
      const order = {
        title,
        group,
        writer,
        price,
        number,
        image,
        counter,
      };
      axios
        .post(`http://localhost:3002/basket`, order)
        .then((response) => {
          console.log(response.status);
          console.log(response.data.token);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("ok");
      window.location.reload();
      
    }
  };

  let Basket = Get.map((Get) => (
    <tr key={Get.id}   >
    <td>
    <Box
    
    >
     <HighlightOffTwoToneIcon onClick={()=>handleToggle(Get.id)} color="error"/>
    </Box>
  </td>
      <td>
        <Box
          sx={{
            display: "flex",
          }}
        >
       
          <span>
           
            <img
              className={Style.imageTitle}
              src={`http://localhost:3002/files/${Get.image}`}
              alt={Get.group}
            />
          </span>{" "}
          <Box
            sx={{
              mt: 2,
              mr: 5,
            }}
          >
          
            <span> {Get.title}</span>
          </Box>
        </Box>{" "}
      </td>
      <td>
        <Box
          sx={{
            mt: 2,
          }}
        >
          {Get.writer}
        </Box>
      </td>

      <td>
        <Box
          sx={{
            mt: 2,
          }}
        >
          تومان {Get.price * Get.counter}
        </Box>
      </td>
      <td>
        <Box
          sx={{
            mt: 2,
          }}
        >
          {Get.counter}
        
        </Box>
      </td>
      <td>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            onClick={() => deleteByByOne(Get.id)}
            color="error"
            variant="outlined"
            sx={{
              mr: 5,
            }}
            startIcon={
              <DeleteIcon
                sx={{
                  ml: 2,
                }}
              />
            }
          >
            حذف
          </Button>
          <Button
          onClick={() => handelPlus(Get.id)}
            color="primary"
            variant="outlined"
            sx={{
              width: 130,
              mr: 5,
            }}
            startIcon={
              <AddCircleOutlineSharpIcon
                sx={{
                  ml: 2,
                }}
              />
            }
          >
            اظافه کردن
          </Button>
        </Box>
      </td>
    </tr>
  ));

  // let tbOrder = Get.map((Get) => {

  //   for (let i = 0; i <= ShowOrder.length; i++) {
  //     if (Get.id == ShowOrder[i]) {
  //       return (
  //         <tr key={Get.id}>
  //           <td><Box sx={{
  //             display: 'flex',

  //           }}> <span > <img className={Style.imageTitle} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} /></span> <Box sx={{
  //             mt: 2,
  //             mr: 2
  //           }}> <span> {Get.title}</span></Box></Box> </td>
  //           <td>{
  //             Numbers(Get.id)

  //           }</td>
  //           <td>

  //             تومان {counters.map((counts) => {
  //               if (counts.el == Get.id) {
  //                 let Mult = 0;
  //                 Mult = counts.count * Get.price
  //                 return (
  //                   Mult
  //                 )
  //               }
  //             })
  //             }

  //           </td>

  //           <td>
  //             <Button variant="outlined"  sx={{
  //               mr: 5
  //             }} startIcon={<DeleteIcon sx={{
  //               ml: 2,
  //             }} />}>
  //               حذف
  //             </Button>

  //           </td>

  //         </tr>
  //       )
  //     }
  //   }

  // })

  return (
    <div>
      <MenuNow>
        <div className={Style.BasketStyle}>
          <Box
            sx={{
              mt: -20,
              mr: 25,
              fontFamily: 20,
            }}
          >
            <table>
              <tr>
                <th>حذف</th>
                <th>اطلاعات محصول</th>
                <th>نویسنده</th>
                <th>قیمت محصول</th>
                <th>تعداد</th>
                <th>ویرایش</th>
              </tr>

              <tbody>{Basket}</tbody>
            </table>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                mr: 40,
                display: "flex",
                mt: 40,
                fontFamily: 50,
              }}
            >
              <p>قیمت کل:</p> <span>{Sum}</span>
            </Box>
            <Box
              sx={{
                mr: 60,
                display: "flex",
                mt: 40,
                fontFamily: 50,
              }}
            >
              <Link to={"/Checkout/" + Sum}>
                {" "}
                <Button color="success" variant="outlined">
                  ادامه خرید
                </Button>
              </Link>
            </Box>
          </Box>
        </div>
      </MenuNow>
    </div>
  );
}

export default Basket;

//
