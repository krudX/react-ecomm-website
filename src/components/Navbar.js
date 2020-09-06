import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
				<Link to="/">
					<FaHome className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							products
						</Link>
					</li>
				</ul>
				<Link to="/cart" className="ml-auto">
					<Button className="show-cart align-items-center">
						<FaShoppingCart className="mr-2" /> my cart
					</Button>
				</Link>
			</nav>
		);
	}
}
