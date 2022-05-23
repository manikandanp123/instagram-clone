import './style.css';
import { BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Header from './header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Posts() {
  const [posts, setPost] = useState([]);
  const [heart, setHeart] = useState(false);
  const token = localStorage.getItem("token");
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      async function fetchData() {
        let res = await axios.get("http://localhost:5000/post/myposts", { headers: { Authorization: "test " + token } });
        console.log(res.data);
        setPost(res.data);
        if (res.data.length === 0) {
          alert("No post available");
          navigate("/post/addposts");
        }
      }
      fetchData();

    } else {
      navigate("/");
    }
  }, []);


  async function deletePost(id) {
    let res = await axios.delete(`http://localhost:5000/post/delete/${id}`, { headers: { Authorization: "test " + token } });
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      alert("Post Deleted");
      window.location.reload(false);
    }
  }

  async function likes(id) {
    let res = await axios.put("http://localhost:5000/post/likes", { Id: id }, { headers: { Authorization: "test " + token } });
    console.log(res.data);

    async function fetchData() {
      let res = await axios.get("http://localhost:5000/post/allposts", { headers: { Authorization: "test " + token } });
      console.log(res.data);
      setPost(res.data.data);
      setCurr(res.data.currUser);

      if (res.data.length === 0) {
        alert("No post available");
        navigate("/post/addposts");
      }

    }
    fetchData();
  }

  async function unlikes(id) {
    let res = await axios.put("http://localhost:5000/post/unlikes", { Id: id }, { headers: { Authorization: "test " + token } });
    console.log(res.data);

    async function fetchData() {
      let res = await axios.get("http://localhost:5000/post/allposts", { headers: { Authorization: "test " + token } });
      console.log(res.data);
      setPost(res.data.data);
      setCurr(res.data.currUser);

      if (res.data.length === 0) {
        alert("No post available");
        navigate("/post/addposts");
      }
    }
    fetchData();
  }

  return (
    <div className="App">
      <Header />
      {posts.map((post, index) => {
        return (
          <div className='middle' key={index}>
            <div className='np'>
              <div>
                <h2>{post.name} </h2>
                <p>{post.place}</p>
              </div>
              {/* <BsThreeDots className='threedots' /> */}
              <button className='threedots del' onClick={() => deletePost(post._id)}>Delete</button>
            </div>
            <img className='image' src={post.image} alt="photo" />
            <div >
              {post.likes.includes(post.user) ? <AiFillHeart className='heart' onClick={() => unlikes(post._id)} /> : <AiOutlineHeart className='heart' onClick={() => likes(post._id)} />}
              <BsFillArrowUpRightSquareFill className='heart' />
              <p className='date'>{post.date}</p>
              <p>{post.likes.length} likes</p>
            </div>

            <h4>Kick start your bang career</h4>
            <p className='allcom'>All comments</p>
            <ul>
              {post.comment.map((comment, index) => {
                return (
                  <div key={index}>
                    <h4>{"$"} {comment.name}</h4>
                    <li>{comment.posts}</li>
                  </div>
                )
              })}
            </ul>
          </div>
        )
      })}

    </div>
  );
}

export default Posts;
