import { Route, Link, Routes} from "react-router-dom"
 import Travel from "./Travel"
import Destination from "./Destination"
import News from "./News"
import Ticket from "./Ticket"
import Booking from "./Booking"
import Footer from "./Footer"
import './style.css'
function App() {
 //travel hero data 
const Herodata=[
  {
    title1:"Dalmatian coast",
    title2:"Walking Through Dubrovnik walls",
    dubro:"Explore Dubrovnik"
  }
]

//News data
const Newsdata=[
 {
  img:"./images/background/news1.jpg",
  news:"Discovering civilizations of the Middle East",
  Ndescription:"Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no is many both. Recommend new contented intention improving bed performed age.",
  Date:"JUNE 13, 2017"
 },
 {
  img:"./images/background/news2.jpg",
  news:"Walking through ancient walls of Dubrovnik",
  Ndescription:"Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk. Last own loud and knew give gay four. Sentiments motionless or principles preference excellence am.",
  Date:"JUNE 9, 2017"
 },
 {
  img:"./images/background/news3.jpg",
  news:"Crystal clear water of the Mediterranean",
  Ndescription:"Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated.",
  Date:"JUNE 6, 2017"
 },
 {
  img:"./images/background/news4.jpg",
  news:"Into the streets of Marrakech, Morocco",
  Ndescription:"Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire an chatty to. By in no ecstatic wondered disposal my…",
  Date:"MAY 28, 2017"
 },
 {
  img:"./images/background/news5.jpg",
  news:"Spectacular carnivals of Rio de Janiero",
  Ndescription:"By so delight of showing neither believe he present. Deal sigh up in shew away when. Pursuit express no or prepare replied. Wholly formed old latter future but way she. Day her likewise smallest expenses judgment building man carriage gay. Considered introduced themselves mr to discretion at. Means among saw hopes for. Death mirth in…",
  Date:"MAY 9, 2017"
 },
 {
  img:"./images/background/news6.jpg",
  news:"Incas and the lost civilizations of Peru",
  Ndescription:"Extremity direction existence as dashwoods do up. Securing marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.",
  Date:"JUNE 14, 2017"
 },
 {
  img:"./images/background/news7.jpg",
  news:"Best Christmas markets of Europe",
  Ndescription:"Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all. Built purse maids cease her ham new seven among and.…",
  Date:"MAY 6, 2017"
 },
 {
  img:"./images/background/news8.jpg",
  news:"Top 10 European cities to visit in 2017",
  Ndescription:"Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old. Sometimes strangers his ourselves her depending you boy. Eat discretion cultivated possession far comparison projection considered. And few fat interested discovered…",
  Date:"APRIL 25, 2017"
 },
 {
  img:"./images/background/news9.jpg",
  news:"Nightlife: Parties that should not be missed!",
  Ndescription:"Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described…",
  Date:"MAY 11, 2017"
 }
 
]
//Booking data(part2)
const Bookdata=[
  {
    icon:<i class="bi bi-umbrella fs-1 text-info"></i>,
    desc:"Book a flight",
    para:"Find the best deals for your next flight, high class flight and low cost ticket."
  },
  {
    icon:<i class="bi bi-airplane fs-1 text-info"></i>,
    desc:"Plan your trip",
    para:"Set your plan as a single traveler or in a group, our company will be there."
  },
  {
    icon:<i class="bi bi-journal-arrow-up fs-1 text-info"></i>,
    desc:"Cruise deals",
    para:"Be the captain of your own trip, get the best cruise deals from the system on our site ."
  },
  {
    icon:<i class="bi bi-rocket-takeoff fs-1 text-info"></i>,
    desc:"Tour organizer",
    para:"Organize your travel plan in easy steps, visit magnificent world attractions ."
  }

]

//footer data

const Fdata=[
  {
    title:"link",
    title1:"Destination",
    title2:"Tours",
    title3:"Tickets",
    title4:"Booking",
    title5:"News",
  },
  {
    title:"Destination",
    title1:"GREECE",
    title2:"MEXICO",
    title3:"CROATIA",
    title4:"SPAIN",
    title5:"THAILAND",
  },
  {
    title:"News",
    title1:"Flights",
    title2:"bus lines",
    title3:"CRUISES",
    title4:"railways",
    title5:"FERRIES",
  },
  {
    title:"Information",
    title1:"insurance",
    title2:"visa",
    title3:"document",
    title4:"privacy policy",
    title5:"careers",
  }
]



  return (
    <>
        <div >
                <nav className="border navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand size fs-2 " style={{'color':'#4484CE'}}>Travel</Link>
                            
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navibar">
                            <span>{<i className="bi bi-list text-black fs-2 fw-bold"></i>}</span>
                            </button>
                        <div className="collapse navbar-collapse" id="Navibar">
                            <ul className="navbar-nav mx-auto me-lg-5 fs-6 text-uppercase mt-3 mt-lg-0 w-75  justify-content-evenly ">
                                    <li>
                                        <Link to="/Destination" className="text-decoration-none  dest">Destination</Link>
                                    </li>
                                    <li>
                                        <Link to="/News" className="text-decoration-none dest">News</Link>
                                    </li>
                                    <li>
                                        <Link to="/Ticket" className="text-decoration-none dest">Tickets</Link>
                                    </li>
                                    <li>
                                        <Link to="/Booking" className="text-decoration-none dest">Booking</Link>
                                    </li>
                            </ul>
                        </div>
                    </div>    
                </nav>      
            </div>

       <Routes>
          <Route path="/" element={<Travel New={Herodata} bdata={Bookdata} />}/>
          {/* <Route path="/Home"element={<Home New={Herodata}/>}/> */}
          <Route path="/Destination"element={<Destination/>}/>
          <Route path="/News"element={<News Details={Newsdata}/>}/>
          {/* <Route path="/Footer"element={<Footer Footerdata={Fdata}/>}/> */}
          <Route path="/Ticket"element={<Ticket/>}/>
          <Route path="/Booking"element={<Booking bdata={Bookdata}/>}/>

       </Routes>
        < Footer newdata={Fdata}/>
      {/* <footer>
        <div className="container">
        <div className="row border p-4  justify-content-between ">
          <div className=" col-6 col-md-3">
              <p>Link</p>
              <div><a href="#">Destination</a></div>
              <div><a href="#">Tours</a></div>
              <div><a href="#">Booking</a></div>
              <div><a href="#">Tickets</a></div>
              <div><a href="#">Mews</a></div>
          </div>
          <div className=" col-6 col-md-3">
              <p>Destination</p>
              <div><a href="#">Greece</a></div>
              <div><a href="#">Mexico</a></div>
              <div><a href="#">Caoatia</a></div>
              <div><a href="#">spain</a></div>
              <div><a href="#">thailand</a></div>
          </div>
          <div className=" col-6 col-md-3">
              <p>Tickets</p>
                <div>
                    <div><a href="#">flights</a></div>
                    <div><a href="#">busline</a></div>
                    <div><a href="#">cruises</a></div>
                    <div><a href="#">railways</a></div>
                    <div><a href="#">ferries</a></div>
                </div>  
          </div>
          <div className=" col-6 col-md-3">
          <p>Information</p>
                <div>
                    <div><a href="#">insurance</a></div>
                    <div><a href="#">visa</a></div>
                    <div><a href="#">documents</a></div>
                    <div><a href="#">privacy policy</a></div>
                    <div><a href="#">coreers</a></div>
                </div>
          </div>
        </div>
        </div>
      </footer> */}
      
    </>
  )
}

export default App
