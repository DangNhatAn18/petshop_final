import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        phone: 0,
        address: "",
        status: "",
    });

    function Submit(e) {
        e.preventDefault();
        axios.post("https://62811baf1020d8520585969c.mockapi.io/api/v1/users", data).then(
            navigate("/user")
        )
    }
    
    return (
        <>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className='bx bx-menu-alt-right'></i>
                    </div>
                    <div className="main-title">
                        -Quản lí khách hàng - Thêm người dùng
                    </div>
                </div>
                <div className="page-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-content">
                                <div className="box">
                                    <div className="box-header">
                                        <form>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Tên khách hàng</label>
                                                <div className="col-sm-10">
                                                    <input value={data.name}
                                                        onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control"
                                                        placeholder="Nhập tên khách hàng" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Số điện thoại</label>
                                                <div className="col-sm-10">
                                                    <input value={data.phone}
                                                        onChange={(e) => setData({ ...data, phone: e.target.value })} type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Địa chỉ</label>
                                                <div className="col-sm-10">
                                                    <input value={data.address}
                                                        onChange={(e) => setData({ ...data, address: e.target.value })} type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" >Trạng thái</label>
                                                <div className="col-sm-10">
                                                    <select name="select" className="form-control" onChange={(e) => setData({ ...data, status: e.target.value })}>
                                                        <option value="opt1">Chọn trạng thái</option>
                                                        <option value="Kích hoạt">Kích hoạt</option>
                                                        <option value="Ẩn ">Ẩn</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-10">
                                                    <input onClick={Submit} type='submit' value="Thêm người dùng" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser