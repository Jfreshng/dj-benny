import axios from "axios";
import { useEffect, useState } from "react";

const Latest = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false)
    const [errMsg, setErrorMsg] = useState(null);


    const [musicCount, setMusicCount] = useState(4);
    const [isHidden, setIsHidden] = useState('hidden');
    const [togMe, setTogMe] = useState(null);

    const viewAll = (x) => {
        setMusicCount(x);
        setIsHidden(' ');
        setTogMe('hidden');
    }

    const showLess = (x) => {
        setMusicCount(x);
        setTogMe('');
        setIsHidden('hidden');
    }


    // useEffect(()=> {
    //     const apiUrl = 'https://api.audiomack.com/v1';

    //     axios.get(apiUrl, {
    //         headers: {
    //             'Authorization': 'xyz'
    //         }
    //     })
    //     .then (res => {
    //         console.log(res.data);
    //         setTracks(res.data)
    //         setLoading(false);      //at this point data would have been fetched
    //     })
    //     .catch (error => {
    //         console.log("Error fetching the tracks: ", error);
    //         setLoading(false);
    //         setErr(true);
    //         setErrorMsg('cannot fetch Tracks');
    //     });
    // }, []);

    return ( 
        <div className="flex flex-col justify-center text-center">
            <h2 className="text-5xl font-bold latest my-5">Latest Mix</h2>

            {/* fetch music from API */}
            {/* { loading && <div>Loading....</div> }
            { !err  && <div>{ err }</div>} */}

            {/* actuall tracks */}
            <div className="sm:flex-col sm:mx-auto lg:flex lg:flex-wrap mt-12 lg:justify-center lg:items-center">
                {Array.from({ length: musicCount }).map((_, index) => (
                    <div className="w-1/2"><iframe src="https://audiomack.com/embed/shallipopi/song/ex-convict" key={ index } scrolling="no" scrollbars="no" frameborder="0" className="w-96 h-60 w-80  mx-auto my-3"></iframe></div>
                ))}
            </div>
            <button onClick={()=> {viewAll(10)}}  className={`border border-[#ff5c58] rounded-full py-1 font-semibold text-xl mx-auto my-10 px-10 ${togMe}`}>View All</button>
            <button onClick={()=> {showLess(4)}}  className={`border border-[#ff5c58] rounded-full py-1 font-semibold text-xl mx-auto my-10 px-10 ${isHidden}`}>Show Less</button>
        </div>
     );
}
 
export default Latest;