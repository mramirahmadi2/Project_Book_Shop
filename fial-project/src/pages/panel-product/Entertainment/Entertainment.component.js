import React, { useState } from "react";
import Menu from "layouts/main/component/menu/menu.component";
import Box from "@mui/material/Box";

import Pagination from "@mui/material/Pagination";
import Footer from "layouts/main/component/footer/Footer.component";
import axios from "axios";
import getProducts from "components/api/GetAxios";
import Card from "../../../components/card/Card.component";
import Style from "../styleGlobaleProduct.module.css";
import ReactPaginate from "react-paginate";
import MinesButtons from "components/button/Mines/ButtonMines";
import { Link } from "react-router-dom";
import "../Style.css";

const PER_PAGE = 6;
function Entertain() {
  const [currentPage, setCurrentPage] = useState(0);

  const [post, setPost] = React.useState([]);

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

  if (!post) return null;

  function handelPageClick({ selected: selectedPage }) {
    console.log("selected", selectedPage);
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;

  const filterProduct = post.filter(Get => Get.group === 'Entertainment');

  const Entertainment = filterProduct.slice(offset, offset + PER_PAGE).map((Get) => {
    if (Get.group === "Entertainment") {
      return (
        <div>
          <Link to={"/ProductDetail/" + Get.id}>
            <Card key={Get.id}>
              <img
                className={Style.img}
                src={`http://localhost:3002/files/${Get.image}`}
                alt={Get.title}
              />

              <h3>{Get.title}</h3>

              <p>نویسنده:{Get.writer}</p>
              <p>قیمت:{Get.price}تومان</p>
              {Get.number == 0 && (
                <p
                  style={{
                    color: "red",
                    fontSize: "10px",
                  }}
                >
                  این کتاب به اتمام رسیده است
                </p>
              )}
              {Get.number == 1 && (
                <p
                  style={{
                    color: "red",
                    fontSize: "10px",
                  }}
                >
                  تنها 1 عدد از این کتاب موجود است
                </p>
              )}
              {Get.number == 2 && (
                <p
                  style={{
                    color: "red",
                    fontSize: "10px",
                  }}
                >
                  تنها 2 عدد از این کتاب موجود است
                </p>
              )}
            </Card>
          </Link>
        </div>
      );
    }
  });


  let Length = 0;
  post.map((Get) => {
    if (Get.group === "Entertainment") {
      Length += 1;
    }
  });
  console.log(Length);
  const pageCount = Math.ceil(Length / PER_PAGE);

  return (
    <>
      <div>
        <div>
          <Menu />
        </div>
        <div className={Style.LineMe}>
          <span className={Style.title}>سرگرمی</span>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 4,
              m: 4,

              mt: 5,
              borderRadius: 1,
            }}
          >
            {Entertainment}
          </Box>
        </div>

        <Box
          sx={{
            mt: 20,
              mr: 90,
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

      <Footer />
    </>
  );
}

export default Entertain;
