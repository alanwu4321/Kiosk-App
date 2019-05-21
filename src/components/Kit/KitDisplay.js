import React from 'react';
import Kit from './Kit';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {TransitionGroup,CSSTransition} from 'react-addons-css-transition-group';
const KitDisplay = ({ filtered,show,showLightBox }) => {

  console.log(filtered , 'from kit dispaly ', )


console.log(show)



 return (
  //<TransitionGroup>
  //<CSSTransition>


    <div>
      {
        filtered.map((user,i) => {
          return (
            <Kit
              key ={i}
              id={i}
              name={user.Name}
              content={user.Content}
              img = {user.Pic}
              key1={user.Key1}
              show1= {show}
              show2 = {showLightBox}
              key2 = {user.Key2}
              />
          );
        })
      }
    </div>

//    </CSSTransition>
//  </TransitionGroup>

  );
  
  
}

export default KitDisplay;