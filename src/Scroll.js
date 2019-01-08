import React from 'react';
const Scroll = (props) =>  {
  return (
    <div style={{ overflowY:'scroll' ,height: '540px' }} >
      {console.log('hi')}
      {props.children}
    	
    </div> 
  ); 
};
export default Scroll;