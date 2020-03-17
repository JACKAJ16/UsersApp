import React from 'react';
import { Link } from "react-router-dom";
import Topost from '../Create/create.js'
import axios from "axios";
import './Posts.css';
import Header from '../Header/header.js'




class Posts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: []
		}
	}
	
	//Fetching exact user's posts
	componentDidMount() {
	const id = this.props.location.state.id;
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => {
           this.setState({
            posts: res.data
          });
        },
        (error) => {
          console.log(error)
        }
      )
  	}	


	render() {
		return (
			<div className="posts">
				<Header header="Posts"/>
				<table className="posts-table">
					<thead>
						<tr>
		 			 		<th>Post ID</th>
		 			 		<th>Post title</th>
		 			 		<th>Post body</th>
		 			 	</tr>
	 			 	</thead>
	 			 	<tbody>
		 			 	{this.state.posts.map((post) => {
		 			 		return (
		 						<tr key={post.id}>
									<td className="td1">{post.id}</td>
									<td>{post.title}</td>						
									<td>{post.body}</td>
									<td>
										<Link className="detail-btn" to={{ pathname: `/post/${post.id}`,
													state: {id: post.id, post: post.body, title: post.title}}}>Details
										</Link>
									</td>
								</tr>
		 			 		)})}
	 			 	</tbody>		 			 	
	 			</table>
	 			<Topost />
			</div>
		)
	}
}









export default Posts