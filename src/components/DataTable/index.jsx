import Pagination from '../Pagination'

const DataTable = ({
  pageTitle,
  tableHeaderTitleList,
  currentPage,
  setCurrentPage,
  pages,
  SearchBar,
  children,
  stylePageTitle,
  styleTh,
  stylePagination,
  stylePaginationFocus,
  stylePaginationNoFocus,
}) => {
  return (
    <>
      <div className="w-full px-4 mx-auto">
        <div className="py-8">
          <div className="flex flex-row flex-wrap justify-between w-full mb-1 sm:mb-0">
            <h1
              className={`${stylePageTitle ? stylePageTitle : 'text-2xl font-semibold'}`}
            >
              {pageTitle}
            </h1>

            <div className="text-end">{SearchBar}</div>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead cl>
                  <tr>
                    {tableHeaderTitleList.map((title, index) => (
                      <th
                        key={index}
                        scope="col"
                        className={`${styleTh ? styleTh : 'border-input font-normal uppercase'} px-5 py-3 text-sm text-left border-b`}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>{children}</tbody>
              </table>
              <Pagination
                onPageChange={(page) => setCurrentPage(page)}
                currentPage={currentPage}
                totalPageCount={pages}
                stylePagination={stylePagination}
                stylePaginationFocus={stylePaginationFocus}
                stylePaginationNoFocus={stylePaginationNoFocus}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataTable
