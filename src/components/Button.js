import styled from 'styled-components';

export const Button = styled.button`
	text-transform: capitalize;
	font-size: 1rem;
	background-color: transparent;
	color: #fff;
	border-radius: 5px;
	outline: none;
	border: 0.5px solid var(--lightBlue);
	border-color: ${(props) => (props.cart ? '(var--mainYellow)' : 'var(--lightBlue)')};
	color: ${(prop) => (prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
	padding: 0.2rem 0.7rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background-color: ${(prop) => (prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
		color: var(--mainBlue);
	}
`;
