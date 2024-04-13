import React from 'react'
import { useParams } from 'react-router-dom'

function SymptomsDetail() {
    const {id} = useParams()
    const data = useApi()

  return (
    <div className='main-div'>
            {
        data.map((d)=>{
          if (d.title == id){
            return(
              <>
              <div className=' p-4'>
                <img src={d.image_url} alt="..." />
                <h2>{d.title}</h2>

              </div>
              <div>
                <h1 className='fw-bold py-3'>Questions</h1>
                {

                  d.qa_data.map((qa)=>{
                    return(

                      <>
                      <div className='container'>

                    <h5 className="p-4" style={{backgroundColor:'#7FFFD4'}}>{qa.question}</h5>
                    <p className="p-4" style={{backgroundColor:'White'}}>{qa.answer}</p>
                      </div>
                    </>
                    )
                  })
                }
              </div>

              </>
            )
          }
        })
        
      }
    </div>
  )
}

export default SymptomsDetail

