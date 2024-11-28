import { Link } from 'react-router-dom';
export const Navbar = ()=>{
    return(
        <>
        <nav className="navbar sticky absolute top-0 w-full bg-gray-800 text-white h-12 ">
          <div className="container w-full flex justify-between items-center p-2 text-center ">
            <h1 className="text-2xl font-bold">StuDash </h1>
            <div className="space-x-4 flex justify-around">
              <Link to="/" className="hover:text-gray-200">Home</Link>
              <Link to="/students" className="hover:text-gray-200">Students</Link>
              <Link to="/charts" className="hover:text-gray-200">Charts</Link>
            </div>
          </div>
        </nav>
        </>
    )
}