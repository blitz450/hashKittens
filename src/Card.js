import React from 'react';

const Card=({id, name, email})=>{
	return(
		<div className=' tc bg-silver dib br3 pa3 ma2 bw2 grow shadow-5'>
			<img alt= 'robot ' src={`https://robohash.org/${id}rando?size=100x100`} />
			<div className='f7'>
			 	<h2>{name}</h2>
			 	<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;