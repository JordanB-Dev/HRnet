import React from 'react'
import { usePagination, DOTS } from '../../hooks/usePagination'

const Pagination = ({
  onPageChange,
  currentPage,
  siblingCount = 1,
  totalPageCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }
  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <div className="flex flex-col items-center px-5 py-5 bg-background xs:flex-row xs:justify-between">
      <div className="flex items-center">
        <button
          aria-label="Previous"
          aria-labelledby="Previous"
          disabled={currentPage === 1}
          type="button"
          className="w-full p-4 text-base bg-card border rounded-l-xl  hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onPrevious}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <button
                key={pageNumber}
                className="cursor-default w-full px-4 py-2 text-base bg-card hover:bg-black border"
              >
                &#8230;
              </button>
            )
          }

          return (
            <button
              key={pageNumber}
              type="button"
              className={`w-full px-4 py-2 text-base border bg-card ${
                pageNumber === currentPage
                  ? 'text-white font-semibold bg-black'
                  : 'text-white bg-card  hover:bg-card/50'
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}

        <button
          aria-label="Next"
          aria-labelledby="Next"
          disabled={currentPage === lastPage}
          type="button"
          className="w-full p-4 text-base bg-card hover:bg-black border-t border-b border-r rounded-r-xl disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onNext}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Pagination
