import React from 'react';
import { Link } from 'react-router-dom';

const Comments = ({ comments, loading }) => {
    if (loading) {
        return (
            <h2>LOADING..</h2>
        )
    }
    return (
        <>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Đánh giá</th>
                    <th>Bình luận</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((cm, index) => {
                    return (
                        <tr key={index}>
                            <td >{cm.id}</td>
                            <td>
                                <span>{cm.name}</span>
                            </td>
                            <td>
                                <span>{cm.star}</span>
                            </td>
                            <td>{cm.comment}</td>
                            <td>
                                <span className={cm.status === "Hiện" ? 'order-status order-ready' :
                                    'order-status order-shipped'}> {cm.status === "Hiện" ? 'Hiện' : 'Ẩn'}</span>
                            </td>
                            <td>
                                <div className="manage">
                                    <Link to={`/editComment/${cm.id}`}><i className='bx bx-edit bx-md'></i></Link>
                                </div>
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </>
    );
};

export default Comments;
