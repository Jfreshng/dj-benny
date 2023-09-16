const NewsLetter = () => {
    return ( 
        <div className="sm:flex-col sm:justify-center flex flex-wrap lg:justify-between columns-2  gap-8 my-48">
            <div className="text-center lg:text-start">
                <h2 className="text-[#ff5c58] text-4xl font-bold">Sign Up To Newsletter</h2>
                <p className="text-sm">Subscribe to receive info on our latest news and episodes</p>
            </div>

            <div>
                <form className="sm:mx-auto lg:text-end">
                    <div className="flex mt-2 w-full">
                        <input type="text" placeholder="Your Email" className="p-2 border border-[#ff5c58] rounded-l-full py-1 italic focus:ring-2"/>
                        <button className="text-white p-2 bg-[#ff5c58] rounded-r-full font-bold">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default NewsLetter;