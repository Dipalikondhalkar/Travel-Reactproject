import React from 'react'

const Booking = (props) => {
    const newbook=props.bdata
  return (
    <div>
        <>
       <div >
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711153738!2d73.78056550826552!3d18.524598599535633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715419745728!5m2!1sen!2sin" allowfullscreen="" style={{width:'100%',height:'400px'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       <section className="container">
       <div className="row mt-5 text-center">
        {
            newbook.map((p)=>
            {
                return(
                    
                        <div className="col-md-3">
                                <p >{p.icon}</p>
                                <h3>{p.desc}</h3>
                                <p style={{'color':'#666666'}}>{p.para}</p>
                        </div>
                   
                    
                )
            })
        }
         </div>
       </section>
       <section style={{'backgroundColor':'aliceblue'}}> 
       <div className='container mt-5'>
            <h2 className='p-3'>Book your next trip</h2>
            <p style={{'color':'#666666'}} className='p-3'>Start booking your trip by filling the forms below, call us or visit us at our offices.</p>
            <div className='row '>
                <div className='col-md-8'>
                    <form className='container'>
                      <div className='d-flex justify-content-evenly'>
                        <input type="text" id="name" placeholder="Name" class="form-control inputize"/>
                        <input type="Email" id="name" placeholder="Email" class="form-control inputize"/>
                      </div>
                      <div className='mt-4'>
                      <input type="text" id="name" placeholder="Destination" class="form-control"/>
                      </div>
                      <div className='form-group mt-4'>
                      <textarea name="" className='form-control' placeholder='Mesage'></textarea>
                      </div>
                     
                      <button className="btn  m-5 btn-outline-info ms-1">Search Flight</button>
                    </form>
                </div>
                <div className='col-md-4'>
                    <div>
                            <h6>Visit us at:</h6>
                            <h6 style={{'color':'#666666'}}>Unit 1090, 122 The Street,</h6>
                            <h6 style={{'color':'#666666'}}> Westfield Stratford City, Montfichet Road,</h6>
                            <h6 style={{'color':'#666666'}}>London E20 1EN, United Kingdom</h6>
                    </div>
                    <div className='mt-4'>
                          <h6>Working Hours:</h6>
                          <h6 style={{'color':'#666666'}}>Monday — Friday (08:00 — 17:00)</h6>
                          <h6 style={{'color':'#666666'}}>Saturday (09:00 — 15:00)</h6>
                    </div>
                    <div className='mt-4 '>
                        <h6>Or ring our phones:</h6>
                        <div><a href="#" className='text-decoration-none'>+44 20 3457 5495</a><span style={{'color':'#666666'}}>(US)</span></div>
                        <div><a href="#" className='text-decoration-none'>+353 1 878 3944 </a><span style={{'color':'#666666'}}>(Ireland)</span></div>
                    </div>
                </div>
            </div>
       </div>
       </section>
       </>
    </div>
  )
}

export default Booking
