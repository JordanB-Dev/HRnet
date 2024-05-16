import React from 'react'

export default function SearchBar({
  posts,
  setSearchResults,
  searchInputPlaceHolder,
}) {
  const handleSubmit = (e) => e.preventDefault()
  console.log(posts)
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts)

    const resultsArray = posts.filter(
      (post) =>
        post.firstName?.toLowerCase().includes(e.target.value) ||
        post.lastName?.toLowerCase().includes(e.target.value) ||
        post.department?.toLowerCase().includes(e.target.value) ||
        post.street?.toLowerCase().includes(e.target.value) ||
        post.city?.toLowerCase().includes(e.target.value) ||
        post.state?.toLowerCase().includes(e.target.value) ||
        post.dateOfBirth?.toLowerCase().includes(e.target.value) ||
        post.startDate?.toLowerCase().includes(e.target.value) ||
        post.firstName?.toUpperCase().includes(e.target.value) ||
        post.lastName?.toUpperCase().includes(e.target.value) ||
        post.department?.toUpperCase().includes(e.target.value) ||
        post.street?.toUpperCase().includes(e.target.value) ||
        post.city?.toUpperCase().includes(e.target.value) ||
        post.state?.toUpperCase().includes(e.target.value) ||
        post.dateOfBirth?.toUpperCase().includes(e.target.value) ||
        post.startDate?.toUpperCase().includes(e.target.value),
    )

    setSearchResults(resultsArray)
  }

  return (
    <>
      <form
        className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
        onSubmit={handleSubmit}
      >
        <div className="z-[1] relative ">
          <input
            type="text"
            id="form-subscribe-Filter"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-input w-full py-2 px-4 bg-background shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
            onChange={handleSearchChange}
            placeholder={searchInputPlaceHolder}
          />
        </div>
        <button
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-black bg-primary rounded-lg shadow-md  focus:outline-none"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  )
}
