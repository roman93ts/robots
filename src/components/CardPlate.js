import React from 'react';
import Card from './Card';
import './CardPlate.css';

const CardPlate = ({array}) => {
	return (
		<div className='cardplate'>
			{
				array.map((user) => {
				return (<Card 
						id={user.id} 
						name={user.name} 
						email={user.email} 
						key={user.name}/>)
				})
			}
		</div>
	)
}

export default CardPlate;