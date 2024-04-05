import React, { useState } from 'react'



function Accordion10() {
    // const data=[
    //     {
    //         id:1,
    //         question: "What is Integrated Physio Care by CB Physiotherapy",
    //         answer:"Integrated Care Focusses on better Outcomes by using a combination of therapies and delivery models that suit you the best for short term relief as well as long term management of your condition. It Starts with an all-around assessment followed by a personalized treatment program consisting of various types of therapies. Our Efforts Continue after the treatment is over as you would be given an exercise prescription/schedule to be followed at home. Video Library and supported mobile app help in adherence to prescribed exercises and reduce the chances of problem recurrence.",
    //     },
    //     {
    //         id:2,
    //         question: "What are the services Offered by CB Physiotherapy in India?",
    //         answer:"CB Physiotherapy Offers treatments in our partner clincs & Physiotherapy at Home Service ( currently in major metros in India). We Also provide Remote / virtual physiotherapy session. VIrtual Physiotherapy Sessions generally asessment of your condition and then an exercise prescription is given for the same. Home Exercises for managemnt of ortho / neuro conditions is enabled by our mobile app.",
    //     },
    //     {
    //         id:3,
    //         question: "Do you Offer Remote Physiotherapy / VIrtual Physiotherapy to Overseas Patients.",
    //         answer:"Yes, If you are located outside India, you can still avial our remote physiotehrapy services. After booking a remote therapy session. Our team wil schedule a remote therapy session over whatsapp/ gooogle meet / zoom meeting. After the session home exercise sessions will be given or if needed the exercise sessions can be done under the guidance of our physio over video calling.",
    //     },
    // ]


    
  return (
    <>

<section className=" py-3 py-md-5 main-div">
  <div className="container">
    <div className="row gy-5 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6">
        <img className="img-fluid rounded zoom " loading="lazy" src="https://tse4.mm.bing.net/th?id=OIP.bp4YK6RkaRvIaMeQH72D9wHaE7&pid=Api&P=0&h=180" alt="How can we help you?"/>
      </div>
      <div className="col-12 col-lg-6">
        <div className="row justify-content-xl-end">
          <div className="col-12 col-xl-11">
            <h2 className="h1 mb-3">How can we help you?</h2>
            <p className="lead fs-4 text-secondary mb-5">We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    How Do I Change My Billing Information?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>To change your billing information, please follow these steps:</p>
                    <ul>
                      <li>Go to our website and sign in to your account.</li>
                      <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                      <li>Under the "Billing Information" section, click on "Edit."</li>
                      <li>Make your changes and click on "Save."</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How Does Payment System Work?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A payment system is a way to transfer money from one person or organization to another. It is a complex process that involves many different parties, including banks, credit card companies, and merchants.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How Do I Cancel My Account?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>To cancel your account, please follow these steps:</p>
                    <ul>
                      <li>Go to our website and sign in to your account.</li>
                      <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                      <li>Scroll to the bottom of the page and click on "Cancel Account."</li>
                      <li>Enter your password and click on "Cancel Account."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Accordion10
