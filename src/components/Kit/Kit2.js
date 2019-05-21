import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from '@material-ui/core/Slide';

const Kit2 = ({pic,name,show,key}) => {


var cardStyle = {

	width: '15rem'

};



return (


<div className = 'img-thumbnail fr grow' style = {cardStyle} key ={key} >   <img className = 'img-thumbnail' src = {pic} alt = 'asdf'  key = {key} onClick = {() => {show(pic)}} /></div>




	);

}


export default Kit2;