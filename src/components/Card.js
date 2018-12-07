import React from 'react';
import './Card.css';

const Card = ({id,name,email}) => {
	return (
		<div className='card'>
			<img src={`https://robohash.org/${id}?200x200`} alt='icon'/>
			<p>{name}</p>
			<p>{email}</p>
		</div>
	)
}

export default Card;