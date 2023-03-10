import * as React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

export const BlogPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> setPosts(data))
  }, [])
  return (
    <div>
      <h1>Ouer </h1>
     {posts.map(post => {
          <Link key={post.id} to={`/posts/${post.id}`}>
             <li>
             {post.title}
             </li>
            </Link>   
        })}
    </div>
  )
}