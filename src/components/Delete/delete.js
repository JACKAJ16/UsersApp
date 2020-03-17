import React, {Component} from "react";
import axios from "axios";
import './delete.css';


class Delete extends Component {	
	

	//Delete method 
	handleDelete = e => {
		e.preventDefault()
		axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
			.then(response => {
				console.log(response)			
				alert("Post with id " + this.props.id + " has been delited!")
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<div>
				<button className="delete-btn" onClick={this.handleDelete}>Delete</button>
			</div>
		)
	}
}

export default Delete