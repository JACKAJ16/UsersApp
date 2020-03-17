import React from 'react';
import './header.css';
import { Link } from "react-router-dom";


const Header = (props) => {
		return (
			<div className="header">
				<h1>{props.header}</h1>
				<div className="header-buttons">
					{props.header !== "Users" ?  <Link className="header-btn" to="/">Home</Link> : null}
				</div>	
			</div>
		)
}






export default Header;