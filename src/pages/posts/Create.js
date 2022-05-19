import { useState } from "react";
import Swal from "sweetalert2";
const CreatePost = ()=>{
    const [title,setTitle] = useState('');
    const [body,setBody] =  useState('');
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const handleSubmit = (e) => {
       e.preventDefault();

       setLoading(true);
       fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
         title,
         body,
         userId: 1,
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     })
     .then((res) => res.json())
     .then((data) => {
         setLoading(false);
         setError(null);
         

Swal.fire({
    title: 'Are you sure to create post?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, create it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Created!',
        'Your file has been created.',
        'success'
      )
    }
  })
     }).catch(err =>{
           setError(error.message);
           setLoading(false);
     })

    }
  return(
       <div className="container mt-5">
           <div className="row">
               <div className="col-md-6">
                     <h2>Create Post:</h2>
                     <form onSubmit={(e) => handleSubmit(e)}>
                     <div class="mb-3">
                           <label  class="form-label">Title</label>
                           <input onChange={(e) => setTitle(e.target.value)} type="text" class="form-control"/>
                           <div className="form-text text-danger">
                                 {title ? '' : 'Title is Requre'}
                           </div>
                     </div>
                    <div class="mb-3">
                    <label  class="form-label">Body</label>
                    <textarea class="form-control" onChange={(e) => setBody(e.target.value)} rows="3"></textarea>
                      <div className="form-text text-danger">
                          {body ? '' : 'Body is Requre'}
                      </div>
                    </div>
                    <button className="btn btn-dark" type="submit" disabled={title === '' || body === ''}>
                        Create
                        {loading && <div className="spinner-border spinner-border-sm"></div>} 
                        </button>
                        {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
                    </form>
               </div>
           </div>
       </div>
  )
}
export default CreatePost;