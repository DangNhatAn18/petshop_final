import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditComment() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        name: "",
        star: "",
        comment: "",
        status: "",
    });
    const { name, star, comment, status } = data;

    useEffect(() => {
        loadUs();
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        axios.put(`https://62811baf1020d8520585969c.mockapi.io/api/v1/comment/${id}`, data).then(
            navigate("/comment")
        )
    }
    const loadUs = async () => {
        const result = await axios.get(`https://62811baf1020d8520585969c.mockapi.io/api/v1/comment/${id}`);
        setData(result.data);
    };

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                <i class='bx bx-chevron-right' ></i>Quản lí bình luận<i class='bx bx-chevron-right' ></i>Cập nhật
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
                                                    type="text" className="form-control" disabled />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Bình luận sản phẩm</label>
                                            <div className="col-sm-10">
                                                <input value={comment}
                                                    onChange={(e) => setData({ ...data, comment: e.target.value })}
                                                    type="text" className="form-control" disabled />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Đánh giá sản phẩm</label>
                                            <div className="col-sm-10">
                                                <input value={star}
                                                    onChange={(e) => setData({ ...data, star: e.target.value })}
                                                    type="text" className="form-control" disabled />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Trạng thái</label>
                                            <div className="col-sm-10">
                                                <select name="select" class="form-control"
                                                    value={data.status}
                                                    onChange={(e) => setData({ ...data, status: e.target.value })}>
                                                    <option selected>Chọn trạng thái</option>
                                                    <option value="Hiện">Hiện</option>
                                                    <option value="Ẩn">Ẩn</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row" id="nut">
                                         <div className="col-sm-10">
                                            <input onClick={onSubmit} type='submit' value="Cập nhật"/>
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
export default EditComment;