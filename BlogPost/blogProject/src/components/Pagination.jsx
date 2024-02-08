import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div
      className="fixed bottom-0 inset-x-0 
     py-2 border-t-2 border-t-gray-300   bg-[#242424]"
    >
      <div className="w-11/12 max-w-2xl mx-auto flex items-center justify-between">
        <div className='flex gap-2'>
          {/* Previous button */}
          {page > 1 && (
            <button onClick={() => handlePageChange(page - 1)}
            >Previous</button>
          )}

          {/* Next button */}
          {page < totalPages && (
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
          )}
        </div>

        {/* Page information */}
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination