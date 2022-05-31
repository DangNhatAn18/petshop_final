import React from 'react';

const Pagination = ({ currentPage, commentsPerPage, totalComments, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
    pageNumbers.push(i);
  }

  const isActive = (index) =>{
    return index === currentPage;
  }

  return (
    <div className="pagi">
      <ul className='pagination'>
        <li className="page-item">
          <a className="page-link" to={currentPage - 1} onClick={() => paginate(currentPage => currentPage <= 1 ? currentPage : currentPage - 1)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only"></span>
          </a>
        </li>

        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a className={`page-link ${isActive(number)? 'active' : ''}`} to={number} onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" to={currentPage + 1} onClick={() => paginate(currentPage => currentPage >= pageNumbers.length? currentPage : currentPage + 1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
