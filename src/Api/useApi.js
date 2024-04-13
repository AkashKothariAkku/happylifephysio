import {useEffect,useState} from "react"

function useApi(){
    const [data,setData] = useState([])
    const url = "https://happylifephysio.000webhostapp.com/therapies_api.php/"
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((fetched_data)=>setData(fetched_data))
    },[])
    return data
}

export default useApi