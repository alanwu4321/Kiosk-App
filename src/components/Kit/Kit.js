import React from 'react';
import Pic from './Pic';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Example from '../Checkout/Example'

const Kit = ({ name, content, id, img, key1, endcheck, show1, show2, key2 }) => {
	console.log(show1)
	var cardStyle = {
		width: '15rem'
	};
	const transitionprops = {
		transitionName: 'example',
		transitionEnterTimeout: 900,
		transitionLeaveTimeout: 900,
		transitionLeave: true,
		transitionEnter: true,
		transitionAppear: true,
		transitionAppearTimeout: 900
	};
	
	return (
		<div>
			<ReactCSSTransitionGroup {...transitionprops}>
				<div className='card fr m-3 grow ' style={cardStyle} key={key2}>
					<Pic pic={img} show2={show2} />
					<div className='card-body' >
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{content}</p>
						<small> $ {key1} </small>
						<input className=' f6 link dim br1 ba bw1 ph3 pv2  dib btn btn-sm btn btn-link  ' type="button"
							onClick={() => { show1(name) }}
							value=" -> Buy Now" />
					</div>
				</div>
			</ReactCSSTransitionGroup>
		</div>
	);
}

export default Kit;