import React from 'react';

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => (
  <div>
    <button onClick={onPrev} disabled={currentPage === 1}>
      Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button onClick={onNext} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
);

export default Pagination;
