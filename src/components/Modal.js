import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Modal.css';

export default class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { modalOpen, closeModal } = value;
					const { img, title, price } = value.modalProduct;

					if (!modalOpen) {
						return null;
					} else {
						return (
							<div className="modal-container">
								<div className="container">
									<div className="row">
										<div
											id="modal"
											className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
										>
											<h5>item added to the cart</h5>
											<img src={img} className="img-fluid" alt={title} />
											<h5>{title}</h5>
											<h5 className="text-muted">price : ₹ {price}</h5>
											<Link to="/">
												<Button onClick={() => closeModal()}>continue shopping</Button>
											</Link>
											<Link to="/cart">
												<Button onClick={() => closeModal()}>go to cart</Button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}
