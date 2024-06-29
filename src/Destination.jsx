import React from 'react'

const Destination = () => {
  return (
      <>
      <div className='text-center mt-5'>
      <h1 className="newshead">Destinations</h1>
      <h6 style={{'fontSize':'20px'}}>Places which our agency focuses more on, these are our main destinations.</h6>
      </div>

     <section className='container mb-5'>
    <div className="row mx-auto mt-5">
      <div className="col-md-6 col-lg-4 ">
          <a href="#" className="text-decoration-none ">
            <div className="img1 imgpro">
            <a href="#"  className="text-decoration-none  "><h3 className='Destname'>Greece</h3></a>
            </div>
            
          </a>
          
      </div>
      <div className="col-md-6 col-lg-4  ">
        <a href="#" className="text-decoration-none ">
              <div className="img2 imgpro">
              <a href="#"  className="text-decoration-none  "><h3 className='Destname'>croatia</h3></a>
              </div>
          </a>
      </div>
      <div className="col-md-6 col-lg-4  ">
      <a href="#" className="text-decoration-none ">
            <div className="img3 imgpro">
            <a href="#"  className="text-decoration-none  "><h3 className='Destname'>Italy</h3></a>
            </div>
          </a>
      </div>
      <div className="col-md-6 col-lg-4 mt-5 ">
      <a href="#" className="text-decoration-none  ">
            <div className="img4 imgpro">
            <a href="#"  className="text-decoration-none  "><h3 className='Destname'>Thailand</h3></a>
            </div>
          </a>
      </div>
      <div className="col-md-6 col-lg-4 mt-5">
      <a href="#" className="text-decoration-none">
            <div className="img5 imgpro">
            <a href="#"  className="text-decoration-none  "><h3 className='Destname'>Spain</h3></a>
            </div>
          </a>
      </div>
      <div className="col-md-6 col-lg-4 mt-5">
      <a href="#" className="text-decoration-none  ">
            <div className="img6 imgpro">
            <a href="#"  className="text-decoration-none  "><h3 className='Destname'>Mexico</h3></a>
            </div>
          </a>
      </div>
    </div>
    </section> 
    </>
  )
}

export default Destination
