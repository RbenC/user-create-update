
import { NavLink, useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { deleteUsersStartThunk } from '../../store/users/thunks'

const UserDelete = () => {
    const { id } =  useParams()
    const users = useSelector(state => state.users.data)
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const history = useHistory(); 
    
    useEffect(() => {
        getUser();
    })
    
    const handlerOnDelete = () => {
        dispatch(deleteUsersStartThunk(parseInt(id) ))
        history.push('/')
    }
    
    const getUser = () => {
        const user = users.filter((user) => user.id === parseInt(id))[0];         
        setUser(user)
    }

    return (
        <>
            <div className="container">
                <p>User :  {user.id}</p>
                <p>Name :  {user.name }</p>            
            </div>

            {/* <button onClick={handlerOnDelete}>Confirmar</button> */}
            <button onClick={handlerOnDelete} className="btn btn-outline-info mx-4">💾 Confirm</button>
            <button className="btn btn-outline-success"> <NavLink to='/'>Volver </NavLink>  </button>
            
        </>
    )
}

export default UserDelete
