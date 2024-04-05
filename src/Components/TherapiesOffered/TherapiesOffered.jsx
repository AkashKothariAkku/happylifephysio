import React, { useEffect,useState } from 'react'
import axios from 'axios';


function TherapiesOffered() {

    let url = "http://cbphysiotherapy.000.pe/therapies_api.php";
    const [data, setData] = useState(null)
    useEffect(()=>{
      fetchdata()
    },[])
    const fetchdata = async()=>{
      try{
        // const response = await axios.get(url);
        // setData=response
        // console.log(data)
        const  response =await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok');
      }
        const  json = await response.json();
        setData(json)
        console.log(json)
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
    }
        
    
  return (
    <div>
         <div>
            {data ? (
                <div>
                    {data.id}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
      
    </div>
    // <>
    // <div className='row'>

    // <div id='1' className='bg-danger col-lg-3 m-4'>hello</div>
    // <div id='1' className='bg-danger col-lg-3 m-2'>1 am </div>
    // <div id='1' className='bg-danger col-lg-3 m-4'>working</div>
    // </div>
    // </>
  )
}

export default TherapiesOffered
