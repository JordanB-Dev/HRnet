const Button = ({ title, styleBtn }) => {
  return (
    <button
      title="Button"
      className={`${styleBtn ? styleBtn : 'bg-primary focus-visible:ring-ring uppercase ring-offset-background text-primaryforeground font-bold'} select-none align-middlefont-bold focus-visible:ring-offset-2 align-middle text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-md focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-3/6 sm:w-2/5`}
    >
      {title}
    </button>
  )
}

export default Button
