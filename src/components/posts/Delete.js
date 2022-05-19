import { useState,useEffect } from "react";
import Swal from "sweetalert2";

const DeletePost = ({postId}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleChange= ()=>{
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'Delete',
 })
 .then((res) => {
     setLoading(false);
     setError(null);
     Swal.fire(
        `Post ${postId} Deleted!`,
        'Thank you!',
        'success'
      )
 }).catch(err =>{
       setError(error.message);
       setLoading(false);
 })
}
  return(
      <>
      <button className="btn btn-sm btn-danger me-4" onClick={handleChange}>
          Delete
          {loading && <div className="spinner-border spinner-border-sm"></div>} 
          </button>
          {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
      </>

  )
}
export default DeletePost;