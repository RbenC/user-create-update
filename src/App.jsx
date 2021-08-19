import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import './App.css'
import UserCreate from './containers/usercreate/UserCreate';
import UserDelete from './containers/userdelete/UserDelete';
import UserList from "./containers/userlist/UserList";
import UserUpdate from './containers/userupdate/UserUpdate';

function App() {
	
	return (
		<div className="App" >
			<Router>
				<NavLink to='/' className="mx-2">
					Home  
				</NavLink>
				<NavLink to='/user/create'>
					 Create
				</NavLink>

				<Switch>
					<Route path='/' exact>
						<UserList/>
					</Route>
					<Route path='/user/delete/:id' exact>
						<UserDelete/>
					</Route>
					<Route path='/user/update/:id' exact>
						<UserUpdate/>
					</Route>

					<Route path='/user/create' exact>
						<UserCreate/>
					</Route>

				</Switch>
			</Router>
		</div>
	)
}

export default App
