import { useState } from 'react';
import useSaveEmail from './useSaveEmail';
import { useHistory } from 'react-router-dom';

const NewsLetter = () => {
    
    const [newMail, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [err, setErr] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [msgTimer, setMsgTimer] = useState('');

    const history = useHistory();    


    const MessageTimeOut = () => {
        setTimeout(()=>{
            setMsgTimer("hidden");
            history.push('/');
        }, 1500);
    }


    const handleSubmit = (e)=>{
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
            history.push('/');
        }).catch(err => {
            setErr(true);
            console.log("Error: ", err.message);
        });
    }
    

    return ( 
        <div className="flex flex-col text-center sm:flex sm:flex-row sm:justify-between sm:columns-1 sm:space-y-4 md:columns-2  gap-8 my-48 md:mx-8" id="subscribe">
            <div className="sm:text-center md:flex lg:text-start">
                <div className="mx-auto">
                    <h2 className="text-2xl text-[#ff5c58] sm:text-2xl md:text-4xl font-bold">Sign Up To Newsletter</h2>
                    <p className="text-sm sm:text-left md:inline-flex md:whitespace-break-spaces">Subscribe to receive info on our latest news and episodes</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex sm:justify-center">
                <form className="mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        { msg && <div className={`bg-green-100 py-2 px-2 my-2 rounded-sm ${msgTimer}`}>Email added successfully</div> }
                        { err && <div className="bg-red-200 border-red-300">{ err }</div> }
                        <div className="flex">
                            <input type="email" placeholder="Your Email" className="p-2 border border-[#ff5c58] rounded-l-full py-1 italic focus:ring-2 text-black" required value={ newMail }
                        onChange={(e) => setEmail(e.target.value)}/>
                            { !isPending && <button className="text-white p-2 bg-[#ff5c58] rounded-r-full font-bold">Subscribe</button> }
                            { isPending && <button className="text-white p-2 bg-[#ff5c58] rounded-r-full font-bold">Adding Mail</button> }
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default NewsLetter;