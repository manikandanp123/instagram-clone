import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./header";

const Addposts = () => {
    let [user, setUser] = useState({ name: "", place: "", image: "", des: "" });
    let navigate = useNavigate();
    let token=localStorage.getItem("token");

    useEffect(()=>{
        if(!token){
            navigate("/");
        }
    })

    function changeHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    
    async function submitHandler(e) {
        e.preventDefault();
        console.log(user);
        for (let each in user) {
            if (!user[each]) {
                alert("Enter all details");
            }
        }

        let res = await axios.post("http://localhost:5000/post/addposts",user,{headers:{Authorization:"test "+token}});

        console.log(res.data);
        // console.log(res.data.success);
        // console.log(res.data.message);

        if (res.data.success) {
            alert(res.data.message);
            navigate("/post/allposts");
        } else {
            alert(res.data.message);
            window.location.reload(false);
        }
    }
    return (
        <div className="addpost">
            <Header />
            <h1>Add post </h1>
            <form>
                <label for="name">Name:</label><br />
                <input name="name" value={user.name} type='text' onChange={changeHandler} placeholder='Enter post name' /><br />
                <label for="place">Place:</label><br />
                <input name="place" value={user.place} type='text' onChange={changeHandler} placeholder='Enter post place' /><br />
                <label for="image">Image:</label><br />
                <input name="image" value={user.image} type='text' onChange={changeHandler} placeholder='Enter img link' /><br />
                <label for="des">Description:</label><br />
                <input name="des" value={user.des} type="text" onChange={changeHandler} placeholder='Enter your description' /><br/>
                <input type='submit' className="btn" onClick={submitHandler} value={'Submit'} />
            </form>
        </div>

    )
}

export default Addposts;