import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../Api/useApi';

const TherapiesOffered = () => {
  const navigate = useNavigate();
  const data = useApi()
  const handleClick = (id) => {
    navigate(`/therapiesoffered/${id}`);
  }

  return (
    <>
    <div className='main-div'>
      <h2 className='py-3 mt-4' style={{backgroundColor:'#7cb683'}}>Therapies Offered</h2>
      <div className="row d-flex justify-content-center align-items-center py-4">
      {
        data.map((d) => {
          if(d.category_name==="Therapies Offered" ){
          return (
              <div className="card col-lg-3 col-md-3 p-4 m-2" style={{width: "22rem"}} id={d.id} key={d.id}>
                <img src={d.image_url} className="card-img-top" style={{height: "14rem"}} alt="..." />
                <div className="card-body" style={{height: "14rem"}}>
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.description}</p>
                </div>
                <hr />
                  <button className='btn btn-success' onClick={()=>handleClick(d.title)}>Read More</button>
              </div>
          )
        }
        })}
        </div>
    </div>
    </>
  );
}

export default TherapiesOffered;































// import React from 'react';

// const TherapiesOffered = () => {
//   const handleClick = (e) => {
//     const id = e.target.id;
//     if (id) {
//       window.location.href = `/Therapy/${id}`;
//     }
//   };

//   return (
//     <div className='row' id="box" onClick={handleClick}>
//       <div id='1' className='bg-danger col-lg-3 p-4 m-2'>hello</div>
//       <div id='2' className='bg-danger col-lg-3 p-4 m-2'>1 am</div>
//       <div id='3' className='bg-danger col-lg-3 p-4 m-2'>working</div>
//     </div>
//   );
// }

// export default TherapiesOffered;





















