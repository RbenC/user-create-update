import { NavLink } from 'react-router-dom'

const navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					<img src="../../../logo.jpg" alt="logo" className="App-logo" width="70px"/>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="/" exact>
								Home
							</NavLink>
						</li>						
						<li className="nav-item">
							<NavLink className="nav-link" to="/user/create">
								Create
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default navbar
