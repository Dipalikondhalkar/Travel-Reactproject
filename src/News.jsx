import React from 'react'

const News = (props) => {
    const newNews=props.Details;
  return (
    <>
    <div className='text-center p-5 '>
      <h1 className="newshead">News</h1>
      <h6 style={{'fontSize':'20px'}}>Editorials of our staff members traveling through the world, share your experience and be part of our news portal. Places which our agency focuses more on, these are our main destinations.</h6>
    </div>
    <div className="row container mx-auto">
        {
            
            newNews.map((p)=>
            {
                return(
                    <>
                    {/* <div className="row"> */}
                        <div className="col-md-4 p-3 p-lg-3">
                          <div className="border ">
                          <a href="#"><img src={p.img} alt=" img" className="img-fluid " /></a>
                            <a href="#" className="text-decoration-none text-black "><h4 className="p-2">{p.news}</h4></a>
                            <h6 className='p-1'  style={{'fontSize':'17px','fontFamily':'Quicksand','color':'#666666'}}>{p.Ndescription}</h6>
                            <h6 className='p-1' style={{'fontSize':'17px','fontFamily':'Quicksand','color':'#666666'}}>{p.Date}</h6>
                          </div>
                          
                        </div> 
                    {/* </div>  */}
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default News
