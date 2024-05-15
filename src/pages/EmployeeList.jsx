import { useState } from 'react'
import { useSelector } from 'react-redux'
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid'

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees)

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 175 },
    { field: 'lastName', headerName: 'Last Name', width: 175 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 175 },
    { field: 'startDate', headerName: 'Start Date', width: 175 },
    { field: 'department', headerName: 'Department', width: 175 },
    { field: 'street', headerName: 'Street', width: 175 },
    { field: 'city', headerName: 'City', width: 190 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'zipCode', headerName: 'Zip Code', width: 175 },
  ]

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  })
  return (
    <section className="flex-col items-center justify-center m-auto md:mt-[30px] mt-[10px]">
      <h1 className="flex items-center justify-center font-title font-bold text-2xl xl:text-3xl mb-5">
        Employee List
      </h1>

      <DataGrid
        rows={employees}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        slots={{ toolbar: GridToolbarQuickFilter }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        autoHeight
        disableRowSelectionOnClick
      />
    </section>
  )
}
