import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import Pagination from "./Pagination";
import axios from "axios";

const CommentList = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(5);

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://62811baf1020d8520585969c.mockapi.io/api/v1/comment"
            );
            setComments(res.data);
            setLoading(false);
        };
        fetchComments();
    }, []);

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(
        indexOfFirstComment,
        indexOfLastComment
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="bx bx-menu-alt-right"></i>
                </div>
                <div className="main-title">Quản lí thú cưng</div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-body overflow-scroll">
                                <table>
                                    <Comments comments={currentComments} loading={loading} />
                                </table>
                            </div>
                        </div>
                        <Pagination
                            commentsPerPage={commentsPerPage}
                            totalComments={comments.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentList;
