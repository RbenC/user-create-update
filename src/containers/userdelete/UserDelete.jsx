
import { NavLink, useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { deleteUsersStartThunk } from '../../store/users/thunks'
import Swal from 'sweetalert2'; 

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUsersStartThunk(parseInt(id) ))
                history.push('/')
            }
          })
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
            <button className="btn btn-outline-success"> <NavLink to='/'>Back </NavLink>  </button>
            
        </>
    )
}

export default UserDelete
