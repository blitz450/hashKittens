import React from 'react';
import Card from './Card';

const CardList=({robos})=>{
	return(
		<div>
		{
			robos.map(({id, name, email})=>{
				return (
					<Card 
						key={id} 
						id={id} 
						name={name} 
						email={email}  
					/>
				);	
			})
		}
		</div>
	);
}

export default CardList;

