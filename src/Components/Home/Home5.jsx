import React, { useRef, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home5() {
    
    let data=[
        {
            img:'https://www.renoassistance.ca/wp-content/uploads/2018/03/massotherapy-room-physiotherapy-clinic.jpg',
            title:"Vt Road Mansarovar"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.EPtI5MtABx2UU5IIcalFQgHaE7&pid=Api&P=0&h=180',
            title:"Vijay Path"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.TIReCHFLcyusbKKpD88U0AHaD7&pid=Api&P=0&h=180',
            title:"Lal Kothi"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.topsOtDokT_Sp6bkUrghmgHaFR&pid=Api&P=0&h=180',
            title:"Gandhi Nagar"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.RklfEkDAELFOacIxU_18wAHaEu&pid=Api&P=0&h=180',
            title:"Tonk Phatak"
        },

    ]

    
    const sliderRef = useRef();

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     slider.slickPlay(); // Auto play the slider when component mounts
    //     return () => {
    //         slider.slickPause(); // Pause the slider when component unmounts
    //     };
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
                <h3 className='display-4 fs-2' >ADVANCED PHYSIOTHERAPY CLINICS</h3>
                <p className='lead text-secondary fs-6 '>With expertise, our Clinics are equipped with latest approved technologies in healing & rehabilitation to ensure that you get the best care.</p>
            </div>
             <div className='container d-flex justify-content-center align-items-center'>
                <div className='slider ' style={{width:'80vw'}} >
                <Slider ref={sliderRef} {...settings}>
                    {data.map((d)=>{
                        return (
                        <div className='  p-5 ' >
                
                            <div  className=''>
                                <img src={d.img} alt="" style={{border:'2px solid #7FFFD4',borderRadius:'3px',width:'300px',height:'250px'}} />
                            </div>
                            <div className='card' style={{width:'300px',minHeight:'50px',backgroundColor:'#7FFFD4'}}>
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
export default Home5

