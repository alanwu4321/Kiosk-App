import React from 'react';

function AnswerOption(props) {


console.log('from answer option', props.answer)
console.log('from answer option 1', props.answerType)
  return (
    <li className="answerOption grow">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answer === props.answerType }
        id={props.answerType}
        value={props.answerContent}
        //disabled={props.answer}
        onChange={props.onAnswerSelected}  //this trigger everything 
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}> 
        {props.answerContent}
      </label>
    </li>
  ); //this htmlFor lable is for a certain id input radio button 

}

export default AnswerOption;
