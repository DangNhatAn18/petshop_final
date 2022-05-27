import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditCategory() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({

        name: "",
        avt: "",
        status: "",

    });
    const { name, avt, status } = data;


    useEffect(() => {
        loadPro();
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        axios.put(`https://62811baf1020d8520585969c.mockapi.io/api/v1/category/${id}`, data).then(

            navigate("/category")

        )

    }
    const loadPro = async () => {
        const result = await axios.get(`https://62811baf1020d8520585969c.mockapi.io/api/v1/category/${id}`);
        setData(result.data);
    };

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                <i class='bx bx-chevron-right' ></i>Quản lí danh mục<i class='bx bx-chevron-right' ></i>Cập nhật
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
                                    <form>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Tên mới</label>
                                            <div className="col-sm-10" id="chs">
                                                <input value={data.name}
                                                    onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control"
                                                    placeholder="Nhập tên thú cưng" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Sửa ảnh</label>
                                            <div className="col-sm-10" id="chs">
                                                <input value={data.avt}
                                                    onChange={(e) => setData({ ...data, avt: e.target.value })} type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" >Trạng thái</label>
                                        <div className="col-sm-10" id="chs">
                                            <select name="select" className="form-control" onChange={(e) => setData({ ...data, status: e.target.value })}>
                                                <option value="opt1">Chọn trạng thái</option>
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
export default EditCategory