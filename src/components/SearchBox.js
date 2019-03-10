import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField}) => {
	console.log('SearchBox');
	return (
		<div className = 'searchBox'>
			<input 	type='search' 
					placeholder='type here' 
					onChange={searchField}
					aria-label='search robots'
			/>
		</div>
	)
}

export default SearchBox;