import React from 'react'

const Travel = (props) => {
    const Newone=props.New;
    const Newone1=props.bdata;
    return (
        <div>
           <div className='bgimg'>
           {
            Newone.map((a)=>{
                return(
                    <>
                      <div className='text-center textpad text-white '>
                          <h5 className="fs-2">{a.title1}</h5>
                          <h1 className=' textsize textw mx-auto'>{a.title2}</h1>
                           <h3 className="button1 mx-auto fs-4 but1">{a.dubro}</h3>
                      </div>
                    </>
                )
            })
    
            }
             </div>
             <section className="container">
                    <div className="row mt-5 text-center">
                        {
                            Newone1.map((p)=>
                            {
                            return(
                                
                                    <div className="col-md-3">
                                            <p>{p.icon}</p>
                                            <h3>{p.desc}</h3>
                                            <p>{p.para}</p>
                                    </div>    
                            )
                            })
                        }
                    </div>
            </section>

            <section className='sizepart2 mt-5'>
                <div className='row'>
                    <div className='col-md-6 p-5'  style={{'backgroundColor':'#efefef '}}>
                        <h2 className='mt-5'>Navagio, Greece</h2>
                        <h2>Chosen as the beach of the year.</h2>
                        <p>Enclosed by cliffs and facing out over azure waters, Navagio Beach in Greece is so picturesque it even comes with its own shipwreck.</p>
                        <p>The strip of beach is accessed only by boat. Regular tours to the beach depart from Porto Vromi to the south, and from Agios Nikolaos and Cape Skinari to the north-east. Boats also arrive from the harbour of Zakynthos city.</p>
                    </div>
                    <div className='col-md-6 '>
                        <img src="./images/illustration/img1.jpg" alt="" className='img-fluid'/>
                    </div>
                </div>
            </section>
            <section className='sizepart2 '>
                <div className='row'>
                    <div className='col-md-6 '>
                        <img src="./images/illustration/img2.jpg" alt="" className='img-fluid'/>
                    </div>
                    <div className='col-md-6 p-5'  style={{'backgroundColor':'#efefef '}}>
                        <h2 className='mt-5'>Magnificent Paris</h2>
                        <h2>Our all time favorite city.</h2>
                        <p>Paris can be seen as the most interesting city of Europe and probably even as one of the most amazing city’s worldwide. People from all over the world travel to Paris to discover and experience this fairy-like city.</p>
                        <p>Paris is the city of love, inspiration, art and fashion. The night scene, the Eiffel tower and the warm atmosphere will make you feel directly at home. Paris has a lot of interesting architecture and museums to offer, and is also a Walhalla for shopaholics.</p>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='text-center'>
                        <h2>Popular Destinations</h2>
                        <p>Places which our agency focuses more on, these are our main destinations.</p>
                </div>

                <div className="row container mx-auto ">
                <div className="col-md-4 col-lg-3 p-4 ">
                        <div className="img1 imgpro"> </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-4 ">
                        <div className="img2 imgpro"> </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-4 ">
                        <div className="img3 imgpro"> </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-4 ">
                        <div className="img4 imgpro"> </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-4 ">
                        <div className="img5 imgpro"> </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-4 ">
                        <div className="img6 imgpro"> </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-4 ">
                        <div className="img1 imgpro"> 
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 p-4 ">
                    <div className="img2 imgpro"> </div>
                    </div>
                 </div>
            </section>
        </div>   
      )
}

export default Travel
