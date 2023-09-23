import { Link } from "react-router-dom";
import logo from './resources/logo 1.png';

const NotFound = () => {
    return ( 
        <div className="">

            <div className="sm:w-[90%] sm:mx-auto sm:my-2">
                <nav className="bg-[#FE8F8F] rounded-xl p-4 flex justify-between py-4 text-white">
                    <img src={logo} alt="website logo" className="w-20 h-5 sm:w-20 sm:h-5 lg:w-36 lg:h-8"/>
                    <ul className="flex">
                        <li className="text-xs mr-2 sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl"><Link to="#home" smooth>HOME</Link></li>
                        <li className="text-xs mr-2 sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl"><Link to="#latest" smooth>LATEST</Link></li>
                        <li className="text-xs mr-2 sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl"><Link to="#testimonials" smooth>TESTIMONIALS</Link></li>
                        <li className="text-xs sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl text-[#FE8F8F]"><Link to="#subscribe" smooth><button className="rounded-full bg-white px-1 sm:text-sm sm:px-1 sm:py-0 lg:px-5 lg:py-1 font-medium">SUBSCRIBE</button></Link></li>
                    </ul>
                </nav>
            </div>

            <div className="not-found w-[80%] mx-auto border py-10 px-10 my-36 rounded-xl border-[#ff5c58] font-bold">
                <h2 className="text-5xl text-[#ff5c58] pb-5">Sorry!!!</h2>
                <p className="text-xl py-3 mb-3">Page Cannot be found</p>
                <Link to="/"><div className="py-2 hover:text-[#ff5c58] hover:border-black hover:text-xl text-center font-semibold border rounded-md border-[#ff5c58]">Back to homepage...</div></Link>
            </div>

        </div>
     );
}
 
export default NotFound;