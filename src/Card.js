import React from 'react';

const Card=({id, name, email})=>{
	return(
		<div className=' tc bg-silver dib br3 pa3 ma2 bw2 grow shadow-5'>
			<img alt= 'robot ' src={`https://robohash.org/${id}rando?size=130x130`} />
			<div >
			 	<h4>{name}</h4>
			 	<p style={{fontSize:'13px'}}>{email}</p>
			</div>
		</div>
	);
}
export default Card;