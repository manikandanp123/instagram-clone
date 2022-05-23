import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
    let [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
    let [pass, setPass] = useState(false);
    let navigate=useNavigate();

    function changeHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function passChange(e) {
        if (pass) {
            setPass(false);
        } else {
            setPass(true);
        }
    }
    async function submitHandler(e) {
        e.preventDefault();
        console.log(user);
        for (let each in user) {
            if (!user[each]) {
                alert("Enter all details");
            }
        }
        let res=await axios.post("http://localhost:5000/register",user);
        console.log(res.data);
        // console.log(res.data.success);
        // console.log(res.data.message);

        if(res.data.success){
            alert(res.data.message);
            navigate("/");
        }else{
            alert(res.data.message);
            window.location.reload(false);
        }
    }
    return (
        <div className="reg">
            <h1 className="headlog">Instagram</h1>

            <form>
                <label for="name">Name:</label><br />
                <input name="name" value={user.name} type='text' onChange={changeHandler} placeholder='Enter your name' /><br />
                <label for="email">Email:</label><br />
                <input name="email" value={user.email} type='text' onChange={changeHandler} placeholder='Enter your email' /><br />
                <label for="phone">Phone Number:</label><br />
                <input name="phone" value={user.phone} type='text' onChange={changeHandler} placeholder='Enter your phone no.' /><br />
                <label for="password">Password:</label><br />
                <input name="password" value={user.password} type={pass ? "text" : "password"} onChange={changeHandler} placeholder='Enter your password' />
                <span className="sh1">{pass ? <span onClick={passChange}> Hide</span> : <span onClick={passChange}> Show</span>} </span> <br />
                <p>Already have an account? <Link to='/'>Login</Link> </p>
                <input type='submit' className="btn" onClick={submitHandler} value={'Register'} />
            </form>
        </div>

    )
}

export default Register;