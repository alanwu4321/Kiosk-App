import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Submit from './Submit'
import Question from './Question';
import QuestionCount from './QuestionCount';

class HorizontalCustomLabels extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      horizontal: 5,
    }
  }

  handleChangeHorizontal = value => {
    this.setState({
      horizontal: value
    })
  };



  render () {

    

    const a = this.props.min

    const { horizontal } = this.state
    const horizontalLabels = {
      [this.props.min]: `${this.props.label1}`,
      [(this.props.max + this.props.min)/2] : `${this.props.label2}`,
      [this.props.max]: `${this.props.label3}`,
    }


 

    const formatkg = value => 'Selected: ' + value + ' ' +this.props.unit

    return (
      
 
      <div className='slider custom-labels'>
      <div>
       <QuestionCount
          counter={this.props.questionId} // int 
          total={this.props.questionTotal} //int 
        />
      <Question content = {this.props.question} /> 
      </div>
     
        <Slider className ='fc mt-4'
          min={this.props.min}
          max={this.props.max}
          value={horizontal}
          labels={horizontalLabels}   
          format={formatkg}
          handleLabel={horizontal}
          onChange={this.handleChangeHorizontal}
        />
        <div className='value mb-4 lead'>{formatkg(horizontal)}</div>
        <Submit  fun = {this.props.fun} value = {horizontal} /> 
  
      </div>
     
    )
  }
}

export default HorizontalCustomLabels