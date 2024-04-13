import React, { useEffect, useState } from 'react'
import useApi from '../../Api/useApi'
import { useNavigate } from 'react-router-dom'

function ServicesOffered() {
    const navigate = useNavigate()
    const data = useApi()
    const handleClick = (id)=>{
        navigate('/servicesoffered/' + id)
    }
  return (
    <div className='main-div'>
        <h2 className='py-3 mt-4' style={{backgroundColor:'#7cb683'}}>Services Offered</h2>
        <div className='row d-flex justify-content-center align-items-center py-4 '>
        {
            data.map((d)=>{
                if(d.category_name==="Services Offered" ){
                    return(
                        <>
                            <div className="card col-lg-3 col-md-3 m-2 p-4" style={{width:'22rem'}} key={d.id}>
                                <img src={d.image_url} className='card-img-top' style={{height:'14rem'}} alt="..." />
                                <div className="card-body" style={{height:'14rem'}}>
                                    <h3 className='card-title'>{d.title}</h3>
                                    <p className='card-text'>{d.description}</p>

                                </div>
                                <hr />
                                <button className="btn btn-success" onClick={()=>handleClick(d.title)}>Read More</button>
                        </div>
                        </>
                    )
                }
            })
        }
        </div>
      
    </div>
  )
}

export default ServicesOffered

