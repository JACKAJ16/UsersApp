import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './Users.css';
import Header from '../Header/header.js'



class Users extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
	}


	//Fetching all users from the start
	componentDidMount() {
    axios.get("https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/users")
      .then(res => {
            this.setState({
            users: res.data
          });
        },
        (error) => {
           console.log(error)
        }
      )
  	}	


	render() {
		return (
			<div>
			<Header header="Users"/>
			 <table className="user-table">
			 		<thead>
				 		<tr>
				 			<th>User ID</th>
				 			<th>Name</th>
				 			<th>Username</th>		 					
				 			<th>Email</th>
				 		</tr>
			 		</thead>	
					<tbody>
					 	{this.state.users.map((user) => {
							return (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>								
									<td>
										<Link to={{ pathname: `/user/${user.id}`,
																  state: {id: user.id}}}>Posts
							  			</Link>
									</td>
								</tr>
							)})} 
					 </tbody>	
  		 </table>
  		</div> 
		 )}}

	


export default Users