import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3002/category";

export default function Get() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then(res =>{
        console.log(res);
        setPost(res.data)
    }
    ).catch(err =>{
      console.log(err);
      
    })
  }, []);

  if (!post) return null;

  return (
    <div>
      <ul>
        {
          post.map(post => <li key={post.id}>{post.title} </li>)
        }
      </ul>
    </div>
  );
}