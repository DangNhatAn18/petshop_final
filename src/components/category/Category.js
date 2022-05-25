import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


async function getData() {
    const res = await axios.get("https://62811baf1020d8520585969c.mockapi.io/api/v1/category")
    console.log(res.data)
    return res;
}

const Category = () => {

    const [allCate, getAllCate] = useState([]);

    const [flag, setFlag] = useState(false);

    useEffect(() => {

        getData().then((res) => getAllCate(res.data));
        getData().catch((err) => console.log(err));

    }, [flag]);

    function deletecate(id) {
        axios.delete(`https://62811baf1020d8520585969c.mockapi.io/api/v1/category/${id}`)
            .then(res => {
                setFlag(true);

            })

    }



    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                    Quản lí danh mục
                </div>
            </div>
            <div className="main-content">

                <div className="row">
                    <div className="col-12">

                        <div className="box">
                        <div className="box-header" id='add'>
                                <a href="/addCategory"><i className='bx bx-add-to-queue bx-sm'></i> Thêm danh mục</a>
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Hình ảnh </th>
                                            <th>Tên Danh Mục</th>
                                            <th>Trạng thái</th>
                                            <th>Hành động</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allCate.map((cate, index) => {
                                            return (


                                                <tr key={index}>
                                                    <td >{index + 1}</td>
                                                    <td>
                                                        <div className="order-owner">
                                                            <img src={cate.avt} alt="user image" />

                                                            <span></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span>{cate.name}</span>
                                                    </td>
                                                    <td>
                                                        <span className={cate.status === "Kích hoạt" ? 'order-status order-ready' :
                                                                'order-status order-shipped'}> {cate.status === "Kích hoạt" ? 'Kích hoạt' : 'Ẩn'}</span>
                                                    </td>
                                                    <td>
                                                        <div className="manage">

                                                            <Link to={`/editCategory/${cate.id}`}><i className='bx bx-edit bx-md'></i></Link>
                                                            <button
                                                                className="delete button"
                                                                onClick={() => {
                                                                    const confirmBox = window.confirm(
                                                                        "Ban co muon xoa danh muc nay?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        deletecate(cate.id)
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
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Category
