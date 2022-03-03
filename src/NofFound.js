import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div style={{height: '100vh'}} className="flex flex-col items-center justify-center">
           <h1 className="mb-8" style={{fontSize: '40px'}}>Sorry, Page Not Found</h1>
           <Link to="/"><button>Back to Home</button></Link>
        </div>
     );
}
 
export default NotFound;