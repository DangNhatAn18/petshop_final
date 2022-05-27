import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditProduct() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({

        name: "",
        breed: "",
        price: 0,
        description: "",
        status: "",
        imageUrl: ""
    });
    const { name, breed, price, description, imageUrl,status } = data;


    useEffect(() => {
        loadPro();
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        axios.put(`https://62811baf1020d8520585969c.mockapi.io/api/v1/products/${id}`, data).then(

            navigate("/product")

        )
        
    }
    const loadPro = async () => {
        const result = await axios.get(`https://62811baf1020d8520585969c.mockapi.io/api/v1/products/${id}`);
        setData(result.data);
    };

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                <i class='bx bx-chevron-right' ></i>Quản lí thú cưng<i class='bx bx-chevron-right' ></i>Cập nhật
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
                                        <div className="col-sm-10">
                                            <input value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control"
                                            placeholder="Nhập tên thú cưng"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label" >Loại</label>
                                        <div class="col-sm-10">
                                            <select name="select" class="form-control" value={data.breed}
                                                onChange={(e) => setData({ ...data, breed: e.target.value })}>
                                                <option value="opt1">Chọn Loại</option>
                                                <option value="Chó">Chó</option>
                                                <option value="Mèo">Mèo</option>
                                                <option value="Rùa">Rùa</option>
                                                <option value="Hamster">Hamster</option>
                                                <option value="Toy">Toy</option>
                                                <option value="Food">Food</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Trạng thái</label>
                                            <div className="col-sm-10">
                                                <select name="select" class="form-control"
                                                    value={data.status}
                                                    onChange={(e) => setData({ ...data, status: e.target.value })}>
                                                    <option selected>Chọn trạng thái</option>
                                                    <option value="Còn hàng">Còn hàng</option>
                                                    <option value="Hết hàng">Hết hàng</option>
                                                </select>
                                            </div>
                                        </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Giá tiền</label>
                                        <div className="col-sm-10">
                                            <input value={data.price}
                                                onChange={(e) => setData({ ...data, price: e.target.value })} type="text" className="form-control"/>
                                        </div>
                                    </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Sửa ảnh</label>
                                                    <div className="col-sm-10">
                                                        <input value={data.imageUrl}
                                                    onChange={(e) => setData({ ...data, imageUrl: e.target.value })} type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Mô Tả</label>
                                                 <div className="col-sm-10">
                                                     <textarea value={data.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })} rows="5" cols="5" className="form-control"
                                                    placeholder="Ghi chú mô tả thú cưng" ></textarea>
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
export default EditProduct