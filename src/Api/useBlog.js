import {useEffect,useState} from "react"

function useBlog(){
    const [data,setData] = useState([])
    const url = "https://happylifephysio.000webhostapp.com/blog_api.php"
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((fetched_data)=>setData(fetched_data))
    },[])
    return data
}

export default useBlog