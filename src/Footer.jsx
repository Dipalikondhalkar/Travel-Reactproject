import React from 'react'

const Footer = (props) => {
    const Fotdata=props.newdata;
  return (
    <>
    <footer className="footercolor"> 
     <div className="container">
        {
            <div className="row  mx-auto p-5 ">
                {
                Fotdata.map((p)=>{
                return(
                    <>
                   
                    <div className=" col-md-3 mt-2" >
                        <p style={{'fontFamily':"Quicksand",'textTransform':'uppercase'}}>{p.title}</p>
                        <div style={{'fontFamily':"Quicksand",'textTransform':'uppercase'}}>
                            <a href="#" className="text-decoration-none dest"><p>{p.title1}</p></a>
                            <a href="#" className="text-decoration-none dest"><p>{p.title2}</p></a>
                            <a href="" className="text-decoration-none dest"><p>{p.title3}</p></a>
                            <a href="" className="text-decoration-none dest"><p>{p.title4}</p></a>
                            <a href="" className="text-decoration-none dest"><p>{p.title5}</p></a>
                        </div>
                        
                    </div>
                   
                   </>
                    )
                 })
             }
            </div>
        }  
     </div>
     </footer>
    </>
  )
}

export default Footer
