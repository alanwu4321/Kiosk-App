import React from 'react';


const Pic = ({pic,show2}) => {


  return (

	<img className = 'card-img-top grow ' src = {pic} alt = 'asdf' onClick = {() => {show2(pic)} }  />

  );

}

export default Pic;