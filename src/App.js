import { Routes, Route } from 'react-router-dom';
import './App.css';
import './grid.css';
import './Add.css';
import Home from './components/Home';
import ProductList from './components/product/ProductList';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import Category from './components/category/Category';
import AddCategory from './components/category/AddCategory';
import EditCategory from './components/category/EditCategory';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import UserList from './components/user/UserList';
import CommentList from './components/comment/CommentList';
import EditComment from './components/comment/EditComment';


function App() {
    return (

        <div className='app'>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/280955010_378872454279584_1851209314535231209_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=shfIqJQfxV8AX84lTpY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIppvjHj0aht5U3AFx7SAEKfuxXkO51QxcuSjo2VlowXw&oe=62AF92A3" alt="Comapny logo" />
                    <div className="sidebar-close" id="sidebar-close">
                        <i className='bx bx-left-arrow-alt'></i>
                    </div>
                </div>
                <div className="sidebar-user">
                    <div className="sidebar-user-info">
                        <img src="https://tudiendanchoi.com/wp-content/uploads/2022/05/z3399223868975_f9672eaf281fbf6771659ccb18692a12.jpg" alt="User picture" className="profile-image" />
                        <div className="sidebar-user-name">
                            UserName
                        </div>
                    </div>
                    <button className="btn btn-outline">
                        <i className='bx bx-log-out bx-flip-horizontal'></i>
                    </button>
                </div>

                <ul className="sidebar-menu">
                    <li>
                        <a href="/" className="">
                            <i className='bx bx-home'></i>
                            <span>TRANG CHỦ</span>
                        </a>
                    </li>
                    <li>
                        <a href="/product">
                            <i className='bx bx-shopping-bag'></i>
                            <span>QUẢN LÍ MẶT HÀNG</span>
                        </a>
                    </li>
                    <li>
                        <a href="/category">
                            <i class='bx bx-category'></i>
                            <span>QUẢN LÍ DANH MỤC</span>
                        </a>
                    </li>
                    <li>
                        <a href="/user">
                            <i className='bx bx-user-circle'></i>
                            <span>QUẢN LÍ NGƯỜI DÙNG</span>
                        </a>
                    </li>
                    <li>
                        <a href="/comment">
                            <i className='bx bx-user-circle'></i>
                            <span>QUẢN LÍ BÌNH LUẬN</span>
                        </a>
                    </li>
                    <li className="sidebar-submenu">
                        <a href="#" className="sidebar-menu-dropdown">
                            <i className='bx bx-user'></i>
                            <span>TÀI KHOẢN</span>
                            <div className="dropdown-icon"></div>
                        </a>
                        <ul className="sidebar-menu sidebar-menu-dropdown-content">
                            <li>
                                <a href="#">
                                    Hồ sơ cá nhân
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Cài đặt tài khoản
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Kết nối khác
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-mail-send'></i>
                            <span>EMAIL</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-chat'></i>
                            <span>HỖ TRỢ</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-calendar'></i>
                            <span>LỊCH</span>
                        </a>
                    </li>
                    <li className="sidebar-submenu">
                        <a href="#" className="sidebar-menu-dropdown">
                            <i className='bx bx-cog'></i>
                            <span>CÀI ĐẶT</span>
                            <div className="dropdown-icon"></div>
                        </a>
                        <ul className="sidebar-menu sidebar-menu-dropdown-content">
                            <li>
                                <a href="#" className="darkmode-toggle" id="darkmode-toggle">
                                    chế độ tối
                                    <span className="darkmode-switch"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<ProductList />} />
                <Route path='/addProduct' element={<AddProduct />} />
                <Route path='/editProduct/:id' element={<EditProduct />} />
                <Route path='/category' element={<Category />} />
                <Route path='/addCategory' element={<AddCategory />} />
                <Route path='/editCategory/:id' element={<EditCategory />} />
                <Route path='/user' element={<UserList />} />
                <Route path='/addUser' element={<AddUser />} />
                <Route path='/editUser/:id' element={<EditUser />} />
                <Route path='/comment' element={<CommentList />} />
                <Route path='/editComment/:id' element={<EditComment />} />
            </Routes>

        </div>



    );
}

export default App;