import React from 'react';
import KitDisplay from '../components/KitDisplay';

  
function Display ({firstAidKits,answer,questionId})  

{

const qcount = questionId-2;  //checking the array that belongs to type

function check (b){

	console.log('From Display',questionId,qcount)

	return b.Type[qcount] === answer;
}


 const filteredRobots = firstAidKits.filter(check);


    
console.log('From Display',filteredRobots)

    return(
 
           {filteredRobots}
     
      );

  }




export default Display;