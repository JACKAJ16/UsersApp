import React, {Component} from "react";
import axios from "axios";
import Header from '../Header/header.js'
import './put.css';


class Put extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.location.state.title,
			body: this.props.location.state.post
		}	
	}
	

	//PUT method
	handleSubmit = e => {
		e.preventDefault()
		axios.put(`https://jsonplaceholder.typicode.com/posts/${this.props.location.state.id}`, this.state )
			.then(response => {
				alert("Post with id " + this.props.location.state.id +" has been edited!")
			})
			.catch(error => {
			})
	}


		handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		const { title, body } = this.state
		return (
			<div>
				<Header header="Edit post"/>
				<form className="edit-form" onSubmit={this.handleSubmit}>
					<h1>Edit post</h1>
					<div>
						<label htmlFor="post-id">Post ID</label>
						<br />
						<input disabled id="post-id" type="text" name="userId" value={this.props.location.state.id}/>
					</div>
					<div>
						<label htmlFor="post-title">Post title</label>
						<br />
						<textarea id="post-title" type="text" name="title" value={title} onChange={this.handleChange} />
					</div>
					<div>
						<label htmlFor="post-body">Post body</label>
						<br />
						<textarea id="post-body" type="text" name="body" value={body} onChange={this.handleChange} />
					</div>
					<button className="edit-btn" type="submit">Edit post</button>
				</form>
				</div>
			)
		}
	}

export default Put