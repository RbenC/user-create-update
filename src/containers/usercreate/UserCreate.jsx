import styles from  './usercreate.module.css'
import useInput from '../../hooks/useInput'; 
import { NavLink, useHistory} from "react-router-dom"
import { useDispatch } from 'react-redux'

import { createUsersStartThunk } from '../../store/users/thunks'

const UserCreate = () => {
    const [ name, setName ] = useInput('')    
    // const users = useSelector(state => state.users.data)
    const dispatch = useDispatch()
    const history = useHistory(); 

    const handlerOnSave = (e) => {
        e.preventDefault()
        if(name){
            dispatch(createUsersStartThunk({
                id: new Date().getTime(),
                name:name 
            }))
            history.push('/')
        }
        
    }

    return (
        <>
        <h2 className="text-center">Create an User</h2>        
            <div className={styles.centered}>
                <form className={styles.form} onSubmit={handlerOnSave}>
                <div class="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        value={name}
                        onChange={setName}
                    />
                </div>

                
                <button type="submit" className="btn btn-outline-info mx-4">💾 Save</button>
                <button className="btn btn-outline-success"> <NavLink to='/'>Volver </NavLink>  </button>
                </form>      
            </div>
        </>
    )
}

export default UserCreate
