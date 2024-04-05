import React from 'react'



function Home2() {
  return (
    <>
      <div className='main-div'>
      <div className='container pt-3 pb-3'>
                <h3 className='display-4  fs-2' >360 DEGREE PHYSIO CARE</h3>
                <p className='lead text-secondary fs-6'>We are committed to ensuring that our clients have easy access to our physiotherapy services, whether it's at any of our Clinics or through scheduling a convenient Home visit.</p>
            </div>

      <div className='row d-flex justify-content-center align-items-center py-4'>

          <div className="card col-lg-3 col-md-3  m-2 p-4 " style={{width: '22rem'}}>
            <img src="https://tse1.mm.bing.net/th?id=OIP.iVOnCBBWSPjlxqfeo82Q7gHaEK&pid=Api&P=0&h=180" className="card-img-top " style={{height: '14rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title ">CLINIC TREATMENTS</h5>
              <p className="card-text">High quality physiotherapy care at our CB Physiotherapy Centre near you. Best Treatment for Ortho / Neuro Issues</p>
            </div>
          </div>
          <div className="card col-lg-3 m-2 p-4" style={{width: '22rem'}}>
            <img src="https://tse4.mm.bing.net/th?id=OIP.2zt71lv5oK7DOlZSSZbhiQHaE8&pid=Api&P=0&h=180" className="card-img-top " style={{height: '14rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title ">PHYSIO HOME VISITS</h5>
              <p className="card-text">Home Visits by certified CB Physiotherapists for Patients with mobility issues & for patients looking for convenience</p>
            </div>
          </div>
          <div className="card col-lg-3 m-2 p-4" style={{width: '22rem'}}>
            <img src="https://tse2.explicit.bing.net/th?id=OIP.FuywT3Dp9SzeegGXOjL3bAAAAA&pid=Api&P=0&h=180" className="card-img-top " style={{height: '14rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title ">DIGITAL CARE</h5>
              <p className="card-text">Digital Physio Assistant 'FIZO' for personalized PT exercises at home. Enables affordable & long-term care Mgmt</p>
            </div>
          </div>
        </div>
      </div>



      
      
    </>
  )
}

export default Home2
