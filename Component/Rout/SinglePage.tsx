import * as React from "react";
import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'


export const SinglePage =() => {
  console.log(useParams())
  const {id}=useParams()
  const [post, setPosts] = useState(null)
  console.log(id)
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts/${id}')
    .then(res=> res.json())
    .then(data=> setPosts(data))
  }, [])

return (
  <div>
{post && (
  <div>
  <h1>{post.title} </h1>
  <p>{post.body}</p>
  </div>
)}
    </div>
)
}