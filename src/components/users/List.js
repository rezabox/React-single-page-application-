import { Link } from "react-router-dom";

const ListUsers = ({users})=>{
  return(
      <>  
      {users.map(user => (
          <div className="col-md-4 p-3" key={users.id}>
          <div className="card-header ">
             <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">username : {user.username}</li>
            <li className="list-group-item">email : {user.email}</li>
            <li className="list-group-item">phone : {user.phone}</li>
          </ul>
        </div>
     ))}
      </>
   )
}

export default ListUsers;