import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { LiaLifeRingSolid } from "react-icons/lia";

function About3() {

    const data=[
        {
            id:1,
            img:<FaRegIdCard/>,
            title:"+ 500 Practitioners",
            desc:"CBP has a strong network of over 500 physiotherapists/chiropractors enrolled through a structured empanelment criterion."
        },
        {
            id:2,
            img:<LiaLifeRingSolid />,
            title:"Integrated Approach",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate exercitationem quam excepturi placeat veniam officia"
        },
        {
            id:3,
            img:<FaRegCalendarAlt />,
            title:"Treatment scheduling",
            desc:"Instant confirmation of clinic appointment & home visit is confirmed within 30 mins. We try our best to not change a physio for ongoing treatments.",
        },
        {
            id:4,
            img :<BsHeadset />,
            title:"Always Listening",
            desc:"Continuous monitoring of treatment progress with feedback & Counseling calls. Pro-active grievance redressal to ensure a smooth path to your recovery.",
        },
        {
            id:5,
            img :<MdPayment />,
            title:"Payments",
            desc:"Transparent Pricing with friendly packages for long term treatments. Option to pay through cash, card or online withinsurance re-imbursement friendly billing."       
            
        },
        {
            id:6,
            img :<MdOutlineMessage />,
            title:"12*7 Support",
            desc:"Help is just a text Away. 12*7 support on WhatsApp for any query or concern for your new appointment sorfor an ongoing physio treatment.",
        },
    ]

  return (
    <div className='main-div p-5'>
        <div className='container'>
            <div> 
            <h2 className='display-4 fs-2' >Why Choose Happy Life</h2>
                <h4 className='lead text-secondary fs-5 '>Treatment that blends Competence with Compassion</h4>
            </div>

      <div className='row '>
        {
            data.map((ele)=>{
                return (
                    <>

                    <div className="col-lg-4 col p-3 "  >
                    <div className=' p-2 h-100 w-100 zoom' style={{backgroundColor:'white',border:'2px solid green',boxShadow:'1px 2px 5px 3px gray'}}>
                        <div className=''>
                        {ele.img}
                        </div>
                    <h2 className='display-4 fs-2' >{ele.title}</h2>
                <p className='lead text-secondary fs-5 '>{ele.desc}</p>
                    </div>
                    </div>
                    </>

                )

            })
        }
      </div>
        </div>
    </div>
  )
}

export default About3
