import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quiz(props) {


const loop = () => {

return (
<ul className="answerOptions">
          {props.answerOptions.map( //this loops through all object in the answer and create correspond number of "AnswerOption"
            (object) => {
                  return (
                    <AnswerOption
                      key={object.content} //actual question 
                      answerContent={object.content} //actual question
                      answerType={object.type} //what the answer refers to 
                      answer={props.answer} 
                      questionId={props.questionId} 
                      onAnswerSelected={props.onAnswerSelected}
                      /> 
                      );
                        }
  )}

        </ul>
); 

}



console.log(props.answerOptions)
  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount
          counter={props.questionId} // int 
          total={props.questionTotal} //int 
        />
        <Question content={props.question} />

        {false? console.log('from quiz is true')

             : console.log('from quiz is not true')} 
        

        {true? loop()  
         :  console.log('from quiz is not true')}
      

    
      </div>
    </ReactCSSTransitionGroup>
  );
}



export default Quiz;
