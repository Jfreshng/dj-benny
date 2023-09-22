import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [mailList, setMailList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data=> {
            setMailList(data);
            setIsLoading(false);
        })
        .catch((err)=> {
            setIsLoading(false);    // there is no point waiting for data again
            setErrMsg(err);
        })
   }, [url]);
}