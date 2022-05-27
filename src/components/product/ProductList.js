import React, { useState, useEffect } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(7);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://62811baf1020d8520585969c.mockapi.io/api/v1/products"
      );
      setProducts(res.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main">
    <div className="main-header">
      <div className="mobile-toggle" id="mobile-toggle">
        <i className="bx bx-menu-alt-right"></i>
      </div>
      <div className="main-title">Quản lí thú cưng</div>
    </div>
    <div className="main-content">
      <div className="row">
        <div className="col-12">
          <div className="box">
            <div className="box-header" id="add">
              <a href="/addProduct">
                <i className="bx bx-add-to-queue bx-sm"></i> Thêm thú cưng
              </a>
            </div>
            <div className="box-body overflow-scroll">
              <table>
                
                <Products products={currentProducts} loading={loading} />
                </table>
               
              </div>
               
            </div>
            <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
