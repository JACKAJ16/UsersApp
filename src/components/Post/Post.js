import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Delete from '../Delete/delete.js';
import './Post.css';
import Header from '../Header/header.js';



class Posts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comments: [],
			posts: []
		}
	}


	componentDidMount() {
		const id = this.props.location.state.id;
	    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
	      .then(res => {
	           this.setState({
	            comments: res.data
	          });
	        },
	        (error) => {
	          console.log(error)
	        }
	      )
	     
	     
  	}	


	

	render() {
		console.log(this.props.location)
		return (
			<div>
				<Header header="Post details"/>
				<table className="post-table">
						<tbody>
							<tr key={this.props.location.state.id}>
								<td>
									Post title:
								</td>
								<th>
									{this.props.location.state.title}
								</th>
							</tr>
			
							<tr>
								<td>
									Post body:
								</td>
								<td>
									{this.props.location.state.post}
								</td>
							</tr>
						</tbody>	
				</table>
				
				<div className="btn-row">
					<Link className="edit-btn" to={{ pathname: `/toedit/${this.props.location.state.id}`,
					state: {id: this.props.location.state.id, title: this.props.location.state.title, post: this.props.location.state.post}}}>Edit</Link>
					<Delete id={this.props.location.state.id} />
				</div>

				<h1 className="comments-header">Comments</h1>

				<table className="post-table">
					<thead>
						<tr>
							<th>Email</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody>
			 		 	{this.state.comments.map((comment) => {
			 		 		return (
								<tr key={comment.id}>
									<td>
										{comment.email}
									</td>							
									<td>
										{comment.body}
										</td>
								</tr>	
								)
			 			 	})}
		 			</tbody>
		 		</table>
 			</div>
			)
		}
	}


export default Posts