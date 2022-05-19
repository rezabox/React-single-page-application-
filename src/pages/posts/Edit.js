import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditForm from "../../components/posts/EditForm";

const EditPost = () => {
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
        <>  

             {error && <div>{error}</div>}
             {loading && <div className="spinner-border"></div>}
             {post && <EditForm post={post}/>}
        </>
   )
}
export default EditPost;