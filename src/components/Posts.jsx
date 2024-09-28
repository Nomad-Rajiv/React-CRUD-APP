import React, { useEffect, useState } from 'react'
import { getPost } from '../api/PostApi';

function Posts() {
  const [data, setData] = useState([]);
  const getPostData = async() =>{
    const res = await getPost()
    console.log(res.data);
    setData(res.data);
    
  }

  useEffect(() =>{
    getPostData()
  },[])

  return (
    <section className='section-post'>
      <ol>
      {
        
        data.map((currEle) => {
          const {id, body, title} = currEle
          return (
            <li key={id}>
                <p> Title: {title}</p>
                <p>Body: {body}</p>
                <button>Edit</button>
                <button className='btn-delete'>Delete</button>
            </li>
          )
        })
        
      }
      </ol>
    </section>
  )
}

export default Posts
