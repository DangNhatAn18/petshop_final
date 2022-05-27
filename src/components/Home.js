import React from 'react'

function Home() {
    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                    dashboard
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">

                            <div className="counter">
                                <div className="counter-title">
                                    Tổng hàng đã bán
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className='bx bx-shopping-bag'></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">

                            <div className="counter">
                                <div className="counter-title">
                                    Feedback
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        30.5%
                                    </div>
                                    <i className='bx bx-chat'></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">

                            <div className="counter">
                                <div className="counter-title">
                                    Tổng tiền
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        $9,780
                                    </div>
                                    <i className='bx bx-line-chart'></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">

                            <div className="counter">
                                <div className="counter-title">
                                    Khách hàng đã ghé thăm
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        690
                                    </div>
                                    <i className='bx bx-user'></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3 col-md-6 col-sm-12">

                        <div className="box f-height">
                            <div className="box-header">
                                Danh Mục Thú Cưng
                            </div>
                            <div className="box-body">
                                <ul className="product-list">
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://dogily.vn/wp-content/uploads/2021/10/cho-poodle-tai-buom-trang-2-thang-tuoi-1-1-250x300.jpg" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">Chó Cảnh</div>
                                                <div className="text-second"></div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second"></div>
                                            <div className="product-sales"></div>
                                        </div>

                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://dogily.vn/wp-content/uploads/2021/10/meo-anh-long-ngan-nhap-khau-17-250x300.jpg" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">Mèo Cảnh</div>
                                                <div className="text-second"></div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second"></div>
                                            <div className="product-sales"></div>
                                        </div>
                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://petviet.vn/wp-content/uploads/2018/09/mua-thuc-an-cho-thu-cung-tai-binh-dinh-800x450.jpg" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">Thức ăn cho thú cưng</div>
                                                <div className="text-second"></div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second"></div>
                                            <div className="product-sales"></div>
                                        </div>
                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://cf.shopee.vn/file/e40390b8ab2f23e8d2c511e3d3862bf4" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">Đồ chơi cho thú cưng</div>
                                                <div className="text-second"></div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second"></div>
                                            <div className="product-sales"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-4 col-md-6 col-sm-12">

                        <div className="box f-height">
                            <div className="box-header">
                                Danh sách bán chạy
                            </div>
                            <div className="box-body">
                                <ul className="product-list">
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://tunglocpet.com/wp-content/uploads/2020/01/cho-alabai-con-04.jpg" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">alabai</div>
                                                <div className="text-second">Chó</div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Giá</div>
                                            <div className="product-sales">9000000đ</div>
                                        </div>
                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://zoipet.com/wp-content/uploads/2020/04/meo-anh-long-dai.jpg" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">mèo Anh lông dài</div>
                                                <div className="text-second">Mèo</div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Giá</div>
                                            <div className="product-sales">7800000đ</div>
                                        </div>
                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://lolipet.net/wp-content/uploads/2019/01/hamste-bear1.jpg" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">bear</div>
                                                <div className="text-second">Chuột</div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Giá</div>
                                            <div className="product-sales">120000đ</div>
                                        </div>
                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="https://vietpetgarden.net/wp-content/uploads/2018/05/hermanns-tortoise_Rudmer-Zwerver_Shutterstock.jpg" alt="product image" />
                                            <div className="item-name">
                                                <div className="product-name">Hermann</div>
                                                <div className="text-second">Rùa</div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Giá</div>
                                            <div className="product-sales">500000đ</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-12">

                        <div className="box">
                            <div className="box-header">
                                Recent orders
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Khách hàng</th>
                                            <th>Ngày</th>
                                            <th>Trạng Thái Vận Chuyển</th>
                                            <th>Thanh Toán</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#2345</td>
                                            <td>
                                                <div className="order-owner">
                                                    <img src="https://tuanbosstrum.github.io/html_shopping/assets/img/people/2.png" alt="user image" />
                                                    <span>Lê Văn Tuấn</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                <span className="order-status order-ready">
                                                    Sẵn sàng giao hàng
                                                </span>
                                            </td>
                                            <td>
                                                <div className="payment-status payment-pending">
                                                    <div className="dot"></div>
                                                    <span>Chưa thanh toán</span>
                                                </div>
                                            </td>
                                            <td>6988888đ</td>
                                        </tr>
                                        <tr>
                                            <td>#2345</td>
                                            <td>
                                                <div className="order-owner">
                                                    <img src="https://tuanbosstrum.github.io/html_shopping/assets/img/people/1.png" alt="user image" />
                                                    <span>Hoàng Anh Tuấn</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                <span className="order-status order-shipped">
                                                    Đã giao hàng
                                                </span>
                                            </td>
                                            <td>
                                                <div className="payment-status payment-paid">
                                                    <div className="dot"></div>
                                                    <span>Đã thanh toán</span>
                                                </div>
                                            </td>
                                            <td>48520000đ</td>
                                        </tr>
                                        <tr>
                                            <td>#2345</td>
                                            <td>
                                                <div className="order-owner">
                                                    <img src="https://tuanbosstrum.github.io/html_shopping/assets/img/people/2.png" alt="user image" />
                                                    <span>Lâm Hoàng Anh</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                <span className="order-status order-shipped">
                                                    Đã giao hàng
                                                </span>
                                            </td>
                                            <td>
                                                <div className="payment-status payment-paid">
                                                    <div className="dot"></div>
                                                    <span>Đã thanh toán</span>
                                                </div>
                                            </td>
                                            <td>848421255đ</td>
                                        </tr>
                                        <tr>
                                            <td>#2345</td>
                                            <td>
                                                <div className="order-owner">
                                                    <img src="https://tuanbosstrum.github.io/html_shopping/assets/img/people/1.png" alt="user image" />
                                                    <span>Lê Hải Hà</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                <span className="order-status order-shipped">
                                                    Đã giao hàng
                                                </span>
                                            </td>
                                            <td>
                                                <div className="payment-status payment-paid">
                                                    <div className="dot"></div>
                                                    <span>Đã thanh toán</span>
                                                </div>
                                            </td>
                                            <td>5454415151đ</td>
                                        </tr>
                                        <tr>
                                            <td>#2345</td>
                                            <td>
                                                <div className="order-owner">
                                                    <img src="https://tuanbosstrum.github.io/html_shopping/assets/img/people/3.png" alt="user image" />
                                                    <span>Lê Hoàng Ánh My</span>
                                                </div>
                                            </td>
                                            <td>2021-05-09</td>
                                            <td>
                                                <span className="order-status order-shipped">
                                                    Đã giao hàng
                                                </span>
                                            </td>
                                            <td>
                                                <div className="payment-status payment-paid">
                                                    <div className="dot"></div>
                                                    <span>Đã thanh toán</span>
                                                </div>
                                            </td>
                                            <td>5000000đ</td>
                                        </tr>
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
export default Home