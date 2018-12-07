import React from 'react';
import './SearchField.css';

const SearchField = ({changeSearchField}) => {
	return (
		<div className='input'>
			<input 
				type='search' 
				placeholder='filter robots'
				onChange={changeSearchField}
			/>
		</div>
	);
}

export default SearchField;