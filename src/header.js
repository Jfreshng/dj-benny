import banner from './resources/klipartz 1.png';
import logo from './resources/logo 1.png';

const Header = () => {
    return ( 
        <header className="bg-[#ff5c58] w-[100vw] h-[100vh] text-white p-10">

            <nav className="bg-[#FE8F8F] rounded-xl p-4 flex justify-between">
                <img src={logo} alt="website logo" className="w-50 h-10"/>
                <ul className="flex">
                    <li className="mr-10 text-xl"><a href="">HOME</a></li>
                    <li className="mr-10 text-xl"><a href="">LATEST</a></li>
                    <li className="mr-8 text-xl"><a href="">TESTIMONIALS</a></li>
                    <li className="mr-5 text-xl text-[#FE8F8F]"><a href=""><button className="rounded-full bg-white px-5 py-1 font-medium">SUBSCRIBE</button></a></li>
                </ul>
            </nav>

            <div className="flex gap-4">
                <div className="flex-1 mt-48">
                    <h1 className="text-7xl break-normal ">We Provide Latest Music</h1>
                    <p className="mt-7 text-3xl">A destination for music fans to discover new <span className="font-bold">Music</span></p>

                    <form className="mt-10">
                        <div className="flex mt-2 w-full">
                            <input type="text" placeholder="Your Email" className="p-4 border border-[#ff5c58] rounded-l-full py-3 italic focus:ring-2"/>
                            <button className="p-2 bg-[#FE8F8F] rounded-r-full font-bold">Subscribe</button>
                        </div>
                    </form>
                </div>



                <div className="flex-1 mt-10">
                    <img src={banner} alt="banner-img" className="w-96 h-96"/>
                    <iframe src="https://audiomack.com/embed/shallipopi/song/ex-convict" scrolling="no" scrollbars="no" frameborder="0" className="w-96 h-60"></iframe>
                </div>
            </div>

        </header>
     );
}
 
export default Header;