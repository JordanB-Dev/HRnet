const Input = ({
  handleChange,
  value,
  type,
  name,
  id,
  autoComplete,
  title,
}) => {
  return (
    <div className="flex items-center justify-center mb-5">
      <label className="relative w-full ">
        <input
          className="bg-card w-full py-[0.9rem] px-4 text-md outline-none border border-white/20 rounded hover:border-white duration-200 peer focus:border-primary peer-focus:border-primary"
          onChange={handleChange}
          value={value}
          type={type}
          name={name}
          id={id}
          autoComplete={autoComplete}
          required
        />
        <span className="absolute left-0 top-[1rem] px-2 text-white/75 text-md bg-card tracking-wide peer-focus:text-primary pointer-events-none duration-200 peer-focus:text-[0.8rem] peer-focus:-translate-y-7 ml-2 peer-valid:text-sm peer-valid:-translate-y-7">
          {title}
        </span>
      </label>
    </div>
  )
}

export default Input
