import React from 'react';

const Scroll = (props) => {
  return (
    <div className = 'mt-5' style={{ overflow: 'scroll',  border:'1px dotted rgba(0,0,0,.125)' , height: '850'}}>
      {props.children}
    </div>
  );
};

export default Scroll;