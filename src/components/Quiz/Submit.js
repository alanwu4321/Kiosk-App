import React from 'react';


const SliderSubmit = (props) => 

{



const a = () => {

props.fun(props.value);

} 


return (

<div> 

 <button className = ' tc f6 link dim br1 ba bw1 ph3 pv2 mb-3 dib btn btn-outline-secondary btn-lg ' type = 'button' onClick = {a}> Confirm </button> 

</div> 





	); 




}


export default SliderSubmit