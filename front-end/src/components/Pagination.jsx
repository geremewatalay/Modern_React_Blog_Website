import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
    const totalPages = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={(e) => { e.preventDefault(); onPageChange(pageNumber); }}>
                    {pageNumber}
                </a>
            </li>
        ));
    };

    return (
        <div>
            <ul className="pagination my-8 flex-wrap gap-4">
                <li>
                    <button 
                        onClick={() => onPageChange(Math.max(currentPage - 1, 1))} 
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {renderPaginationLinks()}
                <li>
                    <button 
                        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
