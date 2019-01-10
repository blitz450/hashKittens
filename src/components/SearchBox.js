import React from 'react';

const SearchBox=({searchfield, searchchange})=>{
	return(
			<div className='pa2'>
				<input 
				className='pa3 ba b--green bg-lightestblue'
				onChange={searchchange} 
				type='Search' 
				placeholder='Search Kittens' />
			</div>
	);
}
export default SearchBox;