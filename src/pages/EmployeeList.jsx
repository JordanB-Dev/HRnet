/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import DataTable from '../components/DataTable'
import InputSearch from '../components/ui/InputSearch'

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchResults, setSearchResults] = useState(employees)
  const pageSize = 15
  const total = employees.length
  const pages = Math.ceil(total / pageSize)
  const indexOfLastPost = currentPage * pageSize
  const indexOfFirstPost = indexOfLastPost - pageSize
  const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost)

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(employees)

    const resultsArray = employees.filter(
      (val) =>
        val.firstName?.toString().includes(e.target.value) ||
        val.lastName?.toString().includes(e.target.value) ||
        val.department?.toString().includes(e.target.value) ||
        val.street?.toString().includes(e.target.value) ||
        val.city?.toString().includes(e.target.value) ||
        val.state?.toString().includes(e.target.value) ||
        val.dateOfBirth?.toString().includes(e.target.value) ||
        val.startDate?.toString().includes(e.target.value) ||
        val.firstName?.toLowerCase().includes(e.target.value) ||
        val.lastName?.toLowerCase().includes(e.target.value) ||
        val.department?.toLowerCase().includes(e.target.value) ||
        val.street?.toLowerCase().includes(e.target.value) ||
        val.city?.toLowerCase().includes(e.target.value) ||
        val.state?.toLowerCase().includes(e.target.value) ||
        val.dateOfBirth?.toLowerCase().includes(e.target.value) ||
        val.startDate?.toLowerCase().includes(e.target.value) ||
        val.firstName?.toUpperCase().includes(e.target.value) ||
        val.lastName?.toUpperCase().includes(e.target.value) ||
        val.department?.toUpperCase().includes(e.target.value) ||
        val.street?.toUpperCase().includes(e.target.value) ||
        val.city?.toUpperCase().includes(e.target.value) ||
        val.state?.toUpperCase().includes(e.target.value) ||
        val.dateOfBirth?.toUpperCase().includes(e.target.value) ||
        val.startDate?.toUpperCase().includes(e.target.value),
    )

    setSearchResults(resultsArray)
  }

  return (
    <>
      <DataTable
        pageTitle="Employee List"
        tableHeaderTitleList={[
          'First Name',
          'Last Name',
          'Date of Birth',
          'Start Date',
          'Department',
          'Street',
          'City',
          'State',
          'Zip Code',
        ]}
        SearchBar={
          <InputSearch
            handleSearchChange={handleSearchChange}
            searchInputPlaceHolder="Search..."
            textBtn={'Search'}
          />
        }
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      >
        {currentPosts.map((post) => (
          <tr key={post._id}>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.firstName}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.lastName}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.dateOfBirth}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.startDate}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.department}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.street}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.city}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.state}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-background border-b border-input space-x-5">
              <p className="whitespace-no-wrap">{post?.zipCode}</p>
            </td>
          </tr>
        ))}
      </DataTable>
    </>
  )
}
