import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditUser() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        name: "",
        phone: 0,
        address: "",
        status: "",
    });
    const { name, phone, address, status } = data;


    useEffect(() => {
        loadUs();
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        axios.put(`https://62811baf1020d8520585969c.mockapi.io/api/v1/users/${id}`, data).then(

            navigate("/user")

        )

    }
    const loadUs = async () => {
        const result = await axios.get(`https://62811baf1020d8520585969c.mockapi.io/api/v1/users/${id}`);
        setData(result.data);
    };

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                <i class='bx bx-chevron-right' ></i>Quản lí khách hàng<i class='bx bx-chevron-right' ></i>sửa người dùng
                </div>
            </div>
            <div className="page-body">
                <div className="row">
                    <div className="col-sm-12">
                        <div class="main-content">
                            <div class="row">

                            </div>
                            <div class="box">
                                <div class="box-header">
                                    <form  >
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Tên khách hàng</label>
                                            <div className="col-sm-10">
                                                <input value={name}
                                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                                    type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Số điện thoại</label>
                                            <div className="col-sm-10">
                                                <input value={phone}
                                                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                                                    type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Địa chỉ</label>
                                            <div className="col-sm-10">
                                                <input value={address}
                                                    onChange={(e) => setData({ ...data, address: e.target.value })}
                                                    type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Trạng thái</label>
                                            <div className="col-sm-10">
                                                <select name="select" class="form-control"
                                                    value={data.status}
                                                    onChange={(e) => setData({ ...data, status: e.target.value })}>
                                                    <option selected>Chọn trạng thái</option>
                                                    <option value="Kích hoạt">Kích hoạt</option>
                                                    <option value="Ẩn">Ẩn</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row" id="nut">
                                            <div className="col-sm-10">
                                                <input onClick={onSubmit} type='submit' value="Cập nhật" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <br />


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EditUser