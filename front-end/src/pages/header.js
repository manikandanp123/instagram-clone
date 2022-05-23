import React from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";

const Header = () => {
    let navigate=useNavigate();
    function logOut(){
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <header className='top'>
            {/* <BsFillRecordCircleFill className='circle' /> */}
            <Link to='/post/allposts'> <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="photo" className="circle" /></Link>
            <Link to='/post/allposts'> <span className='insta'>Instagram</span></Link>
            <Link to='/post/myposts'> <button className='mypost'>My Posts</button></Link>
            <Link to='/post/addposts'> <AiFillCamera className='camera' /></Link>
            <button className="btnout" onClick={logOut} >Log out</button>
        </header>
    )
}

export default Header;