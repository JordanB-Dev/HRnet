import React from 'react'

const DatePicker = ({
  handleChange,
  value,
  name,
  id,
  autoComplete,
  title,
  styleTitle,
  styleDatePicker,
}) => {
  return (
    <div className="flex items-center justify-center mb-5">
      <label className="relative w-full ">
        <input
          className={`${styleDatePicker ? styleDatePicker : 'bg-card focus:border-primary peer-focus:border-primary border-white/20 text-md hover:border-white [color-scheme:dark]'} w-full py-[0.9rem] px-4 outline-none border rounded duration-200 peer`}
          value={value}
          name={name}
          type="date"
          onChange={handleChange}
          id={id}
          autoComplete={autoComplete}
          required
        />
        <span
          className={`${styleTitle ? styleTitle : 'text-white/75 bg-card peer-focus:text-primary text-md'} absolute left-0 top-[1rem] px-2 tracking-wide pointer-events-none duration-200 peer-focus:text-[0.8rem] peer-focus:-translate-y-7 ml-2 peer-valid:text-sm peer-valid:-translate-y-7`}
        >
          {title}
        </span>
      </label>
    </div>
  )
}
export default DatePicker
