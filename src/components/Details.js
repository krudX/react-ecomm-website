import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { Button } from './Button';
export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { id, company, img, price, title, inCart, info } = value.detailProduct;
					return (
						<div className="container py-5">
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
									<h1>{title}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3">
									<img src={img} alt="{title}" className="img-fluid" />
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h2>model : {title}</h2>
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
										made by : <span className="text-uppercase">{company}</span>
									</h4>
									<h4 className="text-blue">
										<strong>
											price : <span>{price}</span>
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										info about the product :
									</p>
									<p className="text-muted lead">{info}</p>
									<div className="">
										<Link to="/">
											<Button>back</Button>
										</Link>
										<Button
											disabled={inCart ? true : false}
											onClick={() => {
												value.addToCart(id);
												value.openModal(id);
											}}
										>
											{inCart ? 'in cart' : 'add to cart'}
										</Button>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
