import React, { useEffect, useState } from 'react'
import useFaq from '../../Api/useFaq'



function Faq() {

  const [groupedData, setGroupedData] = useState([])
  const data = useFaq()


  useEffect(() => {
    let getdata = data.reduce((groups, item) => {
      const groupKey = item.category_name
      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(item);
      return groups
    }, {})
    setGroupedData(getdata)
  }, [data])

  console.log(groupedData)
  let groupedDataKeys = Object.keys(groupedData)

  return (
    <>
      <div className='main-div'>

        {
          groupedDataKeys.map((title_keys, index) => (
            <section className="py-5 py-md-5 " style={{backgroundColor:' #7FFFD4'}} key={title_keys}>
              <div className="container">
                <div className="row gy-5 gy-lg-0 align-items-lg-center">
                  <h2>{title_keys}</h2>
                  <div className="row justify-content-xl-end">
                    <div className="col-12 col-xl-11">
                      <div className="accordion" id={`accordion-${index}`}>
                        {groupedData[title_keys].map((d, subIndex) => (
                          <div className="accordion-item" key={subIndex}>
                            <h2 className="accordion-header" id={`heading-${index}-${subIndex}`}>
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}-${subIndex}`} aria-expanded="false" aria-controls={`collapse-${index}-${subIndex}`}>
                                {d.question}
                              </button>
                            </h2>
                            <div id={`collapse-${index}-${subIndex}`} className="accordion-collapse collapse" aria-labelledby={`heading-${index}-${subIndex}`} data-bs-parent={`#accordion-${index}`}>
                              <div className="accordion-body">
                                {d.answer}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))
        }
      </div>
    </>
  )
}

export default Faq
