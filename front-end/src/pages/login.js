import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import './style.css';
import axios from "axios";


const Login = () => {
    let [user, setUser] = useState({emailORphone:"",password: "" });
    let [pass, setPass] = useState(false);
    let navigate=useNavigate();

    function changeHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function passChange(e){
        if(pass){
            setPass(false);
        }else{
            setPass(true);
        }
    }
    async function submitHandler(e){
        e.preventDefault();
        console.log(user);
        for(let each in user){
            if(!user[each]){
                alert("Enter all details");
            }
        }
        let res=await axios.post("http://localhost:5000",user);
        console.log(res.data);
        // console.log(res.data.success);
        // console.log(res.data.message);

        if(res.data.success){
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("username",res.data.username);
            alert(res.data.message);
            navigate("/post/allposts");
        }else{
            alert(res.data.message);
            window.location.reload(false);
        }
    }
    return (
        <div>
            <div className="login">
                <div>
                    <img className="img-log" src="https://images.unsplash.com/photo-1595039838779-f3780873afdd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="photo" />
                </div>
                <div className="logfull">
                    <h1 className="headlog">Instagram</h1>
                    <form>
                        <input name="emailORphone" value={user.emailORphone} type='text' onChange={changeHandler} placeholder='Enter your email/phone' /><br />

                        <input name="password" value={user.password} type={pass ? "text" : "password"} onChange={changeHandler} placeholder='Enter your password' />
                        
                        <span className="sh">{pass ? <span onClick={passChange}> Hide</span> : <span onClick={passChange}> Show</span>} </span> <br />
                        <p>Don't have an account? <Link to='/register'>Register</Link> </p>
                        <input type='submit' onClick={submitHandler}  className="btn" value={'Log In'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;