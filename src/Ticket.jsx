import React from 'react'

const Ticket = () => {
  return (
    <>
    <div>
      <div className="Ticketbg">
        <section className=' container ticketsize p-4'>
                <div className='text-white'>
                    <p className='ticketname fs-1 '>Tickets</p>
                    <p className='fs-5'>Book your next trip, start your journey by getting tickets for flights, trains, buses, cruises or rent a car.</p>
                </div>
                <div>
                  <form  className='container border border-2 border-light formborder ' >
                        <label>From</label>
                          <select class="form-select">
                          <option>Ireland</option>
                          <option>pune</option>
                          <option>Mumbai</option>
                          <option>Nagpur</option>
                          </select>

                        <label>To</label>
                        <select class="form-select">
                        <option>Nagpur</option>
                        <option>Nagpur</option>
                        <option>Mumbai</option>
                        <option>pine</option>
                        </select> 

                        <label for="name" class="form-label">From</label>
                        <input type="date" id="name" placeholder="Enter your name" class="form-control"/>

                        <label for="name" class="form-label">Until</label>
                        <input type="date" id="name" placeholder="Enter your name" class="form-control"/>

                        <div>
                        <label className='mt-2'>Type</label>
                        <input type="radio" name="trip"/>
                        <label class="form-check-label">One way</label>
                        <input type="radio" name="trip"/>
                        <label class="form-check-label">Round trip</label>
                        </div>
                      
                        <label className='mt-2'>Passenger</label>
                            <select class="form-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select> 

                            <button class="btn  m-5 btn-outline-light ms-1">Search Flight</button>

                           
              </form>
              
                  
                </div>
           </section>
      </div>
    </div>
  
    </>
  )
}

export default Ticket
