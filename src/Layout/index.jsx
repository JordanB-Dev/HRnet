import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <>
      <section className="sticky top-0 left-0 right-0 bg-background">
        <header className="container mx-auto px-5 flex justify-between py-4 items-center">
          <Link to="/">
            <span className="lg:text-2xl text-lg mr-auto py-2 font-bold md:z-auto z-[99999]">
              HRnet
            </span>
          </Link>
          <div className="relative group">
            {location.pathname === '/' ? (
              <>
                <Link
                  className="font-bold text-md font-title"
                  to="/employeelist"
                >
                  Employees List
                </Link>
                <span className="cursor-pointer absolute transition-all duration-500 text-cardforeground font-bold right-0 top-0 group-hover:right-[105%] opacity-0 group-hover:opacity-100">
                  /
                </span>
              </>
            ) : (
              <>
                <Link className="font-bold text-md font-title" to="/">
                  Create Employee
                </Link>
                <span className="cursor-pointer absolute transition-all duration-500 text-cardforeground font-bold right-0 top-0 group-hover:right-[105%] opacity-0 group-hover:opacity-100">
                  /
                </span>
              </>
            )}
          </div>
        </header>
      </section>
    </>
  )
}

export default Header
