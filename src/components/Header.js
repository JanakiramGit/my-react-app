import React from 'react';
import { Link } from 'react-router-dom';
import WeatherWidget from './WeatherWidget';
function Header() {
	return (
		<header style={headerStyle}>
			<WeatherWidget />
			<br/>
			<h1>Todo List</h1>
			<Link style={linkStyle} to="/">Home</Link> | { '  ' }
			<Link style={linkStyle} to="/about">About</Link> 
		</header>
	)
}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	paddding: '10px'
}

const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}
export default Header;