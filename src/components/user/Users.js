import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = ({ users, loading }) => {
    const [searchUs, setSearchUs] = useState("")
    if (loading) {
        return (
            <h2>LOADING..</h2>
        )
    }
    function deleteus(id) {
        axios.delete(`https://62811baf1020d8520585969c.mockapi.io/api/v1/users/${id}`)
            .then(res => {
                window.location.reload(true);
            })
    }

    return (
        <>
            <thead>
                <tr>

                    <th colspan={3}> <form id="tim">
                        <i class="bx bx-search icon"></i>
                        <input className='input-field' type="text" name="search" placeholder="Tìm kiếm..." onChange={(event) => { setSearchUs(event.target.value) }} />
                    </form></th>
                    <th ></th>
                    <th></th>



                </tr>
            </thead>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>


                {users.filter((us) => {
                    if (searchUs == "") {
                        return us
                    } else if (us.name.toLowerCase().includes(searchUs.toLowerCase())) {
                        return us
                    }
                }).map((us, index) => {
                    return (
                        <tr key={index}>
                            <td >{us.id}</td>
                            <td>
                                <span>{us.name}</span>
                            </td>
                            <td>
                                <span>{us.phone}</span>
                            </td>
                            <td>{us.address}</td>
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
                                                "Ban co muon xoa khach hang nay?"
                                            )
                                            if (confirmBox === true) {
                                                deleteus(us.id)
                                            }
                                        }}><i className='bx bx-trash bx-md'></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </>
    );
};

export default Users;
