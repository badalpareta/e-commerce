
import './About.css'

let About=()=>{
return(<div className="about-us">
    {/* <object type="image/svg+xml"id="about-img" data={AboutImage}/> */}
    {/* <AboutImage style={{height:'calc(100vh - 150px)'}}/> */}
    <img src="https://svgshare.com/i/fr9.svg" id="about-img"alt="" />
    <div className="under-construction">
        <div>
        <h1>Business</h1>
        <h1>Landing Page</h1>
        </div>
     
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque repudiandae ipsam sunt maxime voluptatem, a eveniet harum porro ducimus reprehenderit vero at atque consectetur voluptate repellat accusamus voluptatum.</p>
        <button id="about-btn">Visit Again Soon</button>
        </div>
    </div>)
}
export default About