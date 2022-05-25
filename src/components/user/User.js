import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


async function getData() {
    const res = await axios.get("https://62811baf1020d8520585969c.mockapi.io/api/v1/users")
    console.log(res.data)
    return res;
  }
  

  const User = () => {
    const [allUser, getAllUser] = useState([]);
  
      const [flag,setFlag] = useState(false); 
  
      useEffect(() => {
          
          getData().then((res) => getAllUser(res.data));
          getData().catch((err) => console.log(err));
          
      }, [flag]);
  
      function deleteuser(id) {
          axios.delete(`https://62811baf1020d8520585969c.mockapi.io/api/v1/users/${id}`)
              .then(res => {
                  setFlag(true);
              })
      }
      const [searchUs, setSearchUs] = useState("")
      
  return (
    <>
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                    Quản lí tài khoản
                </div>
            </div>
            <div className="main-content">

                <div className="row">
                    <div className="col-12">

                        <div className="box">
                        <div className="box-header" id='add'>
                                <a href="/addUser"><i className='bx bx-add-to-queue bx-sm'></i> Thêm tài khoản</a>
                            </div>
                            <form id="tim">
                                <i class='bx bx-search icon'></i>
                                <input className='input-field' type="text" name="search" placeholder="Tìm kiếm..." onChange={(event) => { setSearchUs(event.target.value) }} />
                            </form>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên</th>
                                            <th>Số điện thoại</th>
                                            <th>Địa chỉ</th>
                                            <th>Trạng Thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allUser.filter((us) => {
                                            if (searchUs == "") {
                                                return us
                                            } else if (us.name.toLowerCase().includes(searchUs.toLowerCase())) {
                                                return us
                                            }
                                        }).map((us,index) => {
                                            return (
                                                <tr key={index}>
                                                    <td >{index+1}</td>
                                                    <td>
                                                        <span>{us.name}</span>
                                                    </td>
                                                    <td>{us.phone}</td>
                                                    <td>
                                                        <span>{us.address}</span>
                                                    </td>
                                                    <td>
                                                        <span className={us.status === "Kích hoạt" ? 'order-status order-ready' :
                                                                'order-status order-shipped'}> {us.status === "Kích hoạt" ? 'Kích hoạt' : 'Ẩn'}</span>
                                                    </td>
                                                    <td>
                                                        <div className="manage">
                                                            <Link to={`/editUser/${us.id}`}><i className='bx bx-edit bx-md'></i></Link>
                                                            <button
                                                                className="delete button"
                                                                onClick={() => {
                                                                    const confirmBox = window.confirm(
                                                                        "Ban co muon xoa nguoi dung nay?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        deleteuser(us.id)
                                                                    }
                                                                }}><i className='bx bx-trash bx-md'></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                            )})}
                                    </tbody>
                                    </table>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>

    </>
  );
}

export default User