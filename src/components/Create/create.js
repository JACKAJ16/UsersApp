import React, {Component} from "react";
import axios from "axios";
import './Create.css';


class Topost extends Component {

	constructor(props) {
		super(props)
		this.state = {
			title: "",
			body: ""
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	

	//Submit is sending POST request to jsonplaceholder 
	handleSubmit = e => {
		e.preventDefault()
		axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				alert("Post added!")
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { title, body } = this.state
		return (
			<div>	
				<form id="form" onSubmit={this.handleSubmit}>
					<h1>Create a new post</h1>
					<div>
						<label htmlFor="title">Title</label>
						<br /> 
						<input id="title" placeholder="Enter title here..." type="text" name="title" value={title} onChange={this.handleChange}/>	
					</div>
					<div>
						<label htmlFor="body">Body</label>
						<br />
						<textarea id="body" placeholder="Enter post's body here..." type="text" name="body" value={body} onChange={this.handleChange}/>
					</div>
					<button className="submit-btn" type="submit">Add post</button>
				</form>
				</div>
			)
	}
}

export default Topost