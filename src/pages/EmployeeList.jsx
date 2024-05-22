/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import DataTable from '../components/DataTable'
import SearchBar from '../components/SearchBar'

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
          <SearchBar data={employees} setSearchResults={setSearchResults} />
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
