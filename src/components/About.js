import Figma from "../assets/Figma.png";
import ReactImg from "../assets/React.png";
import Linkedin from "../assets/Linkedin.png";
import TailwindImg from "../assets/Tailwind.png";
import { Link } from "react-router-dom";

const About = () => {   
    const goTo = (params) => {
        window.open(`https://${params}`);
    }

    return ( 
        <div className="home ">
            <div className="about__title">
            <h1 className="mb-4">HELLO <span style={{color: '#07CA9A'}}>THERE</span>!</h1>
            <p className="caption">Thank you for using <span style={{color: '#212B4E', fontWeight: '600'}}>SHORT</span><span style={{color: '#07CA9A'}}>LINK</span></p>              
            </div>
            <div className="mb-10">
                <p className="about__small mb-5">Tools</p>
                <div className="flex">
                <Link className="cursor-pointer" onClick={() => {goTo('www.figma.com/file/DEnWUXmtE7mVIbIcAFweZr/SHORTLINK?node-id=0%3A1')}}><img src={Figma} style={{height: '48px', width: '48px'}} className="App-Home mr-6" alt="logo" /></Link>
                <Link className="cursor-pointer" onClick={() => {goTo('github.com/AzkaDzaki/SHORTLINK')}}><img src={ReactImg} style={{height: '48px', width: '55px'}} className="App-Home mr-6" alt="logo" /></Link>
                <Link className="cursor-pointer" onClick={() => {goTo('tailwindcss.com/')}}><img src={TailwindImg} style={{height: '48px', width: '48px'}} className="App-Home" alt="logo" /></Link>
                </div>
            </div>    
            <div>
                <p className="about__small mb-5">Author</p>
                <Link className="cursor-pointer" onClick={() => {goTo('www.linkedin.com/in/azka-dzaki-arrazzaq/')}}><img src={Linkedin} style={{height: '48px', width: '48px'}} className="App-Home mr-6" alt="logo" /></Link>            
            </div>
        </div>
     );
}
 
export default About;