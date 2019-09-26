import React from 'react';
import './style.css'

const SearchBar = (props) => {
	return (
		<div className={`search-bar ${props.myClass}`}>
			<input placeholder="Sök på K-Play"/>
			<img src="/assets/svgs/search.svg" alt="search icon"/>
		</div>
	);
};

export default SearchBar;