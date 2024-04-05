import React, { useRef, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home4() {
    
    let data=[
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.yDLnrwRy7U5kICVAAAbhUQHaE8&pid=Api&P=0&h=180',
            title:"Sports Therapist"
        },
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.fwpwTG_FgrmXrHUgWUTedgHaE8&pid=Api&P=0&h=180',
            title:"Home Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.LJqZBcaqRyUauwi3S7L80gHaE8&pid=Api&P=0&h=180',
            title:"Chiropractor"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.EPtI5MtABx2UU5IIcalFQgHaE7&pid=Api&P=0&h=180',
            title:"Physiotherapy Clinic"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.0ECPOeeV6WxZ-AUQWxOa4wHaE8&pid=Api&P=0&h=180',
            title:"Physiotherapist"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.d9oF0c1cqdRt-jk36Xa5wgHaE8&pid=Api&P=0&h=180',
            title:"Tele Physiotherapist"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.yV9jC593Qv1hjift7erP8AHaFZ&pid=Api&P=0&h=180',
            title:"Sports Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.GK1w3npzOu-kp6_tFfLhiQHaHA&pid=Api&P=0&h=180',
            title:"Ortho Physiotherapist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.IUm3U_0JY5uU_R8lYsN6EAHaE8&pid=Api&P=0&h=180',
            title:"Neuro Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.yqgtodUVI7XsXaFN1b6ucwHaFl&pid=Api&P=0&h=180',
            title:"Ergonomics Specialist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.XavjndVhPXTT6x3xH8r4EgHaEK&pid=Api&P=0&h=180',
            title:"Women's Health Therapist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.QfZda-RK8H1Lx0LJJ-GCpQHaE8&pid=Api&P=0&h=180',
            title:"Pediatric Physiotherapist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.qTgR4pfs9J9TPnGzDuK-ZAHaE5&pid=Api&P=0&h=180',
            title:"Geriatric Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.AWDR7kdSQRedMi6gqZ9FOwHaE8&pid=Api&P=0&h=180',
            title:"Sports Massage Therapist"
        },
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.P72vdi5ppQw45COLzbA9ugHaE8&pid=Api&P=0&h=180',
            title:"Cardio Respiratory Physiotherapist"
        },
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.0mzAMWejmbTl6uGu98AFzgHaE8&pid=Api&P=0&h=180',
            title:"Vestibular Rehabilitation (vrt)"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.X7XvdjtgJbx2tMwGu4DxvQHaE8&pid=Api&P=0&h=180',
            title:"Pre And Post Surgery Rehabilitation"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.5A_rGsHdlqgj087GVcVOjQHaE8&pid=Api&P=0&h=180',
            title:"Spinal Injury Physio"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.lZWrXofrrWkFLtqFLcMyLQHaE8&pid=Api&P=0&h=180',
            title:"Strength Training Specialist"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.spfaIWhCVsZqzNgLBgOD2QHaE8&pid=Api&P=0&h=180',
            title:"Advanced Physiotherapy"
        },
    ]

    
    const sliderRef = useRef();

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     if (slider){

    //         slider.slickPlay(); // Auto play the slider when component mounts
    //         return () => {
    //             slider.slickPause(); // Pause the slider when component unmounts
    //         };
    //     } 
    // }, []);

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
                <h3 className='display-4 fs-2'  >THOROUGHLY VETTED EXPERTS</h3>
                <p className='lead text-secondary fs-6'>Whether you need physiotherapy at home or in-clinic treatment, our licensed & highly trained Physiotherapists / Chiropractors ensure that you receive the highest quality care.

</p>
            </div>
             <div className='container d-flex justify-content-center align-items-center container-fluid'>
                <div className='slider w-100'   >
                <Slider ref={sliderRef} {...settings}>

                    {data.map((d)=>{
                        return (
                            <div className='  p-5 ' >
                
                            <div  >
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
export default Home4

