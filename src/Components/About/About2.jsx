import React, { useRef, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function About2() {
    
    let data=[
        {
            img:'https://www.renoassistance.ca/wp-content/uploads/2018/03/massotherapy-room-physiotherapy-clinic.jpg',
            title:"Member_1"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.EPtI5MtABx2UU5IIcalFQgHaE7&pid=Api&P=0&h=180',
            title:"Member_2"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.TIReCHFLcyusbKKpD88U0AHaD7&pid=Api&P=0&h=180',
            title:"Member_3"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.topsOtDokT_Sp6bkUrghmgHaFR&pid=Api&P=0&h=180',
            title:"Member_4"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.RklfEkDAELFOacIxU_18wAHaEu&pid=Api&P=0&h=180',
            title:"Member_5"
        },

    ]

    
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
        <section className='main-div'>

        <div className='my-4'>
            <div className='container '>
                <h2 className='display-4 fs-2' >Our Team</h2>
                <h4 className='lead text-secondary fs-5 '>Leadership team with expertise in healthcare & technology</h4>
            </div>
             <div className='container d-flex justify-content-center align-items-center'>
                <div className='slider ' style={{width:'80vw'}} >
                <Slider ref={sliderRef} {...settings}>
                    {data.map((d)=>{
                        return (
                        <div className='  py-5 ps-4 ' >
                
                            <div  className=''>
                                <img src={d.img} alt="" style={{border:'2px solid #48D1CC',borderRadius:'3px',width:'300px',height:'250px'}} />
                            </div>
                            <div className='card' style={{width:'300px',minHeight:'50px',backgroundColor:'#48D1CC'}}>
                                <p className='font-semibold' style={{borderRadius:'3px',padding:'5px'}}>{d.title}</p>
                            </div>
                        </div>
                        )
                      })}
                    </Slider>

                </div>
            </div> 
                
        </div>
        </section>
        

    </>
    )
}
export default About2

