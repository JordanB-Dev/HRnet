const BtnDisabled = ({ title }) => {
  return (
    <button
      title="Button Disabled"
      className="bg-primary select-none align-middlefont-bold ring-offset-background focus-visible:ring-ring focus-visible:ring-offset-2 align-middle font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-md text-primaryforeground focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-3/6 sm:w-2/5"
      disabled
    >
      {title}
    </button>
  )
}

export default BtnDisabled
