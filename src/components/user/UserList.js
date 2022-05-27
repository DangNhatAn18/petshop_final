import React, { useState, useEffect } from "react";
import Users from "./Users";
import Pagination from "./Pagination";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://62811baf1020d8520585969c.mockapi.io/api/v1/users"
            );
            setUsers(res.data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(
        indexOfFirstUser,
        indexOfLastUser
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="bx bx-menu-alt-right"></i>
                </div>
                <div className="main-title"><i class='bx bx-chevron-right' ></i>Quản lí người dùng</div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header" id="add">
                                <a href="/addUser">
                                    <i className="bx bx-add-to-queue bx-sm"></i> Thêm Khách hàng
                                </a>
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    
                                    <Users users={currentUsers} loading={loading} />
                                </table>
                            </div>
                        </div>
                        <Pagination
                            usersPerPage={usersPerPage}
                            totalUsers={users.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
