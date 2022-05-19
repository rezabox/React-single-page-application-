import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ListPosts from "../../components/posts/List";

const IndexPost = ()=>{
  const [posts,setPosts] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((json) => {
       setPosts(json);
       setLoading(false);
       setError(null);
     }).catch(err =>{
          setError(err.message);
          setLoading(false);
     })
    },[])
  return(
     <>
           <div className="container mt-5">
           <div className="row g-3">
                <h2>Posts:</h2>
                <div>
                  <Link type="button" className="btn btn-outline-dark" to={'/posts/create'}>Create Post</Link>
                </div>
                {loading && <div className="spinner-border"></div>}
                {error && <div>{error}</div>}
                {posts && <ListPosts posts={posts}/>}
           </div>
           </div>
     </>
    )
}

export default IndexPost