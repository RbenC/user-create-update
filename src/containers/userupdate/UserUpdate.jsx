import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsersStartThunk } from '../../store/users/thunks'
import { useHistory } from 'react-router-dom'



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
    }

    return (
        <div>
            <form onSubmit={handlerOnUpdate}>
                <input 
                type="text" 
                value = {name}
                onChange={e => setName(e.target.value)} 
                />
                <button type="submit">Update</button>

            </form>

           
        </div>
    )
}

export default UserUpdate
