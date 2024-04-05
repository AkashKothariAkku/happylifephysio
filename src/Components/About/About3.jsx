import React from 'react'

function About3() {

    const data=[
        {
            id:1,
            title:"+ 500 Practitioners",
            desc:"CBP has a strong network of over 500 physiotherapists/chiropractors enrolled through a structured empanelment criterion."
        },
        {
            id:2,
            title:"Integrated Approach",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate exercitationem quam excepturi placeat veniam officia"
        },
        {
            id:3,
            title:"Integrated Approach",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate exercitationem quam excepturi placeat veniam officia"
        },
        {
            id:4,
            title:"Integrated Approach",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate exercitationem quam excepturi placeat veniam officia"
        },
        {
            id:5,
            title:"Integrated Approach",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate exercitationem quam excepturi placeat veniam officia"
        },
        {
            id:6,
            title:"Integrated Approach",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate exercitationem quam excepturi placeat veniam officia"
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
                    <div className=' p-2 h-100 w-100 zoom' style={{backgroundColor:'white',border:'2px solid green',boxShadow:'2px 2px 3px 3px green'}}>
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
