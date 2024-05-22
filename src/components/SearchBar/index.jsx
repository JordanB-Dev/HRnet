import React from 'react'
import InputSearch from '../ui/InputSearch'

export default function SearchBar({ data, setSearchResults }) {
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data)

    const resultsArray = data.filter(
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
      <InputSearch
        setSearchResults={setSearchResults}
        handleSearchChange={handleSearchChange}
        searchInputPlaceHolder="Search..."
        textBtn={'Search'}
      />
    </>
  )
}
