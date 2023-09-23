import banner from './resources/klipartz 1.png';
import logo from './resources/logo 1.png';
import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    // repeated code this shouldn't be
    const [newMail, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [err, setErr] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [msgTimer, setMsgTimer] = useState('');
    
    const MessageTimeOut = () => {
        setTimeout(()=>{
            setMsgTimer("hidden");
            history.push('/');
        }, 1500);
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        const email = { newMail };

        setIsPending(true);             // make submit button disappear after i click submit

        fetch('http://localhost:8050/emaillist', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(email)
        }).then(()=> {
            console.log('mail added successfully')
            setIsPending(false)         // make button appear after successful submission 
            setMsg(`${email.email} has been added successfully`);
            MessageTimeOut();
        }).catch(err => {
            setErr(true);
            console.log("Error: ", err.message);
        });
    }






    return ( 
        <header className="bg-[#ff5c58] w-[100vw] h-[100vh] text-white p-10" id="#home">

            <nav className="bg-[#FE8F8F] rounded-xl p-4 flex justify-between">
                <img src={logo} alt="website logo" className="w-20 h-5 sm:w-20 sm:h-5 lg:w-36 lg:h-8"/>
                <ul className="flex">
                    <li className="text-xs mr-2 sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl"><Link to="#home" smooth>HOME</Link></li>
                    <li className="text-xs mr-2 sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl"><Link to="#latest" smooth>LATEST</Link></li>
                    <li className="text-xs mr-2 sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl"><Link to="#testimonials" smooth>TESTIMONIALS</Link></li>
                    <li className="text-xs sm:mr-2 lg:mr-10 sm:text-sm lg:text-xl text-[#FE8F8F]"><Link to="#subscribe" smooth><button className="rounded-full bg-white px-1 sm:text-sm sm:px-1 sm:py-0 lg:px-5 lg:py-1 font-medium">SUBSCRIBE</button></Link></li>
                </ul>
            </nav>

            <div className="sm:flex-col gap-4 lg:flex lg:flex-row ">
                <div className="pt-20 sm:pt-0 sm:flex flex-col justify-center text-center lg:text-left lg:w-1/2 sm:mt-48 lg:mt-40">
                    <div className="mx-auto">
                        <h1 className="text-4xl p-2 sm:p-0 sm:text-4xl lg:text-5xl break-normal">We Provide Latest Music</h1>
                        <p className="text-xl sm:text-md sm:mt-2 lg:mt-3 lg:text-xl">A destination for music fans to discover new <span className="font-bold">Music</span></p>

                        <form className="sm:mt-2 lg:mt-5" onSubmit={handleSubmit}>
                        <div className="mx-auto lg:flex mt-2 w-full ">
                            <div className="flex flex-col">
                                { msg && <div className={`bg-green-100 py-2 px-2 my-2 rounded-sm ${msgTimer}`}>Email added successfully</div> }
                                { err && <div className="bg-red-200 border-red-300">{ err }</div> }
                                <div className="flex mx-auto mt-3 sm:mt-2">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="p-1 sm:p-2 lg:p-4 border border-[#ff5c58] rounded-l-full py-2 sm:py-3 italic focus:ring-2 text-black"
                                        required value={ newMail }
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className="p-1 sm:p-2 bg-[#FE8F8F] rounded-r-full font-bold">Subscribe</button>
                                </div>
                            </div>
                        </div>

                    </form>
                    </div>
                </div>



                <div className="flex-1 mt-10 lg:mt-5 sm:flex lg:flex lg:flex-col lg:w-1/2 justify-center">
                    <div className="flex justify-center lg:block lg:mx-auto">
                        <img src={banner} alt="banner-img" className="hidden lg:flex lg:w-96 lg:h-96 sm:w-96 sm:h-72"/>
                        <iframe src="https://audiomack.com/embed/shallipopi/song/ex-convict" scrolling="no" scrollbars="no" frameborder="0" className="sm:mx-auto w-96 h-60"></iframe>
                    </div>
                </div>
            </div>

        </header>
     );
}
 
export default Header;