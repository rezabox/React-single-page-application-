import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeletePost from "../../components/posts/Delete";

const ShowPosts = ()=>{
 const { postId } = useParams();
 const [post, setPost] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 useEffect(()=> {
     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
     .then((response) => response.json())
     .then((json) => 
         {
         setPost(json);
         setLoading(false);
         setError(null);
     }).catch(err =>{
         setError(err.message);
         setLoading(false);
     })
 },[postId])
   return(
           <div className="container mt-5">
            <div className="row g-3">
             {error && <div>{error}</div>}
             {loading && <div className="spinner-border"></div>}
             {post && <div className="col-md-6 " >
           <div className="card-header ">
             <span>{post.title}</span>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">{post.body}</li>
          </ul>
          <div className="container bg-light p-2">
                  <DeletePost postId={post.id}/>
                  <Link type="button" className="btn btn-sm btn-dark" to={`/posts/Edit/${postId}`}>Edit</Link>
              </div>
        </div>
        }
    </div>
</div>
   )
}

export default ShowPosts;