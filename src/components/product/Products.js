import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Products = ({ products, loading }) => {
  
  if (loading) {
    return (
        <h2>LOADING..</h2>
    )

    

}
function deletepro(id) {
    axios.delete(`https://62811baf1020d8520585969c.mockapi.io/api/v1/products/${id}`)
        .then(res => {
            window.location.reload(true);
            

        })
}


  return (
      
    <tbody>
         
    {products.map((pro, index) => {
      return (


          <tr key={index}>
              <td >{pro.id}</td>
              <td>
                  <div className="order-owner">
                      <img src={pro.imageUrl} alt="user image" />

                      <span></span>
                  </div>
              </td>
              <td>
                  <span>{pro.name}</span>
              </td>
              <td>{pro.breed}</td>
              <td>
                  <span className="order-status order-ready">
                      Còn hàng
                  </span>
              </td>

              <td>{pro.price}</td>
              <td>
                  <div className="manage">

                      <Link to={`/editProduct/${pro.id}`}><i className='bx bx-edit bx-md'></i></Link>
                      <button
                          className="delete button"
                          onClick={() => {
                              const confirmBox = window.confirm(
                                  "Ban co muon xoa san pham nay?"
                              )
                              if (confirmBox === true) {
                                  deletepro(pro.id)
                              }
                          }}><i className='bx bx-trash bx-md'></i>
                      </button>
                  </div>

              </td>
              <td>

              </td>
          </tr>


      )

  })}
    </tbody>
  );
};

export default Products;
