import { useEffect } from "react"

import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { fetchUsersStartThunk } from "../../store/users/thunks"


const UserList = () => {
    const {data: users, isLoading} = useSelector(state => state.users)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        if(isLoading ==='iddle') 
             dispatch(fetchUsersStartThunk())
    },[isLoading, dispatch])

    return (
        <div>      
            <h2>Users list</h2>      
            {            
                <div className="container text-start">
                    { users.map((user)=> (
                        <div className="row" key={user.id}>
                            <div className="col-4">
                                { user.name }
                            </div>
                            <div className="col-3">
                                <Link className="button button-primary" to={`/user/delete/${user.id}`}> 🗑 </Link>
                                <Link className="button button-primary" to={`/user/update/${user.id}`}> ✎</Link>

                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default UserList
