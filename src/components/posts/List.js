import { Link } from "react-router-dom";

const ListPosts = ({posts}) =>{
    return(
        <>
          {posts.map(post =>(
               <div className="col-md-4" key={post.id}>
               <div className="card-header p-2">
                   <Link to={`/posts/${post.id}`}>{post.title}</Link>
               </div>
               <ul className="list-group list-group-flush">
                 <li className="list-group-item">{post.body}</li>
               </ul>
             </div>
            ))}
        </>
      
    )
}
export default ListPosts;