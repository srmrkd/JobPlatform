import logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass = ({isActive}) => (
        isActive
            ? 'text-white bg-black hover:bg-gray-900 rounded-md m-2 p-2 '
            : 'text-white hover:bg-gray-900 rounded-md m-2 p-2 '
    );

  return (
    <>
        <nav className="bg-indigo-700 border-b border-indigo-500"> {/* color */}  
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '> {/* Spacing */}
                <div className="flex h-20 items-center justify-center md:justify-between"> {/* height and aligning in y-axis */}
                    <div className="flex md:flex-1 items-center justify-center md:items-stretch md:justify-start"> {/* aligning content */}
                        <div className='flex items-center'> {/* nav-left */}
                            <img src={logo} className='h-10 w-auto' />
                            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                                 ReactJobs
                            </span>
                        </div>  
                        <div className='w-full h-100'> {/* nav-right */}
                            <ul className='flex justify-end'>
                                <NavLink 
                                    to="/" 
                                    className={linkClass}
                                >
                                    Home
                                </NavLink>
                                <NavLink 
                                    to="/jobs" 
                                    className={linkClass}
                                >
                                    Jobs
                                </NavLink>
                                <NavLink 
                                    to="/add-job" 
                                    className={linkClass}
                                >
                                    Add Job
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </nav>
    </>
  )
}

export default Navbar