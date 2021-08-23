import styles from '../usercreate/usercreate.module.css'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsersStartThunk } from '../../store/users/thunks'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'; 


const UserUpdate = () => {
   const { id } = useParams()
   const users = useSelector(state => state.users.data) 
   
   const [name, setName] = useState('');
   const dispatch = useDispatch(); 
    const history = useHistory(); 



    useEffect(() => {        
        const user = users.find(user => user.id === parseInt(id))        
        setName(user.name); 
    }, [users, id])


    const handlerOnUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUsersStartThunk({id:parseInt(id), name:name})) 
        history.push('/')  
        Swal.fire("Updated record")
    }

    return (
        <div>
             <div className={styles.centered}>
            <form onSubmit={handlerOnUpdate}>
            <label className="form-label">Name</label>
                <input 
                class="form-control"
                type="text" 
                value = {name}
                onChange={e => setName(e.target.value)} 
                />
                <button type="submit" className="my-3 mx-3 btn btn-outline-primary">Update</button>
                <button className="btn btn-outline-success"> <NavLink to='/'>Back </NavLink>  </button>

            </form>

            </div>
        </div>
    )
}

export default UserUpdate
