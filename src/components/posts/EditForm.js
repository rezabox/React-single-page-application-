import { useState,useEffect } from "react";
import Swal from "sweetalert2";
const EditForm = ({post}) => {
    const [title,setTitle] = useState('');
    const [body,setBody] =  useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
       method: 'PUT',
       body: JSON.stringify({
         title,
         body,
         userId: 1,
         id: post.id
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     })
     .then((res) => res.json())
     .then((data) => {
         setLoading(false);
         setError(null);
         Swal.fire(
            'Post Edited!',
            'Thank you!',
            'success'
          )
     }).catch(err =>{
           setError(error.message);
           setLoading(false);
     })

    }
    useEffect(()=>{
        setTitle(post.title);
        setBody(post.body);
    },[post])
    
 return(
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-8">
              <h2>Edit Post:</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
              <div class="mb-3">
                    <label  class="form-label">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" class="form-control"/>
                    <div className="form-text text-danger">
                          {title ? '' : 'Title is Requre'}
                    </div>
              </div>
             <div class="mb-3">
             <label  class="form-label">Body</label>
             <textarea class="form-control" onChange={(e) => setBody(e.target.value)} value={body} rows="4"></textarea>
               <div className="form-text text-danger">
                   {body ? '' : 'Body is Requre'}
               </div>
             </div>
             <button className="btn btn-dark" type="submit" disabled={title === '' || body === ''}>
                 Edit
                 {loading && <div className="spinner-border spinner-border-sm"></div>} 
                 </button>
                 {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
             </form>
        </div>
    </div>
</div>
 )
} 
export default EditForm;