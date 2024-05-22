import React from 'react'

export default function InputSearch({
  handleSearchChange,
  searchInputPlaceHolder,
  styleInput,
  styleBtn,
  textBtn,
}) {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <form
      className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
      onSubmit={handleSubmit}
    >
      <div className="z-[1] relative ">
        <input
          type="text"
          id="form-subscribe-Filter"
          className={`${styleInput ? styleInput : 'focus:border-primary border-input bg-background'} border rounded-lg flex-1 appearance-none w-full py-2 px-4 shadow-sm text-base focus:outline-none`}
          onChange={handleSearchChange}
          placeholder={searchInputPlaceHolder}
        />
      </div>
      <button
        className={`${styleBtn ? styleBtn : 'text-black bg-primary text-base font-semibold'} flex-shrink-0 px-4 py-2 rounded-lg shadow-md focus:outline-none`}
        type="submit"
      >
        {textBtn}
      </button>
    </form>
  )
}
