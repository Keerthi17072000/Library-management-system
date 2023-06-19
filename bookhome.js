import { useNavigate } from "react-router-dom";
import Booktable from "./book.table";
import Button from "react-bootstrap/esm/Button";

function Home(){


     const history = useNavigate();

    const userlogout = ()=>{
        localStorage.removeItem("userlogin")
        // localStorage.removeItem("userDetails")
     history("/")
    }

return(
    <>
    <div className="d-flex justify-content-end">
    <Button className="btn-danger me-5 mt-5" onClick={userlogout} >Logout</Button>
    </div>
    
    <Booktable/>
    
    </>
);

}

export default Home;