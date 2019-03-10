import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
	console.log('CardList');
	return (
		<div className = 'cardList'>
			{robots.map(el => {
				return (
					<Card id={el.id} name={el.name} email={el.email} key={el.id}/>
				)
			})}
		</div>
	)
}

export default CardList;